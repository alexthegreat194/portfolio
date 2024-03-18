<script>
    import { onMount } from 'svelte';

    let isMinus = false;
    let degit0 = 0;
    let degit1 = 0;
    let statement = "what is 0 + 0?"

    let email;
    let subject;
    let message;
    let captcha;

    const getAnswer = () => {
        return isMinus ? degit0 - degit1 : degit0 + degit1;
    }

    const resetCaptcha = () => {
        isMinus = Math.random() > 0.5;
        degit0 = Math.floor(Math.random() * 10);
        degit1 = Math.floor(Math.random() * 10);
        statement = `what is ${degit0} ${isMinus ? '-' : '+'} ${degit1}?`
    }

    onMount(resetCaptcha);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!email) return alert("Email is empty");
        if(!subject) return alert("Subject is empty");
        if(!message) return alert("Message is empty");
        if(!captcha) return alert("Captcha is empty");
        if (captcha == getAnswer()) {
            // create form data and send it to the server
            const formData = new FormData();
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            fetch('/api/contact', {
                method: 'POST',
                body: formData
            });
            resetCaptcha();
            // refresh the page 
            window.location.reload();
        } else {
            alert("Captcha is wrong");
        }
    }
</script>

<div class="
text-gray-50
flex flex-col items-center gap-7
m-25 mb-32"
id="contact">

    <div class="flex flex-col items-center">
        <h1 class="text-red-700 text-4xl sm:text-5xl font-bold">Contact me</h1>
        <h3 class="text-xl sm:text-2xl font-light">I'll get back to you as soon as I can</h3>
    </div>

    <form action="/api/contact" id="contact-form" method="post" on:submit={onSubmit} class="
        w-3/5
        flex flex-col gap-7">

        <div class="grid gap-7 
            grid-cols-1 sm:grid-cols-12
            grid-rows-2 sm:grid-rows-1">

            <div class="flex flex-col col-span-1 sm:col-span-5 gap-1 w-full">
                <label for="email" class="font-extralight">Email</label>
                <input type="email" name="email" id="email" bind:value={email} class="
                text-gray-900 bg-gray-100 text-xl p-2 custom-shadow">
            </div>

            <div class="flex flex-col col-span-1 sm:col-span-7 gap-1 w-full">
                <label for="subject" class="font-extralight">Subject</label>
                <input type="text" name="subject" id="subject" bind:value={subject} class="
                text-gray-900 bg-gray-100 text-xl p-2 custom-shadow">
            </div>
        </div>

        <div class="flex flex-col gap-1">
            <label for="message" class="font-extralight">Message</label>
            <textarea id="message" name="message" rows="4" cols="50" bind:value={message} class="
            text-gray-900 bg-gray-100 text-lg p-2 custom-shadow"></textarea>
        </div>

        <div class="flex flex-col gap-1">
            <label for="message" class="font-extralight">Captcha: {statement}</label>
            <input type="text" name="subject" id="subject" bind:value={captcha} class="
                text-gray-900 bg-gray-100 text-xl p-2 custom-shadow">
        </div>

        <input type="submit" value="Submit" class="
        text-3xl font-medium px-7 py-3 mx-2 rounded-full
        border border-red-700
        bg-red-700 
        hover:bg-gray-900 hover:text-red-700 hover:cursor-pointer transition-colors">

    </form>

</div>