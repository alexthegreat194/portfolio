<svelte:options runes={false} />

<nav
	style="
  position: fixed;
  top: 16px;
  left: 24px;
  right: 24px;
  z-index: 50;
  background: rgba(30,26,22,0.72);
  backdrop-filter: blur(22px) saturate(1.4);
  -webkit-backdrop-filter: blur(22px) saturate(1.4);
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px;
"
>
	<a
		href="/v2"
		style="display: flex; align-items: center; gap: 10px; font-weight: 700; color: #b91c1c; text-decoration: none;"
	>
		<div
			style="width: 22px; height: 22px; border-radius: 6px; background: #b91c1c; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; font-weight: 800; flex-shrink: 0;"
		>
			A
		</div>
		Alex Harlan
	</a>
	<div style="display: flex; gap: 22px; font-weight: 500;">
		<a href="#work" style="color: #f5f0ea; text-decoration: none;">Work</a>
		<a href="#about" style="color: rgba(245,240,234,0.62); text-decoration: none;">About</a>
		<a href="#experience" style="color: rgba(245,240,234,0.62); text-decoration: none;">Experience</a>
		<a href="#contact" style="color: rgba(245,240,234,0.62); text-decoration: none;">Contact</a>
	</div>
</nav>
