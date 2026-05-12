import { readFile } from 'node:fs/promises';

const resumePath = new URL(
	'../../public/resumes/Alex_Harlan_-_Resume_1.3.pdf',
	import.meta.url
);

const headers = {
	'Content-Type': 'application/pdf',
	'Content-Disposition': 'inline; filename="Alex_Harlan_-_Resume_1.3.pdf"',
};

export async function GET() {
	const pdf = await readFile(resumePath);

	return new Response(pdf, {
		headers,
	});
}

export function HEAD() {
	return new Response(null, {
		headers,
	});
}
