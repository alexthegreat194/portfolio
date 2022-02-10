<script>
    import Navbar from "$lib/Navbar.svelte";
    import Banner from "$lib/Banner.svelte";
    import Projects from "$lib/Projects.svelte";
    import Form from "$lib/Form.svelte";
</script>

<Navbar />
<Banner />
<div class="spacer rotate-180 flex" style="background-image: url('/static/layered-waves-haikei.svg');"></div>
<Projects />
<div class="spacer flex" style="background-image: url('/static/layered-waves-haikei.svg');"></div>
<Form />