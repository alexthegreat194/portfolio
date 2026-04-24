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

<section id="experience" style="padding:  var(--v2-section-y) var(--v2-page-gutter) var(--v2-section-y);">
	<!-- Section header -->
	<div
		style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; flex-wrap: wrap; gap: 16px;"
	>
		<div>
			<div
				style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,234,0.62); display: flex; align-items: center; gap: 10px;"
			>
				<span style="color: #b91c1c; font-weight: 700;">03</span>
				<span style="width: 18px; height: 1px; background: #3a352f; display: inline-block;"></span>
				Experience
			</div>
			<div
				style="font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-top: 10px; line-height: 1.14; padding-top: 0.04em;"
			>
				Work & projects, on one line.
			</div>
		</div>
		<!-- Legend -->
		<div
			style="display: flex; align-items: center; gap: 18px; font-family: 'Inter', system-ui, sans-serif; font-size: 12px; color: rgba(245,240,234,0.62);"
		>
			<div style="display: flex; align-items: center; gap: 8px;">
				<span
					style="width: 10px; height: 10px; border-radius: 50%; background: #b91c1c; display: inline-block;"
				></span>
				Professional
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<span
					style="width: 10px; height: 10px; border-radius: 50%; background: transparent; border: 2px solid #b91c1c; display: inline-block; box-sizing: border-box;"
				></span>
				Side project / freelance
			</div>
		</div>
	</div>

	<V2FilterPills bind:selected={filter} options={filterOptions} />

	<!-- Timeline -->
	<div
		style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); padding: var(--v2-card-pad-lg); position: relative;"
	>
		<!-- Vertical line -->
		<!-- <div
			style="position: absolute; left: 193px; top: var(--v2-card-pad-lg); bottom: var(--v2-card-pad-lg); width: 1px; background: #3a352f;"
		></div> -->

		{#each items as it, i}
			<div
				style="display: grid; grid-template-columns: 150px 20px 1fr; gap: 18px; padding-bottom: {i === items.length - 1 ? 0 : 26}px; align-items: flex-start;"
			>
				<!-- Date + kind -->
				<div style="padding-top: 2px;">
					<div
						style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: {it.category === 'work'
							? '#b91c1c'
							: 'rgba(245,240,234,0.62)'}; letter-spacing: 0.8px;"
					>
						{it.dateRange}
					</div>
					<div
						style="margin-top: 6px; font-family: 'JetBrains Mono', monospace; font-size: 9px; color: rgba(245,240,234,0.38); letter-spacing: 1.5px; text-transform: uppercase;"
					>
						{it.category === 'work' ? 'Professional' : 'Side · freelance'}
					</div>
				</div>

				<!-- Dot -->
				<div
					style="position: relative; display: flex; justify-content: center; padding-top: 4px;"
				>
					{#if it.category === 'work'}
						<div
							style="width: 12px; height: 12px; border-radius: 50%; background: #b91c1c; box-shadow: 0 0 0 4px #141210, 0 0 0 5px #3a352f; flex-shrink: 0;"
						></div>
					{:else}
						<div
							style="width: 12px; height: 12px; border-radius: 50%; background: #1a1714; border: 2px solid #b91c1c; box-shadow: 0 0 0 4px #141210, 0 0 0 5px #3a352f; box-sizing: border-box; flex-shrink: 0;"
						></div>
					{/if}
				</div>

				<!-- Content -->
				<div>
					<div style="display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap;">
						<div style="font-size: 18px; font-weight: 700; letter-spacing: -0.3px;">{it.organization}</div>
						<div
							style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.38);"
						>
							{it.context}
						</div>
					</div>
					<div
						style="font-size: 13px; color: rgba(245,240,234,0.62); margin-top: 2px; font-weight: 500;"
					>
						{it.role}
					</div>
					<div
						style="font-size: 13px; color: rgba(245,240,234,0.62); margin-top: 8px; line-height: 1.55; max-width: 620px;"
					>
						{it.description}
					</div>
					{#if it.tags}
						<div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;">
							{#each it.tags as t}
								<span
									style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.4px; color: rgba(245,240,234,0.62); padding: 3px 8px; border-radius: 6px; background: #141210; border: 1px solid #2c2823;"
								>{t}</span>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/each}

		{#if items.length === 0}
			<div
				style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: rgba(245,240,234,0.38); padding: 12px;"
			>
				Nothing in this view.
			</div>
		{/if}
	</div>
</section>
