<svelte:options runes={false} />

<script>
	/** @type {{ label: string; href: string; active?: boolean }[]} */
	export let links;
</script>

<nav class="nav">
	<a href="/v2" class="brand">
		<span class="brand-mark">A</span>
		Alex Harlan
	</a>
	<div class="links">
		{#each links as item}
			<a href={item.href} class:active={item.active}>{item.label}</a>
		{/each}
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 18px;
		left: var(--v2-nav-gutter);
		right: var(--v2-nav-gutter);
		z-index: 50;
		background: rgba(30, 26, 22, 0.72);
		backdrop-filter: blur(22px) saturate(1.4);
		-webkit-backdrop-filter: blur(22px) saturate(1.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);
		border-radius: 999px;
		padding: var(--v2-nav-pill-pad-y) calc(var(--v2-nav-pill-pad-x) + 0.25rem);
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 13px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 700;
		color: #b91c1c;
		text-decoration: none;
	}

	.brand-mark {
		width: 22px;
		height: 22px;
		border-radius: 6px;
		background: #b91c1c;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 11px;
		font-weight: 800;
		flex-shrink: 0;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 22px;
		font-weight: 500;
		color: rgba(245, 240, 234, 0.62);
	}

	.links a {
		color: inherit;
		text-decoration: none;
	}

	.links a:hover,
	.links a.active {
		color: #f5f0ea;
	}

	@media (max-width: 820px) {
		.links {
			gap: 14px;
		}
	}
</style>
