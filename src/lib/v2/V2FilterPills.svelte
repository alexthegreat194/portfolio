<svelte:options runes={false} />

<script>
	/** @type {string} */
	export let selected = 'all';

	/** @type {{ value: string; label: string; count: number }[]} */
	export let options = [];
</script>

<div style="display: flex; gap: 8px; margin-bottom: 18px; flex-wrap: wrap;">
	{#each options as opt (opt.value)}
		<button
			type="button"
			on:click={() => (selected = opt.value)}
			style="
          background: {selected === opt.value ? 'rgba(185,28,28,0.22)' : 'rgba(30,26,22,0.42)'};
          backdrop-filter: blur(22px) saturate(1.4);
          -webkit-backdrop-filter: blur(22px) saturate(1.4);
          border: 1px solid {selected === opt.value ? '#b91c1c' : 'rgba(255,255,255,0.10)'};
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
          border-radius: 999px;
          padding: var(--v2-pill-pad-y) var(--v2-pill-pad-x);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: {selected === opt.value ? '#f5f0ea' : 'rgba(245,240,234,0.62)'};
          cursor: pointer;
        "
		>
			{opt.label}
			<span
				style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: {selected === opt.value
					? '#f5f0ea'
					: 'rgba(245,240,234,0.42)'}; background: {selected === opt.value
					? 'rgba(0,0,0,0.25)'
					: 'rgba(255,255,255,0.06)'}; padding: 1px 6px; border-radius: 999px; letter-spacing: 0.5px;"
			>{opt.count}</span>
		</button>
	{/each}
</div>
