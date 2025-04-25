<script>
    import background from "$lib/assets/background2-transparent.png";
    import profile from "$lib/assets/profile-final.jpg";

    import { animate, hover, inView } from "motion";
    import { onMount } from "svelte";

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

        animate(
            "#profile-image",
            { scale: 1 },
            { ease: "circInOut", duration: 1, delay: 0.1 },
        );
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
            Hi, I'm <span class="text-red-700 bg-gray-300 rounded-xl px-4"
                >Alex Harlan</span
            >
        </h1>
        <h5
            class="text-center text-gray-300 font-extralight text-md sm:text-xl"
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
        />
    </div>
</div>
