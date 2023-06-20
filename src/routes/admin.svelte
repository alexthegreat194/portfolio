<script>
    
    import Email from '$lib/components/Email.svelte';
    import axios from 'axios';

    let emails = []
    $: emails

    const onSubmit = (e) => {
        console.log('Collecting form data...');
        const formData = new FormData(e.target);
        const password = formData.get('password')
        
        let worked = false;
        axios.get('/api/admin')
        .then(response => {
            console.log(response);
            console.log(response.status == 200)
            worked = response.status == 200
        })
        .catch(error => console.log(error))
        .then(() => {
            
            axios.post('/api/admin', { password })
            .then(response => {
                console.log(response.data)
                emails = response.data.emails
            })

        })
    };

</script>


<div class="h-screen flex flex-col justify-center items-center overflow-auto">

    {#if emails.length <= 0}
    <form on:submit|preventDefault={onSubmit} class="
        flex flex-col gap-2 
        bg-gray-500
        p-4 w-80
        rounded-xl border-2 border-gray-800 shadow
        ">
        <label for="password" class='text-2xl font-bold'>Admin Password</label>
        <input name="password" type="password" class='rounded text-xl'>
        <input type="submit" class='border rounded-xl w-min px-3 py-1 bg-gray-100 hover:bg-gray-300'>
    </form>
    

    {:else}
        <div class='sticky top-0'>
            <h1 class='text-gray-50'>Top Part</h1>
        </div>
        <div class='overflow-auto'>
            {#each emails as email}
                <Email 
                    {...email}
                    password=password
                />
            {/each}
        </div>
    {/if}

</div>
