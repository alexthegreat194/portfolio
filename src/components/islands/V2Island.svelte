<svelte:options runes={false} />

<script>
	import V2Nav from '../../lib/v2/V2Nav.svelte';
	import V2Hero from '../../lib/v2/V2Hero.svelte';
	import V2Projects from '../../lib/v2/V2Projects.svelte';
	import V2About from '../../lib/v2/V2About.svelte';
	import V2Skills from '../../lib/v2/V2Skills.svelte';
	import V2Experience from '../../lib/v2/V2Experience.svelte';
	import V2Writing from '../../lib/v2/V2Writing.svelte';
	import V2Contact from '../../lib/v2/V2Contact.svelte';
</script>

<div
	style="
  background: radial-gradient(at 18% 8%, #3a1818 0, #0c0a09 55%), radial-gradient(at 85% 95%, #1a2a3a 0, transparent 60%);
  color: #f5f0ea;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
"
>
	<!-- Ambient glow orbs -->
	<div
		style="position: absolute; top: 700px; left: 40px; width: 320px; height: 320px; border-radius: 50%; background: #b91c1c; filter: blur(90px); opacity: 0.22; pointer-events: none; z-index: 0;"
	></div>
	<div
		style="position: absolute; top: 1600px; right: 60px; width: 360px; height: 360px; border-radius: 50%; background: #3b82f6; filter: blur(100px); opacity: 0.18; pointer-events: none; z-index: 0;"
	></div>
	<div
		style="position: absolute; top: 2800px; left: 120px; width: 280px; height: 280px; border-radius: 50%; background: #a855f7; filter: blur(90px); opacity: 0.14; pointer-events: none; z-index: 0;"
	></div>

	<V2Nav
		links={[
			{ label: 'Work', href: '#work', active: true },
			{ label: 'About', href: '#about' },
			{ label: 'Experience', href: '#experience' },
			{ label: 'Contact', href: '#contact' },
		]}
	/>
	<V2Hero />
	<V2Projects />
	<V2About />
	<V2Skills />
	<V2Experience />
	<V2Writing />
	<V2Contact />
</div>
