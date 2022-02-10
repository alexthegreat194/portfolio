<script>
    import background from '$lib/assets/Background-transperent.png'
    import profile from '$lib/assets/Profile.jpg'
</script>


<!-- Banner -->
<div class="
h-screen w-screen flex justify-center items-center
bg-pose bg-no-repeat bg-cover bg-center bg-blend-overlay bg-opacity-75 bg-fixed"
style="background-image: url('{background}');"
id="banner">
    <div class="flex flex-col items-center gap-3" >
        <h1 class="text-center text-gray-50 font-bold text-6xl" >Hi, I'm <span class="text-red-700">Alex Harlan</span></h1>
        <h5 class="text-center text-gray-50 font-extralight text-xl" >I build and design web applications</h5>

        <img class="object-cover w-[200px] h-[200px] rounded-full 
        border-8 border-solid border-gray-900"  
        src="{profile}" alt="profile">
    </div>
</div>