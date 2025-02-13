import dotenv from 'dotenv';
import clientPromise from '$lib/mongodb-client'
import posthog from 'posthog-js'

dotenv.config();

export const get = async () => {
    console.log('Admin get..');
    posthog.capture('admin_page_access_attempt');
    return {
        body: {
            msg: 'IT WORKED!'
        }
    }
}

export const post = async ({ request }) => {
    console.log('Admin post...');

    const body = await request.json();
    const password = body.password
    const correctPassword = process.env.ADMIN_PASSWORD

    if(password == null || password == undefined){
        posthog.capture('admin_auth_error', {
            reason: 'missing_password'
        });
        console.log('Didnt finish')
        return {
            status: 400,
            body: {
                msg: 'missing password'
            }
        }
    }

    let emails = [];
    const authSuccess = password == correctPassword;
    
    posthog.capture('admin_auth_attempt', {
        success: authSuccess
    });

    if (authSuccess) {
        // connect to database
        const connection = await clientPromise;
        const db = connection.db();
        const collection = db.collection('emails');
    
        let data = await collection.find({}).toArray();
        emails = data;
        
        posthog.capture('admin_emails_fetched', {
            email_count: emails.length
        });
    }

    return {
        body: {
            success: authSuccess,
            emails: emails
        }
    }
};