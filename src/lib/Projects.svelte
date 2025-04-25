<script>
    import Project from "./components/Project.svelte";
</script>

<!-- Projects -->
<div
    class="
    bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden
    grid lg:grid-cols-2 xs:grid-cols-1"
>
    <Project
        title="Actichat"
        tool="Flask"
        description="A chat app that allows users to create rooms and chat with each other. Users can send links to each other for easy access "
        visit="https://actichat.onrender.com"
        repo="https://github.com/alexthegreat194/actichat"
    />

    <Project
        title="Doink"
        tool="Express.js/React"
        description="Doink! is a group management tool designed to assist friend groups in effectively managing their finances, recording social moments, and keeping track of shared shopping lists."
        visit="https://doink.otterlabs.co"
        repo="https://github.com/noname-friend-app/friend-app-api"
    />

    <!-- <Project
        title='Social Prescribing'
        tool='Express.js/React'
        description='Refactored the backend to be more efficient and modular. With Social Prescribing, connect patients to personalized social services and local communities to enhance their holistic health.'
        visit='https://social.otterlabs.co'
        repo='https://github.com/dfmorse23/socialprescribing'
    /> -->
</div>
