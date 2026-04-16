// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// During `astro dev`, the Sec-Fetch middleware can block `/public` assets (e.g. images) when the
// page is opened from a preview, tunnel, or other cross-site context. Allow those Origins only
// while the dev command is running — production builds omit this (see `security.allowedDomains`).
// https://docs.astro.build/en/reference/configuration-reference/#securityalloweddomains
const isAstroDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(),
	integrations: [svelte()],
	security: {
		allowedDomains: isAstroDev ? [{}] : [],
	},
	vite: {
		resolve: {
			alias: {
				$lib: path.resolve(__dirname, 'src/lib'),
			},
		},
	},
});
