<script>
    import "../app.css";
    import logo from '$lib/assets/logo.png'
    import { inject } from '@vercel/analytics'
    import { dev } from '$app/env'

    inject({ mode: dev ? 'development' : 'production' });

    import posthog from 'posthog-js'
    import { onMount } from 'svelte';

    onMount(() => {
        // if we are localhost do not track
        if (typeof window != 'undefined' && window.location.hostname != 'localhost') {
            posthog.init(
                'phc_oEdgwsTfN4oWp96IqqkcrQkUDzYUf7tui3zvhOWYjYg',
                { 
                    api_host: 'https://us.i.posthog.com',
                    person_profiles: 'identified_only',
                }
            )
        }
        return
    });
</script>

<svelte:head>
    <title>Alex Harlan</title>
    <link rel="shortcut icon" href="{logo}" type="image/x-icon">
</svelte:head>

<body class="min-h-screen bg-gray-900 overflow-x-hidden">
    <slot />
</body>