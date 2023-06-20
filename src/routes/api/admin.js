
import dotenv from 'dotenv';
import clientPromise from '$lib/mongodb-client'

dotenv.config();

export const get = async () => {
    console.log('Admin get..');
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
        console.log('Didnt finish')
        return {
            status: 400,
            body: {
                msg: 'missing password'
            }
        }
    }

    // console.log({password, correctPassword})
    let emails = [];
    if (password == correctPassword) {
        // connect to database
        const connection = await clientPromise;
        const db = connection.db();
        const collection = db.collection('emails');
    
        let data = await collection.find({}).toArray();
        emails = data;
        // console.log(data)
    }

    return {
        body: {
            success: password == correctPassword,
            emails: emails
        }
    }
};