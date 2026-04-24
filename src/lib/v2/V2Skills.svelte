<svelte:options runes={false} />

<script>
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
	style="padding: var(--v2-section-y-tight) var(--v2-page-gutter) var(--v2-section-y); background: #0b0a09; color: #f5f0ea; font-family: 'Inter', system-ui, sans-serif;"
>
	<div style="margin-bottom: 32px;">
		<div
			style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,234,0.62); display: flex; align-items: center; gap: 10px;"
		>
			<span style="color: #b91c1c; font-weight: 700;">02b</span>
			<span style="width: 18px; height: 1px; background: #3a352f; display: inline-block;"></span>
			What I actually do
		</div>
		<div
			style="font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-top: 10px; line-height: 1.05;"
		>
			Backend systems, from <span style="color: #b91c1c; font-style: italic;">first principles</span>.
		</div>
		<div
			style="font-size: 15px; color: rgba(245,240,234,0.62); margin-top: 10px; max-width: 620px; line-height: 1.55;"
		>
			Hover any card to see the system under the hood. Most of these came from two production years at High
			Fidelity, plus freelance client work.
		</div>
	</div>

	<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--v2-grid-gap);">

		<!-- 1. Connection-score algorithm — network graph -->
		<SkillCard
			tag="ALGORITHM"
			title="User connection scoring"
			claim="Graph-based match scoring with full test coverage & docs."
			let:hovered
		>
			<svg viewBox="0 0 300 220" style="width: 100%; height: 100%;">
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
			<div style="width:100%;height:100%;display:flex;align-items:flex-end;padding:20px 18px 60px;gap:3px;">
				{#each tsBars as bar, i}
					<div style="
						flex: 1; height: {bar.h}%;
						background: {bar.hot ? '#b91c1c' : 'linear-gradient(180deg,#b91c1c88,#b91c1c22)'};
						border-radius: 2px 2px 0 0;
						transform: scaleY({hovered ? 1 : 0.5}); transform-origin: bottom;
						transition: transform .5s cubic-bezier(.2,.8,.2,1) {i * 15}ms, background .3s;
						opacity: {hovered ? 1 : 0.6};
					"></div>
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
			<div style="width:100%;height:100%;padding:22px;display:flex;gap:12px;">
				<div style="flex:1;display:flex;flex-direction:column;gap:6px;">
					<div style="font-size:9px;color:rgba(245,240,234,0.62);font-family:'JetBrains Mono',monospace;">BEFORE</div>
					{#each [0, 1, 2] as idx}
						<div style="height:8px;background:#221f1c;border-radius:4px;overflow:hidden;position:relative;">
							<div style="position:absolute;inset:0;width:{hovered ? '100%' : `${30 + idx * 20}%`};background:linear-gradient(90deg,transparent,#f59e0baa,transparent);transition:width {1.2 + idx * 0.3}s;"></div>
						</div>
					{/each}
					<div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#f59e0b;margin-top:2px;">1.8s · 2.4s · 3.1s</div>
				</div>
				<div style="font-family:'JetBrains Mono',monospace;color:#b91c1c;font-size:16px;align-self:center;font-weight:700;">→</div>
				<div style="flex:1;display:flex;flex-direction:column;gap:6px;">
					<div style="font-size:9px;color:rgba(245,240,234,0.62);font-family:'JetBrains Mono',monospace;">AFTER (CACHED)</div>
					{#each [0, 1, 2] as idx}
						<div style="height:8px;background:#b91c1c;border-radius:4px;opacity:{hovered ? 1 : 0.3};transition:opacity .15s {idx * 60}ms;"></div>
					{/each}
					<div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#22c55e;margin-top:2px;">40ms · 38ms · 42ms</div>
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
			<div style="position:relative;width:100%;height:100%;padding:20px;">
				<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:12px;background:#221f1c;border:1.5px solid #b91c1c;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:9px;color:#b91c1c;font-weight:700;z-index:3;">TX</div>
				{#if hovered}
					<div class="v2-spin" style="position:absolute;left:50%;top:50%;width:80px;height:80px;border-radius:50%;border:1px dashed #b91c1c;opacity:0.5;margin-left:-40px;margin-top:-40px;"></div>
				{/if}
				{#each [{c:'#b91c1c',top:'20%',anim:'v2-slide0'},{c:'#3b82f6',top:'55%',anim:'v2-slide1'},{c:'#f59e0b',top:'85%',anim:'v2-slide2'}] as lane}
					<div style="position:absolute;top:{lane.top};left:20px;right:20px;height:2px;background:linear-gradient(90deg,transparent,{lane.c},transparent);opacity:{hovered ? 0.7 : 0.2};transition:opacity .3s;">
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
			title="WebSocket session mgmt"
			claim="Concurrent room routing with invite-link joins."
			accent="#3b82f6"
			let:hovered
		>
			<div style="width:100%;height:100%;position:relative;padding:20px;">
				<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:8px;background:#b91c1c;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:#fff;font-weight:700;z-index:2;">WS</div>
				{#each [{x:'10%',y:'18%'},{x:'80%',y:'12%'},{x:'10%',y:'72%'},{x:'80%',y:'78%'}] as c}
					<div style="position:absolute;left:{c.x};top:{c.y};width:18px;height:14px;border-radius:3px;background:#221f1c;border:1px solid rgba(245,240,234,0.62);"></div>
				{/each}
				<svg style="position:absolute;inset:0;pointer-events:none;width:100%;height:100%;" viewBox="0 0 300 260" preserveAspectRatio="none">
					{#each [[38,38,150,130],[262,28,150,130],[38,196,150,130],[262,206,150,130]] as [x1,y1,x2,y2]}
						<line {x1} {y1} {x2} {y2} stroke="#b91c1c" stroke-width="1" stroke-dasharray="4 3" style="opacity:{hovered ? 0.6 : 0.2};transition:opacity .3s;" />
					{/each}
				</svg>
			</div>
		</SkillCard>

		<!-- 6. REST API endpoints list -->
		<SkillCard
			tag="API"
			title="20+ REST endpoints"
			claim="Designed & documented a full API surface."
			accent="#22c55e"
			let:hovered
		>
			<div style="width:100%;height:100%;padding:18px;display:flex;flex-direction:column;gap:5px;font-family:'JetBrains Mono',monospace;font-size:10px;">
				{#each apiEps as ep, i}
					<div style="display:flex;gap:8px;padding:4px 8px;background:#221f1c;border-radius:3px;border:1px solid #2c2823;transform:{hovered ? 'translateX(0)' : 'translateX(-8px)'};opacity:{hovered ? 1 : 0.5};transition:transform .3s {i*40}ms,opacity .3s {i*40}ms;">
						<span style="color:{ep.c};font-weight:700;min-width:48px;">{ep.m}</span>
						<span style="color:#f5f0ea;">{ep.p}</span>
					</div>
				{/each}
				<div style="font-size:9px;color:rgba(245,240,234,0.62);margin-top:2px;">+ 14 more endpoints</div>
			</div>
		</SkillCard>

		<!-- 7. Role-based permissions matrix -->
		<SkillCard
			tag="ACCESS"
			title="Role-based permissions"
			claim="Matrix-driven authorization across resources."
			let:hovered
		>
			<div style="width:100%;height:100%;padding:16px;display:flex;flex-direction:column;gap:4px;font-family:'JetBrains Mono',monospace;">
				<div style="display:grid;grid-template-columns:60px repeat(4,1fr);gap:4px;font-size:9px;color:rgba(245,240,234,0.62);">
					<div></div>
					{#each permPerms as p}<div style="text-align:center;">{p}</div>{/each}
				</div>
				{#each permRoles as r, ri}
					<div style="display:grid;grid-template-columns:60px repeat(4,1fr);gap:4px;">
						<div style="font-size:10px;color:#f5f0ea;align-self:center;">{r}</div>
						{#each permGrid[ri] as v, ci}
							<div style="aspect-ratio:1;background:{v ? '#b91c1c' : '#221f1c'};border-radius:3px;border:1px solid {v ? '#b91c1c' : '#2c2823'};display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;opacity:{hovered ? 1 : 0.4};transition:opacity .3s {(ri*4+ci)*30}ms;">{v ? '✓' : ''}</div>
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
			<div style="width:100%;height:100%;padding:22px;display:flex;align-items:center;gap:6px;">
				{#each pipeStages as s, i}
					<div style="flex:1;padding:14px 0;border-radius:6px;background:#221f1c;border:1.5px solid {hovered ? s.c : '#2c2823'};text-align:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:{hovered ? s.c : 'rgba(245,240,234,0.62)'};font-weight:600;transition:border-color .3s {i*200}ms,color .3s {i*200}ms;">{s.n}</div>
					{#if i < pipeStages.length - 1}
						<div style="width:10px;height:2px;background:{hovered ? '#b91c1c' : '#2c2823'};transition:background .3s {i*200+100}ms;flex-shrink:0;"></div>
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
			<div style="width:100%;height:100%;padding:22px;display:flex;align-items:center;justify-content:center;gap:14px;">
				{#each [{w:120,h:78},{w:64,h:86},{w:34,h:60}] as d, i}
					<div style="width:{d.w}px;height:{d.h}px;border-radius:6px;border:1.5px solid #3a352f;background:#221f1c;padding:4px;transform:{hovered ? `translateY(${i*-2}px) scale(1)` : 'scale(0.9)'};opacity:{hovered ? 1 : 0.4};transition:transform .4s {i*100}ms,opacity .4s {i*100}ms;display:flex;flex-direction:column;gap:3px;">
						<div style="height:6px;background:#b91c1c;border-radius:2px;width:60%;"></div>
						<div style="height:3px;background:#3a352f;border-radius:2px;"></div>
						<div style="height:3px;background:#3a352f;border-radius:2px;width:80%;"></div>
						<div style="flex:1;background:repeating-linear-gradient(135deg,#1a1714 0 6px,#221f1c 6px 12px);border-radius:2px;margin-top:2px;"></div>
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
			<svg viewBox="0 0 300 230" style="width:100%;height:100%;">
				{#each archLayers as l, i}
					<rect x="60" y={l.y} width="180" height="40" rx="6" fill="#221f1c" stroke={hovered ? l.c : '#2c2823'} stroke-width="1.5" style="transition:stroke .3s {i*120}ms;" />
					<text x="150" y={l.y+25} text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" font-weight="700" fill={hovered ? l.c : 'rgba(245,240,234,0.62)'} style="transition:fill .3s {i*120}ms;">{l.n}</text>
					{#if i < archLayers.length - 1}
						<line x1="150" y1={l.y+40} x2="150" y2={l.y+70} stroke="#b91c1c" stroke-width="1" stroke-dasharray="2 2" style="opacity:{hovered ? 0.7 : 0.2};transition:opacity .3s;" />
					{/if}
				{/each}
				{#if hovered}
					<circle r="5" fill="#22c55e">
						<animateMotion dur="2.5s" repeatCount="indefinite" path="M 150 20 L 150 60 L 150 90 L 150 130 L 150 90 L 150 60 Z" />
					</circle>
				{/if}
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
