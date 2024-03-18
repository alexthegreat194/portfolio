<script>
    import "../app.css";
    import logo from '$lib/assets/logo.png'
    import { inject } from '@vercel/analytics'
    import { dev } from '$app/env'

    inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <title>Alex Harlan</title>
    <link rel="shortcut icon" href="{logo}" type="image/x-icon">
</svelte:head>

<body class="min-h-screen bg-gray-900 overflow-x-hidden">
    <slot />
</body>