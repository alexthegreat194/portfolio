import type { APIRoute } from 'astro';

const resumes = ['Alex_Harlan_-_Resume_1.3.pdf'];

export const GET: APIRoute = async ({ request }) => {
	const target = new URL(`/resumes/${resumes[0]}`, new URL(request.url).origin);
	return Response.redirect(target.href, 302);
};
