import dotenv from 'dotenv';
import clientPromise from '$lib/mongodb-client'
import { ObjectId } from 'mongodb';
import posthog from 'posthog-js'

dotenv.config();

export const post = async ({ request }) => {
    console.log('Admin delete...');
    const body = await request.json();
    const password = body.password
    const correctPassword = process.env.ADMIN_PASSWORD
    const emailId = body.emailId

    if(!password || !emailId){
        posthog.capture('email_delete_error', {
            reason: 'missing_credentials',
            has_password: !!password,
            has_emailId: !!emailId
        });
        return {
            status: 401,
            body: {
                msg: 'missing password or id'
            }
        }
    }

    if (password == correctPassword) {
        try {
            // connect to database
            const connection = await clientPromise;
            const db = connection.db();
            const collection = db.collection('emails');

            const found = await collection.findOne({ _id: ObjectId(emailId) });
            
            if (!found) {
                posthog.capture('email_delete_error', {
                    reason: 'email_not_found',
                    email_id: emailId
                });
                return {
                    status: 404,
                    body: {
                        success: false,
                        error: 'Email not found'
                    }
                }
            }

            // delete email
            const result = await collection.deleteOne({ _id: ObjectId(emailId) })
            console.log(`Deleted ${result.deletedCount} item.`)

            posthog.capture('email_deleted', {
                success: result.deletedCount === 1,
                email_id: emailId
            });

            return {
                body: {
                    success: true
                }
            }
        } catch (error) {
            posthog.capture('email_delete_error', {
                reason: 'database_error',
                error_message: error.message
            });
            return {
                status: 500,
                body: {
                    success: false,
                    error: 'Database error'
                }
            }
        }
    } else {
        posthog.capture('email_delete_error', {
            reason: 'invalid_password'
        });
        return {
            status: 401,
            body: {
                success: false
            }
        }
    }
}