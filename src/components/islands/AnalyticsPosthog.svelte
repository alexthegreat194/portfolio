<svelte:options runes={false} />

<script>
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import posthog from 'posthog-js';

	const dev = import.meta.env.DEV;

	inject({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
			posthog.init('phc_oEdgwsTfN4oWp96IqqkcrQkUDzYUf7tui3zvhOWYjYg', {
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only',
				capture_pageview: true,
			});
			posthog.capture('page_view', {
				path: window.location.pathname,
				referrer: document.referrer,
			});
		}
	});
</script>
