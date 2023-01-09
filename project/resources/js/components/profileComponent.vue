<template>
    <div>
        <h1 class="text-center">welcome</h1>
        <p class="mr-3">email: </p>
    </div>
</template>
<script>
   export default {
    data() {
        return {
            token: localStorage.getItem('token')
        }
    },

    mounted() {
        axios.post('/api/profile',{
            toket: this.token
        })
            .then(function (response) {
                // handle success`
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },          
   }
</script>
 