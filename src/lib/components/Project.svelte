<script>
    import posthog from 'posthog-js'
    
    export let title;
    export let tool;
    export let description;
    export let visit;
    export let repo;

    const trackProjectClick = (action, projectTitle) => {
        posthog.capture('project_interaction', {
            action: action,
            project: projectTitle,
            tool: tool
        });
    }
</script>

<div class=" bg-gray-900 text-gray-100 p-7 rounded-xl ">
    <div class="flex flex-col rounded-2xl">
        
        <h1 class="
            text-2xl sm:text-4xl font-semibold 
            my-3 px-7">
            {title} 
            <span class="
                text-xs 
                bg-red-700 rounded-lg 
                p-1 mx-1 align-middle">
                {tool}
            </span>
        </h1>
        <p class="
            text-lg sm:text-xl 
            font-extralight 
            px-7 w-full 
            min-h-[5rem]">
            {description}
        </p>
        
        <div class="m-4 flex flex-wrap justify-center sm:justify-start gap-2">
            <a class="
                text-xl sm:text-2xl font-medium bg-red-700 
                px-6 py-2 sm:px-7 sm:py-3 rounded-full mx-2 border border-red-700
                hover:bg-gray-800 hover:text-red-700 hover:cursor-pointer transition-colors" 
                href="{visit}" target="_blank"
                on:click={() => trackProjectClick('visit', title)}>
                Visit
            </a>
            <a class="
                text-xl sm:text-2xl font-medium bg-gray-800 
                px-6 py-2 sm:px-7 sm:py-3 rounded-full border border-red-700 text-red-700 mx-2
                hover:bg-red-700 hover:text-gray-50 hover:cursor-pointer transition-colors" 
                href="{repo}" target="_blank"
                on:click={() => trackProjectClick('github', title)}>
                Github Repo
            </a>
        </div>

    </div>

</div>