<script>
    import background from "$lib/assets/background2-transparent.png";
    import profile from "$lib/assets/profile-final.jpg";

    import { animate, hover, inView } from "motion";
    import { onMount } from "svelte";

    let profileImageLoaded = false;

    function handleImageLoad() {
        profileImageLoaded = true;
        if (profileImageLoaded) {
            animate(
                "#profile-image",
                { scale: 1 },
                { ease: "circInOut", duration: 1, delay: 0.2 },
            );
        }
    }

    onMount(() => {
        hover("#profile-image", (element) => {
            animate(element, { scale: 1.1 });
            return () => animate(element, { scale: 1 });
        });

        animate(
            "#banner-container",
            { scale: 1 },
            { ease: "circInOut", duration: 1 },
        );

        // Stagger animations for text elements
        animate(
            "#hi-text",
            { opacity: 1, y: 0 },
            { duration: 0.3, delay: 0.2 },
        );

        animate(
            "#im-text",
            { opacity: 1, y: 0 },
            { duration: 0.3, delay: 0.4 },
        );

        animate(
            "#name-text",
            { opacity: 1, y: 0 },
            { duration: 0.3, delay: 0.6 },
        );

        animate(
            "#job-title",
            { opacity: 1, y: 0 },
            { duration: 0.3, delay: 0.8 },
        );

        // Profile image animation is now handled in the onload event
    });
</script>

<!-- Banner -->
<div
    class="
    h-screen w-screen flex justify-center items-center
    bg-pose bg-no-repeat bg-cover bg-center bg-blend-overlay bg-opacity-25 bg-fixed"
    style="background-image: url('{background}');"
    id="banner"
>
    <div
        id="banner-container"
        class="flex flex-col items-center gap-1 sm:gap-3 scale-90"
    >
        <h1
            class="text-center text-gray-300 font-bold text-3xl sm:text-6xl m-1"
        >
            <span id="hi-text" class="inline-block opacity-0 translate-y-4"
                >Hi,</span
            >
            <span id="im-text" class="inline-block opacity-0 translate-y-4"
                >I'm</span
            >
            <span
                id="name-text"
                class="text-red-700 bg-gray-300 rounded-xl px-4 inline-block opacity-0 translate-y-4"
                >Alex Harlan</span
            >
        </h1>
        <h5
            id="job-title"
            class="text-center text-gray-300 font-extralight text-md sm:text-xl opacity-0 translate-y-4"
        >
            Software Engineer
        </h5>

        <img
            class="object-cover w-[200px] h-[200px] rounded-full
        border-8 border-solid border-gray-900 scale-0"
            src={profile}
            draggable="false"
            alt="profile"
            id="profile-image"
            on:load={handleImageLoad}
        />
    </div>
</div>
