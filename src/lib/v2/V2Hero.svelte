<svelte:options runes={false} />

<script>
	const background = '/media/background2-transparent.png';
	const profile = '/media/profile-final.jpg';
</script>

<section
	style="
  height: 100vh;
  min-height: 620px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
"
>
	<!-- Background image -->
	<div
		style="
    position: absolute;
    inset: 0;
    background-image: url('{background}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
	></div>

	<!-- Dark overlay -->
	<div
		style="
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(11,10,9,0.5) 0%, rgba(11,10,9,0.88) 100%);
  "
	></div>

	<!-- Content -->
	<div
		style="
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--v2-stack-gap);
    color: #f5f0ea;
    font-family: 'Inter', system-ui, sans-serif;
    padding: clamp(2.25rem, 11vh, 7rem) var(--v2-page-gutter) 0;
    text-align: center;
  "
	>
		<!-- Status chip -->
		<div
			style="
      background: rgba(30,26,22,0.42);
      backdrop-filter: blur(22px) saturate(1.4);
      -webkit-backdrop-filter: blur(22px) saturate(1.4);
      border: 1px solid rgba(255,255,255,0.10);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      border-radius: 999px;
      padding: var(--v2-pill-pad-y) var(--v2-pill-pad-x);
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    "
		>
			<span
				style="width: 7px; height: 7px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e; flex-shrink: 0;"
			></span>
			Available for work · Bay Area, CA
		</div>

		<!-- Big title -->
		<div
			style="font-size: clamp(38px, 5.5vw, 68px); font-weight: 700; letter-spacing: -2.5px; line-height: 1;"
		>
			Hi, I'm&nbsp;<span
				style="
        display: inline-block;
        background: #b91c1c;
        color: #fff;
        padding: 2px 20px 6px;
        border-radius: 14px;
        transform: translateY(-4px);
      ">Alex Harlan</span
			>
		</div>

		<!-- Subtitle -->
		<div
			style="font-size: 18px; color: rgba(245,240,234,0.62); font-weight: 300; max-width: 34rem; padding: 0 var(--v2-card-pad); line-height: 1.55;"
		>
			Software Engineer · building small, honest things on the web
		</div>

		<!-- Profile circle -->
		<div
			style="
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 6px solid #0b0a09;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      overflow: hidden;
      margin-top: 10px;
      flex-shrink: 0;
    "
		>
			<img
				src={profile}
				alt="Alex Harlan"
				style="width: 100%; height: 100%; object-fit: cover;"
				draggable="false"
			/>
		</div>

		<!-- Scroll cue -->
		<div
			style="
      position: absolute;
      bottom: calc(1.75rem + env(safe-area-inset-bottom, 0px));
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: rgba(245,240,234,0.42);
      font-size: 10px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 1px;
    "
		>
			SCROLL
			<div style="width: 1px; height: 20px; background: rgba(245,240,234,0.42);"></div>
		</div>
	</div>
</section>
