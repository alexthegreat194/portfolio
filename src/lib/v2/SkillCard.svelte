<svelte:options runes={false} />

<script>
	export let tag;
	export let title;
	export let claim;
	export let accent = '#b91c1c';
	export let height = 260;

	let hovered = false;

	$: borderColor = hovered ? accent : '#2c2823';
	$: cardTransform = hovered ? 'translateY(-4px)' : 'translateY(0)';
	$: cardShadow = hovered
		? `0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22`
		: '0 8px 20px rgba(0,0,0,0.3)';
</script>

<div
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	style="
    position: relative;
    height: {height}px;
    border-radius: 14px;
    background: #1a1714;
    border: 1px solid {borderColor};
    overflow: hidden;
    cursor: pointer;
    transition: border-color .3s, transform .3s, box-shadow .3s;
    transform: {cardTransform};
    box-shadow: {cardShadow};
  "
>
	<!-- Illustration layer (slot) -->
	<div
		style="position: absolute; inset: 0; opacity: {hovered ? 1 : 0.15}; transition: opacity .4s;"
	>
		<slot {hovered} />
	</div>

	<!-- Gradient scrim -->
	<div
		style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 0%, transparent 40%, #1a1714ee 90%, #1a1714 100%); pointer-events: none;"
	></div>

	<!-- Text layer -->
	<div style="position: absolute; left: 18px; right: 18px; bottom: 16px; z-index: 2;">
		<div
			style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 1.6px; text-transform: uppercase; color: {accent}; font-weight: 700; margin-bottom: 6px;"
		>
			{tag}
		</div>
		<div
			style="font-size: 17px; font-weight: 700; color: #f5f0ea; letter-spacing: -0.3px; line-height: 1.2;"
		>
			{title}
		</div>
		<div
			style="font-size: 12px; color: rgba(245,240,234,0.62); margin-top: 6px; line-height: 1.45; max-height: {hovered
				? '60px'
				: '0'}; opacity: {hovered ? 1 : 0}; overflow: hidden; transition: max-height .35s, opacity .35s;"
		>
			{claim}
		</div>
	</div>
</div>
