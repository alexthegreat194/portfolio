<svelte:options runes={false} />

<script>
	import Navbar from '$lib/Navbar.svelte';
	import Banner from '$lib/Banner.svelte';
	import Project from '$lib/components/Project.svelte';
	import Contact from '$lib/Contact.svelte';
	import projects from '../../../data/projects.json';

	const spacer = '/media/layered-waves-haikei.svg';
</script>

<Navbar />
<Banner />
<div
	id="projects"
	class="spacer rotate-180 flex"
	style="background-image: url('{spacer}');"
></div>
<div
	class="
    bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden
    grid lg:grid-cols-2 xs:grid-cols-1"
>
	{#each projects as p}
		<Project
			title={p.name}
			tool={p.techStack}
			description={p.description}
			visit={p.liveUrl}
			repo={p.repositoryUrl}
		/>
	{/each}
</div>
<div class="spacer flex" style="background-image: url('{spacer}');"></div>
<Contact />
