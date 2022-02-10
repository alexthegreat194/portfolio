<script>
    import Navbar from "$lib/Navbar.svelte";
    import Banner from "$lib/Banner.svelte";
    import Projects from "$lib/Projects.svelte";
    import Form from "$lib/Form.svelte";
    import spacer from '$lib/assets/layered-waves-haikei.svg'
</script>

<Navbar />
<Banner />
<div class="spacer rotate-180 flex" style="background-image: url('{spacer}');"></div>
<Projects />
<div class="spacer flex" style="background-image: url('{spacer}');"></div>
<Form />