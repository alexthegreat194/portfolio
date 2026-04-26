<svelte:options runes={false} />

<script>
	import timeline from '../../../data/timeline.json';
	import V2FilterPills from './V2FilterPills.svelte';

	let filter = 'all';

	$: filterOptions = [
		{ value: 'all', label: 'All', count: timeline.length },
		{
			value: 'work',
			label: 'Professional',
			count: timeline.filter((i) => i.category === 'work').length
		},
		{
			value: 'side',
			label: 'Side projects',
			count: timeline.filter((i) => i.category === 'side').length
		}
	];

	$: items = (filter === 'all' ? timeline : timeline.filter((i) => i.category === filter)).sort(
		(a, b) => b.sortOrder - a.sortOrder
	);
</script>

<section
	id="experience"
	class="px-[var(--v2-page-gutter)] py-[var(--v2-section-y)]"
>
	<!-- Section header -->
	<div class="flex justify-between items-end mb-7 flex-wrap gap-4">
		<div>
			<div class="font-mono text-[11px] tracking-[2px] uppercase text-[rgba(245,240,234,0.62)] flex items-center gap-[10px]">
				<span class="text-[#b91c1c] font-bold">03</span>
				<span class="inline-block w-[18px] h-px bg-[#3a352f]"></span>
				Experience
			</div>
			<div class="text-[40px] font-bold -tracking-[1.2px] mt-[10px] leading-[1.14] pt-[0.04em]">
				Work & Projects
			</div>
		</div>
		<!-- Legend -->
		<div class="flex items-center gap-[18px] font-sans text-[12px] text-[rgba(245,240,234,0.62)]">
			<div class="flex items-center gap-2">
				<span class="inline-block w-[10px] h-[10px] rounded-full bg-[#b91c1c]"></span>
				Professional
			</div>
			<div class="flex items-center gap-2">
				<span class="inline-block w-[10px] h-[10px] rounded-full border-2 border-[#b91c1c] bg-transparent box-border"></span>
				Side project / freelance
			</div>
		</div>
	</div>

	<V2FilterPills bind:selected={filter} options={filterOptions} />

	<!-- Timeline -->
	<div
		class="flex flex-col gap-[18px] bg-[#1a1714] border border-[#2c2823] rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.35)] p-[var(--v2-card-pad-lg)] relative"
	>
		<!-- Vertical line -->
		<!-- <div class="absolute left-[193px] top-[var(--v2-card-pad-lg)] bottom-[var(--v2-card-pad-lg)] w-px bg-[#3a352f]"></div> -->

		{#each items as it, i}
			<div
				class="grid grid-cols-[100px_20px_1fr]  lg:grid-cols-[150px_20px_1fr] gap-[18px] pb-[{i === items.length - 1 ? 0 : 26}px] items-start"
			>
				<!-- Date + kind -->
				<div class="pt-[2px]">
					<div
						class="font-mono text-[11px] tracking-[.8px]"
						style="color: {it.category === 'work' ? '#b91c1c' : 'rgba(245,240,234,0.62)'}"
					>
						{it.dateRange}
					</div>
					<div class="mt-[6px] font-mono text-[9px] text-[rgba(245,240,234,0.38)] tracking-[1.5px] uppercase">
						{it.category === 'work' ? 'Professional' : 'Side · freelance'}
					</div>
				</div>

				<!-- Dot -->
				<div class="relative flex justify-center pt-1">
					{#if it.category === 'work'}
						<div class="w-[12px] h-[12px] rounded-full bg-[#b91c1c] shadow-[0_0_0_4px_#141210,0_0_0_5px_#3a352f] flex-shrink-0"></div>
					{:else}
						<div class="w-[12px] h-[12px] rounded-full bg-[#1a1714] border-2 border-[#b91c1c] shadow-[0_0_0_4px_#141210,0_0_0_5px_#3a352f] box-border flex-shrink-0"></div>
					{/if}
				</div>

				<!-- Content -->
				<div>
					<div class="flex items-baseline gap-[10px] flex-wrap">
						<div class="text-[18px] font-bold -tracking-[0.3px]">{it.organization}</div>
						<div class="font-mono text-[11px] text-[rgba(245,240,234,0.38)]">{it.context}</div>
					</div>
					<div class="text-[13px] text-[rgba(245,240,234,0.62)] mt-[2px] font-medium">
						{it.role}
					</div>
					<div class="text-[13px] text-[rgba(245,240,234,0.62)] mt-2 leading-[1.55] max-w-[620px]">
						{it.description}
					</div>
					{#if it.tags}
						<div class="flex gap-[6px] flex-wrap mt-[10px]">
							{#each it.tags as t}
								<span
									class="font-mono text-[10px] tracking-[0.4px] text-[rgba(245,240,234,0.62)] px-2 py-[3px] rounded-[6px] bg-[#141210] border border-[#2c2823]"
								>{t}</span>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/each}

		{#if items.length === 0}
			<div class="font-mono text-[12px] text-[rgba(245,240,234,0.38)] p-3">
				Nothing in this view.
			</div>
		{/if}
	</div>
</section>
