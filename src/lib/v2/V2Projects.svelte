<svelte:options runes={false} />

<script>
	const projects = [
		{
			title: 'VidVault',
			stack: 'Go · Docker',
			description:
				'Local video gallery server in Go with an embedded web UI — folder organization, search, drag-and-drop, bulk uploads, and lightbox playback over HTTP range requests.',
			tags: ['Go', 'HTTP', 'Docker'],
			year: '2026',
			visit: '',
			repo: 'https://github.com/alexthegreat194/vidvault',
		},
		{
			title: 'Forge PT',
			stack: 'Webflow',
			description:
				"Freelance site for Dr. Ming's PT practice — athlete-focused, motion-first narrative. Responsive marketing site for a practice specializing in athletic recovery.",
			tags: ['Webflow', 'CMS', 'Responsive'],
			year: '2025',
			visit: 'https://www.ptforge.com/',
			repo: '',
		},
		{
			title: 'Doink',
			stack: 'React · Express',
			description:
				'Group management for friend groups: shared finances, moments, and shopping lists. RESTful API with 20+ endpoints, Redis sessions, and normalized Postgres schema.',
			tags: ['React', 'Express', 'MongoDB'],
			year: '2023',
			visit: 'https://doink.otterlabs.co',
			repo: 'https://github.com/noname-friend-app/friend-app-api',
		},
		{
			title: 'Actichat',
			stack: 'Flask',
			description:
				'Realtime chat rooms with shareable join links. WebSocket session management and connection pooling track clients across concurrent rooms in real time.',
			tags: ['Flask', 'WebSockets', 'Redis'],
			year: '2023',
			visit: 'https://actichat.onrender.com',
			repo: 'https://github.com/alexthegreat194/actichat',
		},
		{
			title: 'Emberblade',
			stack: 'C++ · SFML',
			description:
				'Top-down 2D game — tile-based world traversal, inventory/crafting UI, weapon-hitbox combat, NPC interactions. Gameplay organized into modular subsystems.',
			tags: ['C++', 'SFML', 'Game dev'],
			year: '2020',
			visit: '',
			repo: 'https://github.com/alexthegreat194/Emberblade',
		},
	];
</script>

<section id="work" style="padding: 80px 48px;">
	<!-- Section header -->
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
			style="background: rgba(30,26,22,0.42); backdrop-filter: blur(22px) saturate(1.4); -webkit-backdrop-filter: blur(22px) saturate(1.4); border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 4px 24px rgba(0,0,0,0.4); border-radius: 999px; padding: 8px 14px; font-size: 12px; color: rgba(245,240,234,0.62);"
		>
			Filter: <span style="color: #f5f0ea;">All</span> · Web · App · OSS
		</div>
	</div>

	<!-- Projects grid -->
	<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
		{#each projects as p}
			<div
				style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); overflow: hidden; display: flex; flex-direction: column;"
			>
				<!-- Preview placeholder -->
				<div
					style="height: 180px; background: repeating-linear-gradient(135deg, #2c2823 0 10px, #1f1c19 10px 20px); border-bottom: 1px solid #2c2823; display: flex; align-items: center; justify-content: center; color: rgba(245,240,234,0.38); font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.4px;"
				>
					{p.title} · preview
				</div>

				<div style="padding: 22px;">
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;"
					>
						<div style="font-size: 22px; font-weight: 700; letter-spacing: -0.4px;">{p.title}</div>
						<div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.62);">{p.year}</div>
					</div>

					<div
						style="font-size: 13.5px; color: rgba(245,240,234,0.62); line-height: 1.55; margin-bottom: 14px;"
					>
						{p.description}
					</div>

					<div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
						{#each p.tags as tag}
							<span
								style="font-size: 11px; font-family: 'JetBrains Mono', monospace; padding: 3px 9px; border-radius: 4px; background: #221f1c; color: rgba(245,240,234,0.62); border: 1px solid #2c2823;"
							>{tag}</span>
						{/each}
					</div>

					<div style="display: flex; gap: 8px;">
						{#if p.visit}
							<a
								href={p.visit}
								target="_blank"
								style="font-size: 12px; font-weight: 600; padding: 8px 18px; border-radius: 999px; background: #b91c1c; color: #fff; text-decoration: none;"
							>Visit →</a>
						{/if}
						{#if p.repo}
							<a
								href={p.repo}
								target="_blank"
								style="font-size: 12px; font-weight: 600; padding: 8px 18px; border-radius: 999px; border: 1px solid #b91c1c; color: #b91c1c; text-decoration: none;"
							>Repo</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
