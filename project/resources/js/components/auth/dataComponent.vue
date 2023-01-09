<template>
    <div>
        
    </div>
</template>

<script>
    // window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // window.axios.defaults.withCredentials = true;
   export default {
    data(){
      return {
          drawer: true,
          user: {roles: [0]},
          token: localStorage.getItem('token'), //get your local storage data
          isLoading: true,
      }
    },
    mounted() {
        let self = this;
        axios.get('/api/user')
            .then(function (response) {
                // handle success
                console.log(response);
                self.$router.push("/")
            }) 
            .catch(function (error) {
                console.log(error);
                if (error.status === 401) {
                 localStorage.removeItem('token')
                }
                self.$router.push('/login')
            })
    },      
    created(){
        let self = this;
      axios.defaults.headers.common['Authorization'] = `Bearer ${self.token}` //include this in your created function
      
      this.isCreated = true   
    },
   }
</script> 