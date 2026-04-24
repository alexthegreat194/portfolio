<svelte:options runes={false} />

<script>
	const timeline = [
		{
			kind: 'work',
			y: 'Nov 2023 — Jan 2026',
			sort: 202311,
			c: 'High Fidelity',
			r: 'Software Engineer',
			loc: 'San Francisco, CA',
			d: 'Shipped a user-connection-score algorithm, rebuilt expensive background tasks as microservices with multi-tier caching, and scaled concurrent users per domain 3× (30 → 90) while keeping sub-second response.',
			tags: ['TypeScript', 'Node', 'MongoDB', 'Redis'],
		},
		{
			kind: 'side',
			y: 'Apr 2026',
			sort: 202604,
			c: 'VidVault',
			r: 'Personal project',
			loc: 'Go · zero-dep binary',
			d: 'Local video gallery server in Go with an embedded web UI — folder organization, search, drag-and-drop, bulk uploads, and lightbox playback over HTTP range requests. Shipped with Docker.',
			tags: ['Go', 'HTTP', 'Docker'],
		},
		{
			kind: 'side',
			y: 'Jan — May 2025',
			sort: 202501,
			c: 'Forge PT',
			r: 'Freelance · marketing site',
			loc: 'Client: Dr. Ming, DPT',
			d: 'Responsive marketing site for a physical therapy practice specializing in athletic recovery. Design, build, copy polish.',
			tags: ['Freelance', 'Webflow', 'Responsive'],
		},
		{
			kind: 'side',
			y: 'Jul 2023 — present',
			sort: 202307,
			c: 'Doink',
			r: 'Personal project',
			loc: 'Group collaboration platform',
			d: 'RESTful API with 20+ endpoints, Redis sessions, and a normalized Postgres schema via Prisma. Role-based group permissions with invite codes and custom auth middleware. Dockerized, with Mocha/Chai coverage.',
			tags: ['Node', 'Postgres', 'Prisma', 'Docker'],
		},
		{
			kind: 'side',
			y: 'Jul 2023 — present',
			sort: 202307.5,
			c: 'Actichat',
			r: 'Personal project',
			loc: 'Real-time chat platform',
			d: 'Flask-SocketIO chat with dynamic room creation and shareable invite links. WebSocket session management and connection pooling track clients across concurrent rooms in real time.',
			tags: ['Python', 'Flask', 'WebSockets'],
		},
		{
			kind: 'work',
			y: '2023',
			sort: 202301,
			c: 'High Fidelity',
			r: 'Software Engineer Intern',
			loc: 'San Francisco, CA',
			d: 'Built UI features in Svelte + Tailwind with PixiJS canvas visualizations. Added REST transactions to eliminate race conditions under high-traffic MongoDB writes.',
			tags: ['Svelte', 'Tailwind', 'PixiJS'],
		},
		{
			kind: 'side',
			y: 'Apr 2020 — Feb 2021',
			sort: 202004,
			c: 'A Roundabout Path',
			r: 'Head Scripter · Teaching',
			loc: 'Roblox Studio · anime-style MP',
			d: 'Architected the Lua scripting systems and ran the deploy pipeline. Set up Trello + version control for 4+ developers and ran the Discord community.',
			tags: ['Lua', 'Roblox', 'Leadership'],
		},
		{
			kind: 'side',
			y: 'Jan — Jun 2020',
			sort: 202001,
			c: 'Emberblade',
			r: 'Personal project',
			loc: 'C++11 · SFML',
			d: 'Top-down 2D game — tile-based world traversal, inventory/crafting UI, weapon-hitbox combat, NPC interactions. Gameplay organized into modular subsystems (Inventory, Collision, Notification).',
			tags: ['C++', 'SFML', 'Game dev'],
		},
	];

	let filter = 'all';

	$: counts = {
		all: timeline.length,
		work: timeline.filter((i) => i.kind === 'work').length,
		side: timeline.filter((i) => i.kind === 'side').length,
	};

	$: items = (filter === 'all' ? timeline : timeline.filter((i) => i.kind === filter)).sort(
		(a, b) => b.sort - a.sort
	);
</script>

<section id="experience" style="padding: 0 48px 80px;">
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
				style="font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-top: 10px; line-height: 1.05;"
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

	<!-- Filter pills -->
	<div style="display: flex; gap: 8px; margin-bottom: 18px; flex-wrap: wrap;">
		{#each [['all', 'All', counts.all], ['work', 'Professional', counts.work], ['side', 'Side projects', counts.side]] as [val, label, count]}
			<button
				on:click={() => (filter = val)}
				style="
          background: {filter === val ? 'rgba(185,28,28,0.22)' : 'rgba(30,26,22,0.42)'};
          backdrop-filter: blur(22px) saturate(1.4);
          -webkit-backdrop-filter: blur(22px) saturate(1.4);
          border: 1px solid {filter === val ? '#b91c1c' : 'rgba(255,255,255,0.10)'};
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
          border-radius: 999px;
          padding: 8px 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: {filter === val ? '#f5f0ea' : 'rgba(245,240,234,0.62)'};
          cursor: pointer;
        "
			>
				{label}
				<span
					style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: {filter === val
						? '#f5f0ea'
						: 'rgba(245,240,234,0.42)'}; background: {filter === val
						? 'rgba(0,0,0,0.25)'
						: 'rgba(255,255,255,0.06)'}; padding: 1px 6px; border-radius: 999px; letter-spacing: 0.5px;"
				>{count}</span>
			</button>
		{/each}
	</div>

	<!-- Timeline -->
	<div
		style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); padding: 32px; position: relative;"
	>
		<!-- Vertical line -->
		<div
			style="position: absolute; left: 198px; top: 32px; bottom: 32px; width: 1px; background: #3a352f;"
		></div>

		{#each items as it, i}
			<div
				style="display: grid; grid-template-columns: 150px 20px 1fr; gap: 18px; padding-bottom: {i === items.length - 1 ? 0 : 26}px; align-items: flex-start;"
			>
				<!-- Date + kind -->
				<div style="padding-top: 2px;">
					<div
						style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: {it.kind === 'work'
							? '#b91c1c'
							: 'rgba(245,240,234,0.62)'}; letter-spacing: 0.8px;"
					>
						{it.y}
					</div>
					<div
						style="margin-top: 6px; font-family: 'JetBrains Mono', monospace; font-size: 9px; color: rgba(245,240,234,0.38); letter-spacing: 1.5px; text-transform: uppercase;"
					>
						{it.kind === 'work' ? 'Professional' : 'Side · freelance'}
					</div>
				</div>

				<!-- Dot -->
				<div
					style="position: relative; display: flex; justify-content: center; padding-top: 4px;"
				>
					{#if it.kind === 'work'}
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
						<div style="font-size: 18px; font-weight: 700; letter-spacing: -0.3px;">{it.c}</div>
						<div
							style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.38);"
						>
							{it.loc}
						</div>
					</div>
					<div
						style="font-size: 13px; color: rgba(245,240,234,0.62); margin-top: 2px; font-weight: 500;"
					>
						{it.r}
					</div>
					<div
						style="font-size: 13px; color: rgba(245,240,234,0.62); margin-top: 8px; line-height: 1.55; max-width: 620px;"
					>
						{it.d}
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
