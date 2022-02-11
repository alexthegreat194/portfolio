<script>
    export let title;
    export let tool;
    export let description;
    export let visit;
    export let repo;
</script>

<div class=" bg-gray-900 text-gray-100 p-7 rounded-xl ">
    <div class="flex flex-col rounded-2xl">
        
        <h1 class="text-4xl font-semibold my-3 mx-7">{title} <span class="text-xs bg-red-700 rounded-lg p-1 align-middle">{tool}</span></h1>
        <p class="text-xl mx-7 w-full font-extralight min-h-[5rem]">{description}</p>
        
        <div class="m-4 flex flex-wrap gap-2">
            <a class="
                text-2xl font-medium bg-red-700 px-7 py-3 rounded-full mx-2 border border-red-700
                hover:bg-gray-800 hover:text-red-700 hover:cursor-pointer transition-colors" href="{visit}">Visit</a>
            <a class="
            text-2xl font-medium bg-gray-800 px-7 py-3 rounded-full border border-red-700 text-red-700 mx-2
            hover:bg-red-700 hover:text-gray-50 hover:cursor-pointer transition-colors" href="{repo}">Github Repo</a>
        </div>

    </div>

</div>