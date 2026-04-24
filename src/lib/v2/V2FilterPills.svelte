<svelte:options runes={false} />

<script>
	/** @type {string} */
	export let selected = 'all';

	/** @type {{ value: string; label: string; count: number }[]} */
	export let options = [];
	
	let hoveredValue = null;

	function handleGroupHoverStart(opt) {
		if (selected !== opt.value) hoveredValue = opt.value;
	}
	function handleGroupHoverEnd(opt) {
		if (hoveredValue === opt.value) hoveredValue = null;
	}
</script>

<!-- 
	Assign as many classes as possible with Tailwind. 
	Use style bindings for custom, non-Tailwind palette colors.
	TODO: Ideally, migrate custom colors to Tailwind config for pure utility classes.
-->
<div class="flex flex-wrap gap-2 mb-[18px]">
	{#each options as opt (opt.value)}
		<button
			type="button"
			on:click={() => (selected = opt.value)}
			on:mouseenter={() => handleGroupHoverStart(opt)}
			on:focus={() => handleGroupHoverStart(opt)}
			on:mouseleave={() => handleGroupHoverEnd(opt)}
			on:blur={() => handleGroupHoverEnd(opt)}
			class={`inline-flex items-center gap-2 rounded-full border font-inter text-[12px] font-semibold transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-[22px] saturate-[1.4] cursor-pointer px-[var(--v2-pill-pad-x)] py-[var(--v2-pill-pad-y)]${
				selected === opt.value
					? " ring-1 ring-[#b91c1c]"
					: hoveredValue === opt.value
						? " ring-1 ring-[#b91c1c]"
						: ""
			} `}
			style={`
				${selected === opt.value
					? `
						background: rgba(185,28,28,0.22);
						border-color: #b91c1c;
						color: #f5f0ea;
					`
					: hoveredValue === opt.value
						? `
							background: rgba(185,28,28,0.11);
							border-color: #b91c1c;
							color: #f5f0ea;
						`
						: `
							background: rgba(30,26,22,0.42);
							border-color: rgba(255,255,255,0.10);
							color: rgba(245,240,234,0.62);
						`
				}
			`}
		>
			{opt.label}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				class="rounded-full px-[6px] py-[1px] text-[10px] leading-4 tracking-[0.5px] font-jetbrains-mono pill-count"
				style={`
					${selected === opt.value
						? `
							background: rgba(0,0,0,0.25);
							color: #f5f0ea;
						`
						: hoveredValue === opt.value
							? `
								background: rgba(0,0,0,0.17);
								color: #f5f0ea;
							`
							: `
								background: rgba(255,255,255,0.06);
								color: rgba(245,240,234,0.42);
							`
					}
				`}
			>
				{opt.count}
			</span>
		</button>
	{/each}
</div>
