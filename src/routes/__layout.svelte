<script>
    import "../app.css";
    import logo from '$lib/assets/logo.png'
</script>

<svelte:head>
    <title>Alex Harlan</title>
    <link rel="shortcut icon" href="{logo}" type="image/x-icon">
</svelte:head>

<body class="min-h-screen bg-gray-900 overscroll-none overflow-x-hidden">
    <slot />
</body>