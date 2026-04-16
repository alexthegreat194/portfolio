# Portfolio (Astro + Svelte)

Personal site built with [Astro](https://astrobuild.dev/) and [`@astrojs/svelte`](https://docs.astro.build/en/guides/integrations-guide/svelte/). UI lives in Svelte islands under `src/lib/` and `src/components/islands/`; document shell and routes are Astro (`src/pages/`, `src/layouts/`).

Raster and vector artwork for the UI live under [`public/media/`](public/media/) and are referenced with absolute paths such as `/media/logo.png` so they are always copied to the build output and served as static files.

Server routes (`/api/contact`, `/api/admin`, `/api/email/delete`) are implemented as Astro endpoints in `src/pages/api/`. The project uses `output: 'server'` and the [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/) adapter.

## Requirements

- Node.js **>= 22.12.0** (required by Astro 6 and this repo’s `engines` field).

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies            |
| `npm run dev`     | Dev server (default port 4321)  |
| `npm run build`   | Production build                |
| `npm run preview` | Preview the production build    |

## Environment variables

Set these locally (e.g. `.env`) or in your host (e.g. Vercel):

| Variable            | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `MONGODB_URI`       | MongoDB connection string                    |
| `SENDGRID_API_KEY`  | SendGrid API key for contact form email      |
| `ADMIN_PASSWORD`    | Password for `/admin` and email delete API   |

PostHog and Vercel Analytics run in the browser via `src/components/islands/AnalyticsPosthog.svelte`.
