<svelte:options runes={false} />

<script>
	const profile = '/media/profile-final.jpg';
</script>

<section id="about" style="padding: 40px 48px;">
	<!-- Section header -->
	<div style="margin-bottom: 28px;">
		<div
			style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,234,0.62); display: flex; align-items: center; gap: 10px;"
		>
			<span style="color: #b91c1c; font-weight: 700;">02</span>
			<span style="width: 18px; height: 1px; background: #3a352f; display: inline-block;"></span>
			About
		</div>
		<div style="font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-top: 10px; line-height: 1.05;">
			A few words, in my own voice.
		</div>
	</div>

	<!-- Card -->
	<div
		style="background: #1a1714; border: 1px solid #2c2823; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); padding: 44px 48px 40px; position: relative; overflow: hidden;"
	>
		<div style="display: grid; grid-template-columns: 220px 1fr; gap: 48px; align-items: start;">
			<!-- Left: portrait + meta -->
			<div>
				<div
					style="height: 260px; width: 220px; border-radius: 12px; overflow: hidden; border: 1px solid #322d27;"
				>
					<img
						src={profile}
						alt="Alex Harlan"
						style="width: 100%; height: 100%; object-fit: cover; object-position: top;"
						draggable="false"
					/>
				</div>
				<div
					style="margin-top: 16px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.62); line-height: 1.8;"
				>
					<div>
						<span style="color: rgba(245,240,234,0.38);">based</span>&nbsp;&nbsp;Mill Valley, CA
					</div>
					<div>
						<span style="color: rgba(245,240,234,0.38);">focus</span>&nbsp;&nbsp;backend systems
					</div>
					<div><span style="color: rgba(245,240,234,0.38);">since</span>&nbsp;&nbsp;~2020</div>
				</div>
			</div>

			<!-- Right: bio placeholder -->
			<div style="max-width: 620px; position: relative;">
				<p
					style="margin: 0; font-family: 'Inter', system-ui, sans-serif; color: #f5f0ea; font-size: 19px; line-height: 1.6; font-weight: 400;"
				>
					I'm a software engineer who cares about building things that actually work — not just in demos,
					but under load, at 2 AM, when nobody is watching. I started writing code for fun (a lot of it
					bad), and somewhere along the way it became something I take seriously.
				</p>
				<p
					style="margin: 20px 0 0; font-family: 'Inter', system-ui, sans-serif; color: #f5f0ea; font-size: 19px; line-height: 1.6; position: relative;"
				>
					My work lives at the intersection of backend systems and product thinking — I want the thing
					I build to be fast and to matter. I've shipped features at a real company, freelanced for
					clients who needed someone they could trust, and built a handful of personal projects just
					because the problem seemed interesting&hellip;
					<span
						aria-hidden="true"
						style="position: absolute; left: 0; right: 0; bottom: -2px; height: 48px; background: linear-gradient(180deg, transparent 0%, #1a1714 90%); pointer-events: none;"
					></span>
				</p>

				<a
					href="/v2/about"
					style="display: inline-flex; align-items: center; gap: 10px; margin-top: 28px; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #b91c1c; font-weight: 600; padding: 10px 16px; border-radius: 999px; border: 1px solid #b91c1c; background: rgba(185,28,28,0.08);"
				>
					Continue reading <span style="font-size: 14px;">→</span>
				</a>
			</div>
		</div>

		<!-- Handoff cue -->
		<div
			style="margin-top: 32px; display: flex; align-items: center; justify-content: center; gap: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245,240,234,0.62); letter-spacing: 1px;"
		>
			<span style="width: 30px; height: 1px; background: #3a352f; display: inline-block;"></span>
			<span>technical side · below</span>
			<span style="color: #b91c1c;">↓</span>
			<span style="width: 30px; height: 1px; background: #3a352f; display: inline-block;"></span>
		</div>
	</div>
</section>
