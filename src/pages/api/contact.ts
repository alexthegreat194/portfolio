import type { APIRoute } from 'astro';
import clientPromise from '$lib/mongodb-client.js';
import sgMail from '@sendgrid/mail';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	console.log('Post Request');
	const connection = await clientPromise;
	const db = connection.db();
	const collection = db.collection('emails');

	const body = await request.formData();
	const email = body.get('email');
	const subject = body.get('subject');
	const message = body.get('message');

	const data = { email, subject, message };
	console.log(data);

	if (typeof email !== 'string' || typeof subject !== 'string' || typeof message !== 'string') {
		return new Response(JSON.stringify({ error: 'Invalid form data' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		const newEmail = await collection.insertOne(data);
		console.log(newEmail);

		const apiKey = import.meta.env.SENDGRID_API_KEY ?? process.env.SENDGRID_API_KEY;
		if (!apiKey) {
			console.error('Missing SENDGRID_API_KEY');
			return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		sgMail.setApiKey(apiKey);

		const sendingEmail = {
			to: 'alexharlan194@gmail.com',
			from: 'alexharlan194@gmail.com',
			subject: 'NEW PORTFOLIO SUBMISSION',
			text: `From: ${email}\nSubject: ${subject}\nMessage: ${message}\n`,
		};

		await sgMail.send(sendingEmail);
		console.log('Email sent');

		return Response.redirect(new URL('/', request.url).toString(), 302);
	} catch (error) {
		console.error('Error in contact form processing:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
