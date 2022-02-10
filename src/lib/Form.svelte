<!-- Form -->
<div class="
text-gray-50
flex flex-col items-center gap-7
m-25 mb-32"
id="contact">

<div class="flex flex-col items-center">
    <h1 class="text-red-700 text-5xl font-bold">Contact me</h1>
    <h3 class="text-2xl font-light">I'll get back to you as soon as I can</h3>
</div>

<form action="#" class="
    w-3/5
    flex flex-col gap-7">

    <div class="grid grid-cols-12 gap-7">
        <div class="flex flex-col col-span-5 gap-2">
            <label for="email" class="font-extralight">Email</label>
            <input type="email" name="email" id="email" class="
            text-gray-900 bg-gray-100 text-2xl p-2 custom-shadow">
        </div>

        <div class="flex flex-col col-span-7 gap-2">
            <label for="subject" class="font-extralight">Subject</label>
            <input type="text" name="subject" id="subject" class="
            text-gray-900 bg-gray-100 text-2xl p-2 custom-shadow">
        </div>
    </div>

    <div class="flex flex-col gap-2">
        <label for="message" class="font-extralight">Message</label>
        <textarea id="message" name="message" rows="4" cols="50" class="
        text-gray-900 bg-gray-100 text-2xl p-2 custom-shadow"></textarea>
    </div>

    <input type="submit" value="Submit" class="
    text-3xl font-medium px-7 py-3 mx-2 rounded-full
    border border-red-700
    bg-red-700 
    hover:bg-gray-900 hover:text-red-700 hover:cursor-pointer transition-colors">

</form>

</div>