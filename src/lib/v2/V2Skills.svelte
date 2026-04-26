<svelte:options runes={false} />

<script>
	import { ArrowRight } from '@lucide/svelte';
	import SkillCard from './SkillCard.svelte';

	const netNodes = [
		{ x: 50, y: 50, r: 14, accent: true },
		{ x: 160, y: 30, r: 8, accent: false },
		{ x: 230, y: 80, r: 10, accent: false },
		{ x: 100, y: 110, r: 9, accent: false },
		{ x: 180, y: 150, r: 7, accent: false },
		{ x: 60, y: 170, r: 11, accent: false },
		{ x: 240, y: 180, r: 8, accent: false },
	];
	const netEdges = [
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 2],
		[2, 4],
		[3, 5],
		[4, 6],
		[3, 4],
		[2, 6],
	];

	const tsBars = Array.from({ length: 28 }, (_, i) => ({
		h:
			20 +
			Math.sin(i * 0.5) * 15 +
			Math.cos(i * 0.3) * 12 +
			(i > 22 ? 25 : 0) +
			(i % 5 === 0 ? 10 : 0) +
			30,
		hot: i > 22,
	}));

	const apiEps = [
		{ m: 'GET', p: '/api/users', c: '#22c55e' },
		{ m: 'POST', p: '/api/auth/login', c: '#f59e0b' },
		{ m: 'PATCH', p: '/api/rooms/:id', c: '#3b82f6' },
		{ m: 'DELETE', p: '/api/messages/:id', c: '#b91c1c' },
		{ m: 'GET', p: '/api/rooms/:id/members', c: '#22c55e' },
		{ m: 'POST', p: '/api/invites', c: '#f59e0b' },
	];

	const permRoles = ['owner', 'admin', 'member', 'guest'];
	const permPerms = ['read', 'write', 'invite', 'delete'];
	const permGrid = [
		[1, 1, 1, 1],
		[1, 1, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 0, 0],
	];

	const pipeStages = [
		{ n: 'build', c: '#3b82f6' },
		{ n: 'test', c: '#22c55e' },
		{ n: 'docker', c: '#b91c1c' },
		{ n: 'deploy', c: '#f59e0b' },
	];

	const archLayers = [
		{ n: 'API', c: '#3b82f6', y: 20 },
		{ n: 'CACHE', c: '#f59e0b', y: 90 },
		{ n: 'DB', c: '#b91c1c', y: 160 },
	];
</script>

<section
	id="skills"
	class="px-[var(--v2-page-gutter)] pb-[var(--v2-section-y)] pt-[var(--v2-section-y-tight)]
		bg-[#0b0a09] text-[#f5f0ea] font-sans"
>
	<div class="mb-8">
		<div
			class="flex items-center gap-[10px] font-mono uppercase tracking-[0.12em] text-[11px] text-[rgba(245,240,234,0.62)]"
		>
			<span class="text-[#b91c1c] font-bold">02b</span>
			<span class="inline-block w-[18px] h-px bg-[#3a352f]"></span>
			What I actually do
		</div>
		<div
			class="mt-[10px] text-[40px] font-bold leading-[1.05] tracking-tight"
			style="letter-spacing: -1.2px"
		>
			Backend systems, from <span class="text-[#b91c1c] italic">first principles</span>
		</div>
		<div
			class="mt-[10px] max-w-[620px] text-[15px] leading-[1.55] text-[rgba(245,240,234,0.62)]"
		>
			Hover any card to see the system under the hood. Most of these came from two production years at High
			Fidelity, plus freelance client work.
		</div>
	</div>

	<div class="grid lg:grid-cols-3 grid-cols-2 gap-[var(--v2-grid-gap)]">

		<!-- 1. Connection-score algorithm — network graph -->
		<SkillCard
			tag="ALGORITHM"
			title="User connection scoring"
			claim="Graph-based match scoring with full test coverage & docs."
			let:hovered
		>
			<svg viewBox="0 0 300 220" class="w-full h-full">
				{#each netEdges as [a, b]}
					<line
						x1={netNodes[a].x} y1={netNodes[a].y}
						x2={netNodes[b].x} y2={netNodes[b].y}
						stroke="#b91c1c"
						stroke-width={hovered ? 1.5 : 0.8}
						stroke-dasharray={hovered ? '3 2' : '0'}
						style="opacity: {hovered ? 0.85 : 0.4}; transition: opacity .4s, stroke-width .3s;"
					/>
				{/each}
				{#each netNodes as n}
					<circle
						cx={n.x} cy={n.y} r={n.r}
						fill={n.accent ? '#b91c1c' : '#221f1c'}
						stroke={n.accent ? '#b91c1c' : 'rgba(245,240,234,0.62)'}
						stroke-width="1.5"
					/>
				{/each}
			</svg>
		</SkillCard>

		<!-- 2. Time-series aggregation — sparkline bars -->
		<SkillCard
			tag="DATA"
			title="Time-series aggregation"
			claim="4-month datasets aggregated and served in real time."
			accent="#3b82f6"
			let:hovered
		>
			<div class="w-full h-full flex items-end gap-[3px] px-[18px] pt-[20px] pb-[60px]">
				{#each tsBars as bar, i}
					<div class="flex-1 rounded-t-[2px]"
						style="
							height: {bar.h}%;
							background: {bar.hot ? '#b91c1c' : 'linear-gradient(180deg,#b91c1c88,#b91c1c22)'};
							transform: scaleY({hovered ? 1 : 0.5});
							transform-origin: bottom;
							transition: transform .5s cubic-bezier(.2,.8,.2,1) {i * 15}ms, background .3s;
							opacity: {hovered ? 1 : 0.6};
						"
					></div>
				{/each}
			</div>
		</SkillCard>

		<!-- 3. Caching — before/after latency bars -->
		<SkillCard
			tag="PERF"
			title="Caching & async redesign"
			claim="Eliminated UI blocking via multi-tier cache + async queue."
			accent="#f59e0b"
			let:hovered
		>
			<div class="w-full h-full flex gap-[12px] p-[22px]">
				<div class="flex-1 flex flex-col gap-[6px]">
					<div class="text-[9px] text-[rgba(245,240,234,0.62)] font-mono">BEFORE</div>
					{#each [0, 1, 2] as idx}
						<div class="h-2 bg-[#221f1c] rounded-[4px] overflow-hidden relative">
							<div
								class="absolute inset-0"
								style="
									width: {hovered ? '100%' : `${30 + idx * 20}%`};
									background: linear-gradient(90deg,transparent,#f59e0baa,transparent);
									transition:width {1.2 + idx * 0.3}s;
								"
							></div>
						</div>
					{/each}
					<div class="font-mono text-[9px] text-[#f59e0b] mt-[2px]">1.8s · 2.4s · 3.1s</div>
				</div>
				<div class="pt-[20%] font-mono text-[#b91c1c] text-[16px] font-bold">
					<ArrowRight class="w-4 h-4" />
				</div>
				<div class="flex-1 flex flex-col gap-[6px]">
					<div class="text-[9px] text-[rgba(245,240,234,0.62)] font-mono">AFTER (CACHED)</div>
					{#each [0, 1, 2] as idx}
						<div
							class="h-2 bg-[#b91c1c] rounded-[4px]"
							style="opacity: {hovered ? 1 : 0.3}; transition:opacity .15s {idx * 60}ms;"
						></div>
					{/each}
					<div class="font-mono text-[9px] text-[#22c55e] mt-[2px]">40ms · 38ms · 42ms</div>
				</div>
			</div>
		</SkillCard>

		<!-- 4. Transactions — concurrent writes -->
		<SkillCard
			tag="DB"
			title="Transactions, no races"
			claim="Killed race conditions in high-traffic MongoDB writes."
			let:hovered
		>
			<div class="relative w-full h-full p-[20px]">
				<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-[12px] bg-[#221f1c] border border-[#b91c1c] flex items-center justify-center font-mono text-[9px] text-[#b91c1c] font-bold z-[3]">TX</div>
				{#if hovered}
					<div class="v2-spin absolute left-1/2 top-1/2 w-[80px] h-[80px] rounded-full border border-dashed border-[#b91c1c] opacity-50 -ml-[40px] -mt-[40px]"></div>
				{/if}
				{#each [{c:'#b91c1c',top:'20%',anim:'v2-slide0'},{c:'#3b82f6',top:'55%',anim:'v2-slide1'},{c:'#f59e0b',top:'85%',anim:'v2-slide2'}] as lane}
					<div class="absolute left-[20px] right-[20px] h-[2px]" style="top:{lane.top}; background:linear-gradient(90deg,transparent,{lane.c},transparent); opacity:{hovered ? 0.7 : 0.2}; transition:opacity .3s;">
						{#if hovered}
							<div class={lane.anim} style="position:absolute;top:-4px;width:10px;height:10px;border-radius:50%;background:{lane.c};box-shadow:0 0 10px {lane.c};"></div>
						{/if}
					</div>
				{/each}
			</div>
		</SkillCard>

		<!-- 5. WebSocket — client connection pulse -->
		<SkillCard
			tag="REALTIME"
			title="WebSocket session management"
			claim="Concurrent room routing with invite-link joins."
			accent="#3b82f6"
			let:hovered
		>
			<svg class="w-full h-full pointer-events-none" viewBox="0 0 300 260" aria-hidden="true">
				<g
					stroke="#b91c1c"
					stroke-width="1"
					stroke-dasharray="4 3"
					fill="none"
					style="opacity:{hovered ? 0.6 : 0.2};transition:opacity .3s;"
				>
					<line x1="46" y1="122" x2="254" y2="122" />
					<line x1="46" y1="35" x2="46" y2="165" />
					<line x1="254" y1="25" x2="254" y2="165" />
				</g>

				{#each [[37,34],[245,20],[37,164],[245,156]] as [x, y]}
					<rect
						x={x}
						y={y}
						width="18"
						height="14"
						rx="3"
						fill="#221f1c"
						stroke="rgba(245,240,234,0.62)"
						stroke-width="1"
					/>
				{/each}

				<rect x="132" y="104" width="36" height="36" rx="8" fill="#b91c1c" />
				<text
					x="150"
					y="126"
					text-anchor="middle"
					font-family="'JetBrains Mono', monospace"
					font-size="10"
					font-weight="700"
					fill="#ffffff"
				>
					WS
				</text>
			</svg>
		</SkillCard>

		<!-- 6. REST API endpoints list -->
		<SkillCard
			tag="API"
			title="20+ REST endpoints"
			claim="Designed & documented a full API surface."
			accent="#22c55e"
			let:hovered
		>
			<div class="w-full h-full flex flex-col gap-[5px] p-[18px] font-mono text-[10px]">
				{#each apiEps as ep, i}
					<div
						class="flex gap-[8px] py-[4px] px-[8px] bg-[#221f1c] rounded-[3px] border border-[#2c2823]"
						style="transform:{hovered ? 'translateX(0)' : 'translateX(-8px)'};opacity:{hovered ? 1 : 0.5};transition:transform .3s {i*40}ms,opacity .3s {i*40}ms;"
					>
						<span class="font-bold min-w-[48px]" style="color:{ep.c};">{ep.m}</span>
						<span class="text-[#f5f0ea]">{ep.p}</span>
					</div>
				{/each}
				<div class="text-[9px] text-[rgba(245,240,234,0.62)] mt-[2px]">+ 14 more endpoints</div>
			</div>
		</SkillCard>

		<!-- 7. Role-based permissions matrix -->
		<SkillCard
			tag="ACCESS"
			title="Role-based permissions"
			claim="Matrix-driven authorization across resources."
			let:hovered
		>
			<div class="w-full h-full flex flex-col gap-[4px] p-[16px] font-mono">
				<div class="grid grid-cols-[60px_repeat(4,minmax(0,1fr))] gap-[4px] text-[9px] text-[rgba(245,240,234,0.62)]">
					<div></div>
					{#each permPerms as p}
						<div class="text-center">{p}</div>
					{/each}
				</div>
				{#each permRoles as r, ri}
					<div class="grid grid-cols-[60px_repeat(4,minmax(0,1fr))] gap-[4px]">
						<div class="text-[10px] text-[#f5f0ea] self-center">{r}</div>
						{#each permGrid[ri] as v, ci}
							<div
								class="aspect-square rounded-[3px] flex items-center justify-center text-white text-[11px] font-bold"
								style="
									background: {v ? '#b91c1c' : '#221f1c'};
									border: 1px solid {v ? '#b91c1c' : '#2c2823'};
									opacity: {hovered ? 1 : 0.4};
									transition: opacity .3s {(ri*4+ci)*30}ms;
								"
							>{v ? '✓' : ''}</div>
						{/each}
					</div>
				{/each}
			</div>
		</SkillCard>

		<!-- 8. Docker + CI/CD pipeline -->
		<SkillCard
			tag="INFRA"
			title="Docker + automated CI"
			claim="Containerized services with 100% test coverage."
			accent="#f59e0b"
			let:hovered
		>
			<div class="w-full h-full flex items-center gap-[6px] p-[22px]">
				{#each pipeStages as s, i}
					<div
						class="flex-1 py-[14px] rounded-[6px] bg-[#221f1c] text-center font-mono text-[10px] font-semibold"
						style="border:1.5px solid {hovered ? s.c : '#2c2823'};color:{hovered ? s.c : 'rgba(245,240,234,0.62)'};transition:border-color .3s {i*200}ms,color .3s {i*200}ms;"
					>
						{s.n}
					</div>
					{#if i < pipeStages.length - 1}
						<div
							class="flex-shrink-0 h-[2px] w-[10px]"
							style="background:{hovered ? '#b91c1c' : '#2c2823'};transition:background .3s {i*200+100}ms;"
						></div>
					{/if}
				{/each}
			</div>
		</SkillCard>

		<!-- 9. Responsive design — device silhouettes -->
		<SkillCard
			tag="FRONTEND"
			title="Responsive design"
			claim="Sites that read great on every screen."
			accent="#a855f7"
			let:hovered
		>
			<div class="w-full h-full flex items-center justify-center gap-[14px] p-[22px]">
				{#each [{w:120,h:78},{w:64,h:86},{w:34,h:60}] as d, i}
					<div
						class="rounded-[6px] border border-[#3a352f] bg-[#221f1c] p-[4px] flex flex-col gap-[3px]"
						style="
							width:{d.w}px;height:{d.h}px;
							border-width:1.5px;
							transform:{hovered ? `translateY(${i*-2}px) scale(1)` : 'scale(0.9)'};
							opacity:{hovered ? 1 : 0.4};
							transition:transform .4s {i*100}ms,opacity .4s {i*100}ms;
						"
					>
						<div class="h-[6px] rounded-[2px] bg-[#b91c1c]" style="width:60%;"></div>
						<div class="h-[3px] rounded-[2px] bg-[#3a352f]"></div>
						<div class="h-[3px] rounded-[2px] bg-[#3a352f]" style="width:80%;"></div>
						<div class="flex-1 rounded-[2px] mt-[2px]" style="background:repeating-linear-gradient(135deg,#1a1714 0 6px,#221f1c 6px 12px);"></div>
					</div>
				{/each}
			</div>
		</SkillCard>

		<!-- 10. End-to-end architecture — API → cache → DB -->
		<SkillCard
			tag="SYSTEMS"
			title="End-to-end architecture"
			claim="API · cache · data — designed from first principles."
			let:hovered
		>
			<svg viewBox="0 0 300 230" class="w-full h-full">
				{#each archLayers as l, i}
					{#if i < archLayers.length - 1}
						<!-- vertical line, under the boxes but above the ball -->
						<line x1="150" y1={l.y+40} x2="150" y2={archLayers[i+1].y} stroke="#b91c1c" stroke-width="1" stroke-dasharray="2 2" style="opacity:{hovered ? 0.7 : 0.2};transition:opacity .3s;" />
					{/if}
				{/each}
				{#if hovered}
					<!-- ball, above the line but under the boxes -->
					<circle r="5" fill="#22c55e">
						<animateMotion dur="2.5s" repeatCount="indefinite" 
							path="M 150 170 L 150 90 L 150 40" />
					</circle>
				{/if}
				{#each archLayers as l, i}
					<rect x="60" y={l.y} width="180" height="40" rx="6" fill="#221f1c" stroke={hovered ? l.c : '#2c2823'} stroke-width="1.5" style="transition:stroke .3s {i*120}ms;" />
					<text x="150" y={l.y+25} text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" font-weight="700" fill={hovered ? l.c : 'rgba(245,240,234,0.62)'} style="transition:fill .3s {i*120}ms;">{l.n}</text>
				{/each}
			</svg>
		</SkillCard>

	</div>
</section>

<style>
	@keyframes -global-v2-spin {
		to { transform: rotate(360deg); }
	}
	:global(.v2-spin) {
		animation: v2-spin 4s linear infinite;
	}
	@keyframes -global-v2-slide0 {
		0%   { left: 0; }
		40%  { left: 45%; }
		60%  { left: 45%; }
		100% { left: 100%; }
	}
	@keyframes -global-v2-slide1 {
		0%   { left: 0; }
		30%  { left: 45%; }
		50%  { left: 45%; }
		100% { left: 100%; }
	}
	@keyframes -global-v2-slide2 {
		0%   { left: 100%; }
		50%  { left: 45%; }
		100% { left: 0; }
	}
	:global(.v2-slide0) { animation: v2-slide0 1.5s infinite cubic-bezier(.5,0,.5,1); }
	:global(.v2-slide1) { animation: v2-slide1 1.8s 0.3s infinite cubic-bezier(.5,0,.5,1); }
	:global(.v2-slide2) { animation: v2-slide2 2.1s 0.6s infinite cubic-bezier(.5,0,.5,1); }
</style>
