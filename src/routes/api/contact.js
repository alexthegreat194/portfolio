import clientPromise from "$lib/mongodb-client";

export const post = async ({ request }) => {
    // database connection
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

    return {
        status: 300,
        headers: {
            location: '/'
        }
    };
};