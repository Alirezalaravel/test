<template>
    <div class="container text-center p-3 p-ll">
        <div class="mt-5 bg-dark border row pt-3">
        <h1 class="text-center col-12 text-white mb-3">
            <img src="/img/rose.png" width="50">
            welcome
            <img src="/img/rose.png" width="50">
        </h1>
        <p class="text-center col-12">
            <img class="border-img" :src="`/image/img/${path}`" width="37%" alt="profile">
        </p>
        <div class="row col-auto">
            <p class="m-3 text-white col-12 text-center align-self-center">
                <img src="/img/user.png" alt="" width="20">
                username: {{ username }}
            </p>
            <p class="m-3 text-white col-12 text-center align-self-center">
                <img src="/img/email.png" alt="" width="20">
                email: {{ email }}
            </p>
            <p class="m-3 text-white col-12 text-center align-self-center">
                <button type="button" class="btn btn-primary form-control" @click="update()" width="100%">Update</button>
            </p>
            <p class="mx-3 text-white col-12 text-center align-self-center">
                <button type="button" class="btn btn-danger form-control" @click="Delete()" width="100%">Delete</button>
            </p>
        </div>
        </div>
    </div> 
</template> 


<script>
   export default {
    data() {
        return {
            email: null,
            username: null,
            path: null,
            token: localStorage.getItem('token'),
        }
    },
    mounted() {
        let self = this;
        console.log(self.token);
        axios.get('/api/profile',{
            headers: {
                Authorization: self.token //the token is a variable which holds the token
            } 
        })
            .then(function (response) {
                // handle success`
                console.log(response);
                self.username = response.data.username;
                self.email = response.data.email;
                self.path = response.data.path;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },    
    methods: {
        update(){
            this.$router.push('/profileEdit');
        },
        Delete(){
            let self = this;
            console.log(self.token);
            axios.get('/api/profileDelete',{
                headers: {
                    Authorization: self.token //the token is a variable which holds the token
                } 
            })
            .then(function (response) {
                // handle success`
                console.log(response);
                
                localStorage.removeItem("token");
                if (!localStorage.getItem("token")) {
                    self.$router.push('/login');
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    },     
   }
</script>
 