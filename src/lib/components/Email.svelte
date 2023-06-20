<script>
	import axios, { Axios } from "axios";

    export let _id = '';
    export let subject = 'Subject';
    export let email = 'email@email.com';
    export let message = 'Hello my name is alex and I have an idea for you';
    
    export let password;
    
    let existing = true;

    

    const deleteEmail = () => {
        console.log('Deleting email...');
        console.log(_id);

        axios.post('/api/email/delete', { 
            emailId: _id, 
            password 
        }).then(response => {
            console.log(response.data);
            existing = false;
        }).catch(error => console.log(error));
    }
</script>

<div class="text-gray-800 border border-gray-800  p-3 shadow {existing === false ? 'line-through bg-gray-400' : 'bg-gray-200'} " >
    <h3 class='text-4xl font-bold'>{subject}</h3>
    <h5 class='text-2xl font-thin'>{email}</h5>
    <p class='text-xl'>{message}</p>

    <button on:click={deleteEmail} class='border rounded-xl w-min px-3 py-1 bg-red-500 hover:bg-red-300'>Delete</button>
</div>