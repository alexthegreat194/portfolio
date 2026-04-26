<script>
    /** @type {string} */
    export let href = '';

    /** @type {string} */
    export let icon = '';

    /** @type {string} */
    export let label = '';
</script>

<a
    href={href}
    class="
        bg-[rgba(30,26,22,0.42)] border border-[rgba(255,255,255,0.10)] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
        hover:bg-[#b91c1c] border hover:border-[#b91c1c] hover:shadow-[0_6px_20px_rgba(185,28,28,0.4)] transition-all duration-200
        rounded-full px-[calc(var(--v2-pill-pad-x)+0.85rem)] py-[calc(var(--v2-pill-pad-y)+0.2rem)]
        flex items-center gap-[12px] text-[13px] font-semibold text-white no-underline font-sans"
>
    <img src={icon} alt={label} width="16" height="16" />
    {label}
</a>