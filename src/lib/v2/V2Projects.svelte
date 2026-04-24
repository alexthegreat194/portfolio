<svelte:options runes={false} />

<script>
	import { animate, inView } from "motion";
	import { onMount } from "svelte";
	
	import projects from '../../../data/projects.json';
	import V2FilterPills from './V2FilterPills.svelte';

	let filter = 'all';

	$: filterOptions = [
		{ value: 'all', label: 'All', count: projects.length },
		{
			value: 'web',
			label: 'Web',
			count: projects.filter((p) => p.segment === 'web').length
		},
		{
			value: 'app',
			label: 'App',
			count: projects.filter((p) => p.segment === 'app').length
		},
		{
			value: 'oss',
			label: 'OSS',
			count: projects.filter((p) => p.segment === 'oss').length
		}
	];

	$: visible =
		filter === 'all'
			? projects
			: projects.filter((p) => p.segment === filter);

	onMount(() => {
        inView(".project-container", (element) => {
            animate(element,
				{ opacity: 1, scale: 1 },
				{ duration: 0.5, ease: "easeOut" }
			);
        });
    });
</script>

<section
	id="work"
	class="py-[var(--v2-section-y)] px-[var(--v2-page-gutter)]"
>
	<div
		class="flex justify-between items-end mb-7 flex-wrap gap-4"
	>
		<div>
			<div
				class="flex items-center gap-[10px] font-mono text-[11px] uppercase tracking-[2px] text-[#f5f0eaa0]"
			>
				<span class="text-[#b91c1c] font-bold">01</span>
				<span class="inline-block w-[18px] h-px bg-[#3a352f]"></span>
				Selected work
			</div>
			<div
				class="text-[40px] font-bold tracking-[-1.2px] mt-[10px] leading-[1.05]"
			>
				Projects, in my own words.
			</div>
		</div>
	</div>

	<V2FilterPills bind:selected={filter} options={filterOptions} />

	{#if visible.length > 0}
		<div class="grid grid-cols-2 gap-[var(--v2-grid-gap)]">
			{#each visible as p (p.name)}
				<div
					class="project-container opacity-0 scale-50
					bg-[#1a1714] border border-[#2c2823] rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col"
				>
					<div
						class="h-[180px] border-b border-[#2c2823] flex items-center justify-center text-[#f5f0ea61] font-mono text-[11px] tracking-[0.4px] bg-[repeating-linear-gradient(135deg,_#2c2823_0_10px,_#1f1c19_10px_20px)]"
					>
						{p.name} · preview
					</div>

					<div class="p-[var(--v2-card-pad-lg)]">
						<div
							class="flex justify-between items-baseline mb-2"
						>
							<div class="text-[22px] font-bold tracking-[-0.4px]">{p.name}</div>
							<div class="font-mono text-[11px] text-[#f5f0eaa0]">{p.year}</div>
						</div>

						<div
							class="text-[13.5px] text-[#f5f0eaa0] leading-[1.55] mb-[14px]"
						>
							{p.description}
						</div>

						<div class="flex flex-wrap gap-2 mb-[18px]">
							{#each p.tags as tag}
								<span
									class="text-[11px] font-mono px-[11px] py-[5px] rounded-[6px] bg-[#221f1c] text-[#f5f0eaa0] border border-[#2c2823]"
								>{tag}</span>
							{/each}
						</div>

						<div class="flex gap-2">
							{#if p.liveUrl}
								<a
									href={p.liveUrl}
									target="_blank"
									class="text-[12px] font-semibold px-[22px] py-[10px] rounded-full bg-[#b91c1c] text-white no-underline flex items-center gap-2
									hover:bg-[#1a1714] hover:text-red-700 hover:border-red-700 border border-[#b91c1c] hover:cursor-pointer transition-colors"
								>Visit</a>
							{/if}
							{#if p.repositoryUrl}
								<a
									href={p.repositoryUrl}
									target="_blank"
									class="text-[12px] font-semibold px-[22px] py-[10px] rounded-full border border-[#b91c1c] text-[#b91c1c] no-underline
									hover:bg-[#b91c1c] hover:text-white hover:border-red-700 border border-[#b91c1c] hover:cursor-pointer transition-colors"
								>Repo</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div
			class="font-mono text-[12px] text-[#f5f0ea61] py-3"
		>
			Nothing in this view.
		</div>
	{/if}
</section>
