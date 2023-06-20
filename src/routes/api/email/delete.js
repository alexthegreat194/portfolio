import dotenv from 'dotenv';
import clientPromise from '$lib/mongodb-client'
import { ObjectId } from 'mongodb';

dotenv.config();

export const post = async ({ request }) => {
    console.log('Admin delete...');
    const body = await request.json();
    const password = body.password
    const correctPassword = process.env.ADMIN_PASSWORD
    const emailId = body.emailId

    if(!password || !emailId){
        return {
            status: 401,
            body: {
                msg: 'missing password or id'
            }
        }
    }

    if (password == correctPassword) {
        
        // connect to database
        const connection = await clientPromise;
        const db = connection.db();
        const collection = db.collection('emails');

        const found = await collection.findOne({ _id: ObjectId(emailId) });
        // console.log(found)

        // delete email
        const result = await collection.deleteOne({ _id: ObjectId(emailId) })
        console.log(`Deleted ${result.deletedCount} item.`)

        return {
            body: {
                success: true
            }
        }
    } else {
        return {
            status: 401,
            body: {
                success: password == correctPassword
            }
        }
    }
}