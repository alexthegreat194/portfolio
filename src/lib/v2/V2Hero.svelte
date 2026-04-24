<svelte:options runes={false} />

<script>
	const background = '/media/background2-transparent.png';
	const profile = '/media/profile-final.jpg';

	import { animate, hover } from 'motion';
	import { onMount, tick } from 'svelte';

	/** @type {HTMLImageElement | undefined} */
	let profileImg;

	let profileRevealDone = false;

	function revealProfileImage() {
		if (profileRevealDone) return;
		profileRevealDone = true;
		animate(
			'#v2-profile-circle',
			{ scale: 1 },
			{ ease: 'circInOut', duration: 1, delay: 0.2 },
		);
	}

	function syncProfileImageIfAlreadyLoaded() {
		const el = profileImg;
		if (el?.complete && el.naturalWidth > 0) {
			revealProfileImage();
		}
	}

	onMount(() => {
		hover('#v2-profile-circle', (element) => {
			animate(element, { scale: 1.1 });
			return () => animate(element, { scale: 1 });
		});

		animate(
			'#v2-hero-content',
			{ scale: 1 },
			{ ease: 'circInOut', duration: 1 },
		);

		animate(
			'#v2-chip-anim',
			{ opacity: 1, y: 0 },
			{ duration: 0.3, delay: 0.2 },
		);

		animate(
			'#v2-greet-anim',
			{ opacity: 1, y: 0 },
			{ duration: 0.3, delay: 0.4 },
		);

		animate(
			'#v2-name-anim',
			{ opacity: 1, y: 0 },
			{ duration: 0.3, delay: 0.6 },
		);

		animate(
			'#v2-subtitle-anim',
			{ opacity: 1, y: 0 },
			{ duration: 0.3, delay: 0.8 },
		);

		void tick().then(() => syncProfileImageIfAlreadyLoaded());
	});
</script>

<section
	class="relative flex items-center justify-center min-h-[620px] h-screen overflow-hidden"
>
	<!-- Background image -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat"
		style={`background-image: url('${background}');`}
	></div>

	<!-- Dark overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(180deg, rgba(11,10,9,0.5) 0%, rgba(11,10,9,0.88) 100%);"
	></div>

	<!-- Content: outer shell positions scroll; inner block is scaled/animated like legacy Banner -->
	<div
		class="relative z-[2] h-full w-full flex flex-col items-center justify-center text-center text-[#f5f0ea] font-inter px-[var(--v2-page-gutter)] pt-[clamp(2.25rem,11vh,7rem)] pb-0"
	>
		<div
			id="v2-hero-content"
			class="flex flex-col items-center text-center gap-[var(--v2-stack-gap)] w-full scale-90"
		>
		<!-- Status chip -->
		<div
			id="v2-chip-anim"
			class="flex items-center gap-[10px] rounded-full border font-inter text-[12px] px-[var(--v2-pill-pad-x)] py-[var(--v2-pill-pad-y)] shadow-[0_4px_24px_rgba(0,0,0,0.4),_inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[22px] saturate-[1.4] opacity-0 translate-y-4"
			style="
				background: rgba(30,26,22,0.42);
				border-color: rgba(255,255,255,0.10);
			"
		>
			<span
				class="w-[7px] h-[7px] rounded-full bg-[#22c55e] flex-shrink-0 animate-pulse"
				style="box-shadow: 0 0 8px #22c55e;"
			></span>
			Available for work · Bay Area, CA
		</div>

		<!-- Big title -->
		<div
			class="font-bold leading-[1]"
			style="font-size: clamp(38px, 5.5vw, 68px); letter-spacing: -2.5px;"
		>
			<span
				id="v2-greet-anim"
				class="inline-block opacity-0 translate-y-4"
			>
				Hi, I'm&nbsp;
			</span>
			<span
				id="v2-name-anim"
				class="inline-block opacity-0 translate-y-4"
			>
				<span
					class="inline-block bg-[#b91c1c] text-white px-[20px] py-[2px] pb-[6px] rounded-[14px]"
					style="transform: translateY(-4px);"
				>
					Alex Harlan
				</span>
			</span>
		</div>

		<!-- Subtitle -->
		<div
			id="v2-subtitle-anim"
			class="font-light text-[18px] max-w-[34rem] leading-[1.55] text-[#f5f0ea9e] px-[var(--v2-card-pad)] opacity-0 translate-y-4"
		>
			Software Engineer (Backend)
		</div>

		<!-- Profile circle -->
		<div
			id="v2-profile-circle"
			class="w-[110px] h-[110px] rounded-full border-[6px] border-[#0b0a09] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden mt-[10px] flex-shrink-0 scale-0"
		>
			<img
				bind:this={profileImg}
				src={profile}
				alt="Alex Harlan"
				class="w-full h-full object-cover"
				draggable="false"
				on:load={revealProfileImage}
				on:error={revealProfileImage}
			/>
		</div>
		</div>

		<!-- Scroll cue (outside scaled hero so Motion scale does not affect it) -->
		<div
			class="absolute flex flex-col items-center gap-1 text-[#f5f0ea6b] text-[10px] font-jetbrains-mono tracking-[1px] animate-bounce"
			style="bottom:calc(1.75rem + env(safe-area-inset-bottom,0px));"
		>
			SCROLL
			<div class="w-px h-5 bg-[#f5f0ea6b]"></div>
		</div>
	</div>
</section>
