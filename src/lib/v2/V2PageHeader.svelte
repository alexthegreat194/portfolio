<svelte:options runes={false} />

<script>
	/** @type {{ label: string; href?: string }[]} */
	export let crumbs = [];
	export let title = '';
	export let showTitleDot = false;
	export let subtitle = '';
	/** `'start'` matches long-form pages; `'center'` for the index hero. */
	export let align = 'start';
	/** When true, subtitle loses the large bottom margin (about page uses 56px before the next block). */
	export let compactTail = false;
</script>

<div
	class="root"
	class:root--center={align === 'center'}
	class:root--compactTail={compactTail}
>
{#if crumbs?.length}
	<div class="crumbs">
		{#each crumbs as c, i}
			{#if i > 0}<span class="sep">/</span>{/if}
			{#if c.href}
				<a href={c.href}>{c.label}</a>
			{:else}
				<span class="here">{c.label}</span>
			{/if}
		{/each}
	</div>
{/if}

<h1 class="title">
	{title}{#if showTitleDot}<span class="dot">.</span>{/if}
</h1>

{#if subtitle}
	<p class="sub">{subtitle}</p>
{/if}
</div>

<style>
	.root {
		width: 100%;
	}
	.root--center {
		text-align: center;
	}
	.root--center .crumbs {
		justify-content: center;
	}
	.root--center .sub {
		margin-left: auto;
		margin-right: auto;
	}
	.root--compactTail .sub {
		margin-bottom: 0;
	}

	.crumbs {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: rgba(245, 240, 234, 0.62);
		margin-bottom: 28px;
	}
	.crumbs a {
		color: inherit;
		text-decoration: none;
	}
	.crumbs a:hover {
		color: #f5f0ea;
	}
	.sep {
		color: rgba(245, 240, 234, 0.38);
	}
	.here {
		color: #b91c1c;
		font-weight: 700;
	}

	.title {
		font-size: 72px;
		font-weight: 700;
		letter-spacing: -2.5px;
		line-height: 1;
		margin: 0 0 14px;
		color: #f5f0ea;
	}
	.dot {
		color: #b91c1c;
	}

	.sub {
		font-size: 18px;
		color: rgba(245, 240, 234, 0.62);
		font-weight: 300;
		max-width: 620px;
		margin: 0 0 56px;
		line-height: 1.55;
	}

	@media (max-width: 820px) {
		.title {
			font-size: 48px;
			letter-spacing: -1.5px;
		}
	}
</style>
