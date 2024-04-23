<script>
    import { onMount } from 'svelte';

    import redgithub from '$lib/assets/red-github.png';
    import redlinkedin from '$lib/assets/red-linkedin.png';
    import redgmail from '$lib/assets/red-gmail.png';
    import whitegithub from '$lib/assets/white-github.png';
    import whitelinkedin from '$lib/assets/white-linkedin.png';
    import whitegmail from '$lib/assets/white-gmail.png';

    let onGithib = false;
    let onGmail = false;
    let onLinkedin = false;

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

    <div class="flex justify-center items-center gap-4 text-red-700">
        <a href="https://github.com/alexthegreat194" target="_blank">
            <div class="group flex justify-center items-center gap-4 shadow-xl border bg-gray-800 hover:bg-red-700 border-red-700 text-red-700 hover:text-red-50 hover:fill-gray-50 py-10 px-16 rounded-l-2xl">
                <svg class="fill-red-700 group-hover:fill-red-50" width="30" height="30" viewBox="0 0 30 30" fill="#B91C1C" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0C6.265 0 0 6.42766 0 14.3555C0 20.6994 4.011 26.0791 9.5725 27.9752C10.2725 28.1104 10.5292 27.6666 10.5292 27.2849C10.5292 26.944 10.5175 26.0408 10.5117 24.8445C6.61733 25.7106 5.796 22.9185 5.796 22.9185C5.159 21.2616 4.2385 20.819 4.2385 20.819C2.97033 19.929 4.3365 19.9469 4.3365 19.9469C5.74233 20.0474 6.48083 21.4255 6.48083 21.4255C7.72917 23.6207 9.758 22.9867 10.5583 22.6194C10.6843 21.6911 11.0448 21.0583 11.445 20.6994C8.33583 20.3405 5.068 19.1059 5.068 13.6054C5.068 12.0382 5.6105 10.7582 6.50883 9.75334C6.35133 9.39086 5.87883 7.93139 6.63133 5.95393C6.63133 5.95393 7.80383 5.56872 10.4813 7.42536C11.6013 7.10595 12.7913 6.94804 13.9813 6.94086C15.1713 6.94804 16.3613 7.10595 17.4813 7.42536C20.1413 5.56872 21.3138 5.95393 21.3138 5.95393C22.0663 7.93139 21.5938 9.39086 21.4538 9.75334C22.3463 10.7582 22.8888 12.0382 22.8888 13.6054C22.8888 19.1203 19.6163 20.3345 16.5013 20.6874C16.9913 21.1181 17.4463 21.9985 17.4463 23.3432C17.4463 25.2644 17.4288 26.8076 17.4288 27.2742C17.4288 27.651 17.6738 28.0996 18.3913 27.9561C23.9925 26.0731 28 20.6898 28 14.3555C28 6.42766 21.7315 0 14 0Z"/>
                </svg>
                <h2 class="text-2xl font-bold">Github</h2>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/alexander-harlan/" target="_blank">
            <div class="group flex justify-center items-center gap-4 shadow-xl border bg-gray-800 hover:bg-red-700 border-red-700 text-red-700 hover:text-red-50 py-10 px-16">
                <svg class="fill-red-700 group-hover:fill-red-50" width="30" height="30" viewBox="0 0 30 30" fill="#B91C1C" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M25.5588 25.565H21.1162V18.6038C21.1162 16.9438 21.0825 14.8075 18.8013 14.8075C16.485 14.8075 16.1312 16.6137 16.1312 18.4812V25.565H11.6887V11.25H15.9563V13.2012H16.0137C16.61 12.0762 18.06 10.8888 20.2262 10.8888C24.7275 10.8888 25.56 13.8513 25.56 17.7075L25.5588 25.565ZM6.67125 9.29125C5.24125 9.29125 4.0925 8.13375 4.0925 6.71C4.0925 5.2875 5.2425 4.13125 6.67125 4.13125C8.09625 4.13125 9.25125 5.2875 9.25125 6.71C9.25125 8.13375 8.095 9.29125 6.67125 9.29125ZM8.89875 25.565H4.44375V11.25H8.89875V25.565ZM27.7813 0H2.21375C0.99 0 0 0.9675 0 2.16125V27.8387C0 29.0337 0.99 30 2.21375 30H27.7775C29 30 30 29.0337 30 27.8387V2.16125C30 0.9675 29 0 27.7775 0L27.7813 0Z"/>
                </svg>
                <h2 class="text-2xl font-bold">Linkedin</h2>
            </div>
        </a>
        <a href="mailto:alexharlan@gmail.com" target="_blank">
            <div class="group flex justify-center items-center gap-4 shadow-xl border bg-gray-800 hover:bg-red-700 border-red-700 text-red-700 hover:text-red-50 py-10 px-16 rounded-r-2xl">
                <svg class="fill-red-700 group-hover:fill-red-50" width="30" height="30" viewBox="0 0 30 30" fill="#B91C1C" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 2.5V27.5C30 28.9167 29.1875 30 28.125 30H26.25V7.31167L15 18.0833L3.75 7.31167V30H1.875C0.81125 30 0 28.9167 0 27.5V2.5C0 1.79167 0.2025 1.16667 0.53875 0.72C0.875 0.266667 1.345 0 1.875 0H2.5L15 12.0833L27.5 0H28.125C28.6563 0 29.125 0.27 29.4613 0.72C29.7988 1.16667 30 1.79167 30 2.5Z"/>
                </svg>
                <h2 class="text-2xl font-bold">Gmail</h2>
            </div>
        </a>
    </div>

    <h1 class="text-3xl font-bold text-red-700">Or send me a message</h1>

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

<style>
</style>