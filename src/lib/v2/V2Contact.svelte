<svelte:options runes={false} />

<section id="contact" style="padding: 0 48px 90px;">
	<div
		style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); padding: 56px; text-align: center; position: relative; overflow: hidden;"
	>
		<!-- Accent orb inside card -->
		<div
			style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); width: 300px; height: 300px; border-radius: 50%; background: #b91c1c; filter: blur(80px); opacity: 0.22; pointer-events: none;"
		></div>

		<div style="position: relative;">
			<div
				style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,234,0.62);"
			>
				<span style="color: #b91c1c; font-weight: 700;">05</span> · Contact
			</div>
			<div
				style="font-size: 48px; font-weight: 700; letter-spacing: -1.6px; margin-top: 10px; line-height: 1.1;"
			>
				Let's build something<span style="color: #b91c1c;">.</span>
			</div>
			<div
				style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: rgba(245,240,234,0.62); margin-top: 10px;"
			>
				alexharlan194@gmail.com
			</div>

			<div
				style="margin-top: 28px; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;"
			>
				<!-- Email (primary) -->
				<a
					href="mailto:alexharlan194@gmail.com"
					style="background: #b91c1c; border: 1px solid #b91c1c; box-shadow: 0 6px 20px rgba(185,28,28,0.4); border-radius: 999px; padding: 12px 22px; display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: #fff; text-decoration: none; font-family: 'Inter', system-ui, sans-serif;"
				>
					<span>✉</span> Email
				</a>

				<!-- GitHub -->
				<a
					href="https://github.com/alexthegreat194"
					target="_blank"
					style="background: rgba(30,26,22,0.42); backdrop-filter: blur(22px) saturate(1.4); -webkit-backdrop-filter: blur(22px) saturate(1.4); border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08); border-radius: 999px; padding: 12px 22px; display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: #f5f0ea; text-decoration: none; font-family: 'Inter', system-ui, sans-serif;"
				>
					<span>◉</span> GitHub
				</a>

				<!-- LinkedIn -->
				<a
					href="https://linkedin.com/in/alexander-harlan"
					target="_blank"
					style="background: rgba(30,26,22,0.42); backdrop-filter: blur(22px) saturate(1.4); -webkit-backdrop-filter: blur(22px) saturate(1.4); border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08); border-radius: 999px; padding: 12px 22px; display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: #f5f0ea; text-decoration: none; font-family: 'Inter', system-ui, sans-serif;"
				>
					<span style="font-size: 11px; font-weight: 800;">in</span> LinkedIn
				</a>
			</div>
		</div>
	</div>

	<!-- Footer strip -->
	<div
		style="margin-top: 24px; display: flex; justify-content: space-between; align-items: center; color: rgba(245,240,234,0.38); font-family: 'JetBrains Mono', monospace; font-size: 11px;"
	>
		<span>© 2026 Alex Harlan · built with Astro + Svelte</span>
		<div style="display: flex; gap: 14px;">
			<span>v2.0</span>
		</div>
	</div>
</section>
