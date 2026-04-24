<svelte:options runes={false} />

<script>
	import projects from '../../../data/projects.json';
</script>

<section id="work" style="padding: var(--v2-section-y) var(--v2-page-gutter);">
	<div
		style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; flex-wrap: wrap; gap: 16px;"
	>
		<div>
			<div
				style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,234,0.62); display: flex; align-items: center; gap: 10px;"
			>
				<span style="color: #b91c1c; font-weight: 700;">01</span>
				<span style="width: 18px; height: 1px; background: #3a352f; display: inline-block;"></span>
				Selected work
			</div>
			<div
				style="font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-top: 10px; line-height: 1.05;"
			>
				Projects, in my own words.
			</div>
		</div>
		<div
			style="background: rgba(30,26,22,0.42); backdrop-filter: blur(22px) saturate(1.4); -webkit-backdrop-filter: blur(22px) saturate(1.4); border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 4px 24px rgba(0,0,0,0.4); border-radius: 999px; padding: var(--v2-pill-pad-y) var(--v2-pill-pad-x); font-size: 12px; color: rgba(245,240,234,0.62);"
		>
			Filter: <span style="color: #f5f0ea;">All</span> · Web · App · OSS
		</div>
	</div>

	<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--v2-grid-gap);">
		{#each projects as p}
			<div
				style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); overflow: hidden; display: flex; flex-direction: column;"
			>
				<div
					style="height: 180px; background: repeating-linear-gradient(135deg, #2c2823 0 10px, #1f1c19 10px 20px); border-bottom: 1px solid #2c2823; display: flex; align-items: center; justify-content: center; color: rgba(245,240,234,0.38); font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.4px;"
				>
					{p.name} · preview
				</div>

				<div style="padding: var(--v2-card-pad-lg);">
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;"
					>
						<div style="font-size: 22px; font-weight: 700; letter-spacing: -0.4px;">{p.name}</div>
						<div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.62);">{p.year}</div>
					</div>

					<div
						style="font-size: 13.5px; color: rgba(245,240,234,0.62); line-height: 1.55; margin-bottom: 14px;"
					>
						{p.description}
					</div>

					<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px;">
						{#each p.tags as tag}
							<span
								style="font-size: 11px; font-family: 'JetBrains Mono', monospace; padding: 5px 11px; border-radius: 6px; background: #221f1c; color: rgba(245,240,234,0.62); border: 1px solid #2c2823;"
							>{tag}</span>
						{/each}
					</div>

					<div style="display: flex; gap: 8px;">
						{#if p.liveUrl}
							<a
								href={p.liveUrl}
								target="_blank"
								style="font-size: 12px; font-weight: 600; padding: 10px 22px; border-radius: 999px; background: #b91c1c; color: #fff; text-decoration: none;"
							>Visit →</a>
						{/if}
						{#if p.repositoryUrl}
							<a
								href={p.repositoryUrl}
								target="_blank"
								style="font-size: 12px; font-weight: 600; padding: 10px 22px; border-radius: 999px; border: 1px solid #b91c1c; color: #b91c1c; text-decoration: none;"
							>Repo</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
