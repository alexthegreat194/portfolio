import clientPromise from "$lib/mongodb-client";
import sgMail from '@sendgrid/mail'
import posthog from 'posthog-js'

export const post = async ({ request }) => {
    // database connection
    console.log('Post Request')
    const connection = await clientPromise;
    const db = connection.db()
    const collection = db.collection('emails')

    // form parsing
    const body = await request.formData();
    const email = body.get("email");
    const subject = body.get("subject");
    const message = body.get("message");

    const data = { email, subject, message }
    console.log(data)

    try {
        // add to database
        const newEmail = await collection.insertOne(data)
        console.log(newEmail);

        // Track successful DB insertion
        posthog.capture('contact_form_db_success', {
            email_domain: email.split('@')[1],
            subject_length: subject.length,
            message_length: message.length,
            mongodb_id: newEmail.insertedId.toString()
        });

        // send email
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const sendingEmail = {
            to: 'alexharlan194@gmail.com',
            from: 'alexharlan194@gmail.com',
            subject: 'NEW PORTFOLIO SUBMISSION',
            text: `From: ${email}\nSubject: ${subject}\nMessage: ${message}\n`
        };

        await sgMail.send(sendingEmail)
        console.log('Email sent')
        
        // Track successful email send
        posthog.capture('contact_form_email_sent', {
            success: true,
            email_domain: email.split('@')[1]
        });

        return {
            status: 302,
            headers: {
                location: '/'
            }
        };

    } catch (error) {
        console.error('Error in contact form processing:', error);
        
        // Track errors
        posthog.capture('contact_form_error', {
            error_type: error.name,
            error_message: error.message,
            error_stage: error.code ? 'email_sending' : 'database_insertion'
        });

        return {
            status: 500,
            body: {
                error: 'Internal server error'
            }
        };
    }
};