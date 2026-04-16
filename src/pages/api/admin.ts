import type { APIRoute } from 'astro';
import clientPromise from '$lib/mongodb-client.js';

export const prerender = false;

export const GET: APIRoute = async () => {
	console.log('Admin get..');
	return new Response(JSON.stringify({ msg: 'IT WORKED!' }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

export const POST: APIRoute = async ({ request }) => {
	console.log('Admin post...');

	let body: { password?: string };
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

	if (password == null || password === undefined) {
		console.log('Didnt finish');
		return new Response(JSON.stringify({ msg: 'missing password' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	let emails: Array<{ _id: string; email?: unknown; subject?: unknown; message?: unknown }> = [];
	const authSuccess = password === correctPassword;

	if (authSuccess) {
		const connection = await clientPromise;
		const db = connection.db();
		const collection = db.collection('emails');

		const data = await collection.find({}).toArray();
		emails = data.map((doc) => ({
			_id: doc._id.toString(),
			email: doc.email,
			subject: doc.subject,
			message: doc.message,
		}));
	}

	return new Response(JSON.stringify({ success: authSuccess, emails }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};
