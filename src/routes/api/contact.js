import clientPromise from "$lib/mongodb-client";
import sgMail from '@sendgrid/mail'

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

    const newEmail = await collection.insertOne(data)
    console.log(newEmail);

    // send email
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const sendingEmail = {
        to: 'alexharlan194@gmail.com',
        from: 'alexharlan194@gmail.com',
        subject: 'NEW PORTFOLIO SUBMISSION',
        text: `From: ${email}\nSubject: ${subject}\nMessage: ${message}\n`
    };
    sgMail.send(sendingEmail)
    .then(() => console.log('Email sent'))
    .catch(error => console.log(error));

    return {
        status: 302,
        headers: {
            location: '/'
        }
    };
};