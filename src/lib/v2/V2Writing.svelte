<svelte:options runes={false} />

<script>
	const posts = [
		{
			d: 'Apr 2026',
			t: 'The captcha is the feature',
			x: 'On making contact forms that are weirder than they need to be.',
			m: '3 min',
		},
		{
			d: 'Jan 2026',
			t: 'Svelte vs React, 2 years in',
			x: 'Honest notes from shipping real projects in both.',
			m: '6 min',
		},
		{
			d: 'Sep 2025',
			t: 'On keeping projects small',
			x: 'Scope, scope, scope. A short argument.',
			m: '4 min',
		},
	];
</script>

<section id="writing" style="padding: 0 var(--v2-page-gutter) var(--v2-section-y);">
	<!-- Section header -->
	<div
		style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; flex-wrap: wrap; gap: 16px;"
	>
		<div>
			<div
				style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,234,0.62); display: flex; align-items: center; gap: 10px;"
			>
				<span style="color: #b91c1c; font-weight: 700;">04</span>
				<span style="width: 18px; height: 1px; background: #3a352f; display: inline-block;"></span>
				Writing
			</div>
			<div
				style="font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-top: 10px; line-height: 1.05;"
			>
				Notes & essays.
			</div>
		</div>
		<a
			href="/writing"
			style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #b91c1c; text-decoration: none;"
			>all posts →</a
		>
	</div>

	<!-- Post list -->
	<div
		style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); padding: var(--v2-card-pad);"
	>
		{#each posts as p, i}
			<div
				style="display: grid; grid-template-columns: 110px 1fr 80px; gap: 24px; padding: calc(var(--v2-card-pad) + 0.35rem) calc(var(--v2-card-pad-lg) - 0.25rem); align-items: center; border-top: {i === 0
					? 'none'
					: '1px solid #2c2823'};"
			>
				<div
					style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.62); letter-spacing: 1px;"
				>
					{p.d}
				</div>
				<div>
					<div style="font-size: 17px; font-weight: 600; letter-spacing: -0.3px;">{p.t}</div>
					<div style="font-size: 13px; color: rgba(245,240,234,0.62); margin-top: 4px; line-height: 1.5;">{p.x}</div>
				</div>
				<div
					style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.62); text-align: right;"
				>
					{p.m} →
				</div>
			</div>
		{/each}
	</div>
</section>
