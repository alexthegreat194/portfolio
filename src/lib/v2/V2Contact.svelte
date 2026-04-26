<svelte:options runes={false} />

<script>
	import SocialButton from './SocialButton.svelte';
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	
	onMount(() => {
		const stopEmail = inView('#email-button', () => {
			animate(
				'#email-button',
				{ opacity: 1, y: 0 },
				{ duration: 0.45, delay: 0.2, ease: 'easeOut' },
			);
		});
		const stopGithub = inView('#github-button', () => {
			animate(
				'#github-button',
				{ opacity: 1, y: 0 },
				{ duration: 0.45, delay: 0.35, ease: 'easeOut' },
			);
		});
		const stopLinkedin = inView('#linkedin-button', () => {
			animate(
				'#linkedin-button',
				{ opacity: 1, y: 0 },
				{ duration: 0.45, delay: 0.5, ease: 'easeOut' },
			);
		});

		return () => {
			stopEmail?.();
			stopGithub?.();
			stopLinkedin?.();
		};
	});
</script>

<section
	id="contact"
	class="px-[var(--v2-page-gutter)] pb-[calc(var(--v2-section-y)+1.25rem)]"
>
	<div
		class="relative overflow-hidden text-center bg-[#1a1714] border border-[#2c2823] rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.35)] px-[clamp(2rem,5vw,3.5rem)] py-[clamp(3rem,7vw,4.25rem)]"
	>
		<!-- Accent orb inside card -->
		<div
			class="pointer-events-none absolute left-1/2 top-[-40px] w-[300px] h-[300px] rounded-full bg-[#b91c1c] opacity-[0.22]"
			style="transform: translateX(-50%); filter: blur(80px);"
		></div>

		<div class="relative">
			<div class="font-mono text-[11px] tracking-[2px] uppercase text-[rgba(245,240,234,0.62)]">
				<span class="font-bold text-[#b91c1c]">05</span> · Contact
			</div>
			<div class="mt-[10px] text-[48px] font-bold tracking-[-0.04em] leading-[1.1]">
				Contact me
			</div>
			<div class="mt-[10px] font-mono text-[14px] text-[rgba(245,240,234,0.62)]">
				alexharlan194@gmail.com
			</div>

			<div class="mt-7 flex justify-center gap-[10px] flex-wrap social-buttons">
				<!-- Email (primary) -->
				<SocialButton id="email-button" class="opacity-0 translate-y-2" href="mailto:alexharlan194@gmail.com" icon="/media/white-gmail.png" label="Email" />
				<SocialButton id="github-button" class="opacity-0 translate-y-2" href="https://github.com/alexthegreat194" icon="/media/white-github.png" label="GitHub" />
				<SocialButton id="linkedin-button" class="opacity-0 translate-y-2" href="https://linkedin.com/in/alexander-harlan" icon="/media/white-linkedin.png" label="LinkedIn" />
			</div>
		</div>
	</div>

	<!-- Footer strip -->
	<div class="mt-6 flex justify-between items-center text-[rgba(245,240,234,0.38)] font-mono text-[11px]">
		<span>© 2026 Alex Harlan · built with Astro + Svelte</span>
		<div class="flex gap-[14px]">
			<span>v2.0</span>
		</div>
	</div>
</section>
