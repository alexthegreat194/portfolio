<script>
    import logo from '$lib/assets/logo.png'
    import posthog from 'posthog-js'

    const trackNavigation = (section) => {
        posthog.capture('navigation_click', {
            section: section
        });
    }
</script>

<!-- Navbar -->
<div class="h-14 w-screen fixed z-10 top-0 bg-gray-900 text-gray-50
grid grid-cols-2">
    <div class="h-full 
        flex items-center justify-center gap-3
        font-bold text-xl sm:text-2xl 
        text-red-700">
        <img src="{logo}" alt="Logo" class="h-3/4">
        <span class="whitespace-nowrap">Alex Harlan</span>
    </div>
    <nav class="font-light text-md sm:text-xl text-gray-50
        flex items-center justify-center gap-6">
        <a href="#projects" on:click={() => trackNavigation('projects')}>Projects</a>
        <a href="#contact" on:click={() => trackNavigation('contacts')}>Contacts</a>
    </nav>
</div>