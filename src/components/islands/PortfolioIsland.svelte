<svelte:options runes={false} />

<script>
	import Navbar from '$lib/Navbar.svelte';
	import Banner from '$lib/Banner.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';

	const spacer = '/media/layered-waves-haikei.svg';
</script>

<Navbar />
<Banner />
<div
	id="projects"
	class="spacer rotate-180 flex"
	style="background-image: url('{spacer}');"
></div>
<Projects />
<div class="spacer flex" style="background-image: url('{spacer}');"></div>
<Contact />
