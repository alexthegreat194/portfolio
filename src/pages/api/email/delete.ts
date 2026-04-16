import type { APIRoute } from 'astro';
import { ObjectId } from 'mongodb';
import clientPromise from '$lib/mongodb-client.js';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	console.log('Admin delete...');

	let body: { password?: string; emailId?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ msg: 'Invalid JSON' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const password = body.password;
	const correctPassword = import.meta.env.ADMIN_PASSWORD ?? process.env.ADMIN_PASSWORD;
	const emailId = body.emailId;

	if (!password || !emailId) {
		return new Response(
			JSON.stringify({
				msg: 'missing password or id',
			}),
			{
				status: 401,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}

	if (password !== correctPassword) {
		return new Response(JSON.stringify({ success: false }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		const connection = await clientPromise;
		const db = connection.db();
		const collection = db.collection('emails');

		let objectId: ObjectId;
		try {
			objectId = new ObjectId(emailId);
		} catch {
			return new Response(JSON.stringify({ success: false, error: 'Invalid id' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const found = await collection.findOne({ _id: objectId });

		if (!found) {
			return new Response(JSON.stringify({ success: false, error: 'Email not found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const result = await collection.deleteOne({ _id: objectId });
		console.log(`Deleted ${result.deletedCount} item.`);

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return new Response(JSON.stringify({ success: false, error: 'Database error', message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
