<template>
    <div class="background">
      <div class="pt-5 pb-3 h p p-form">
        <div class="p">
          <div class="form">
            <h1 class="text-white text-center"> login </h1>
            <div class="mb-3">
              <label for="password" class="form-label text-white">password</label>
              <input type="text" class="form-control" id="password" v-model="password" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label text-white">email</label>
              <input type="text" class="form-control" id="email" v-model="email" />
            </div>
            <router-link to="/"><button type="submit" class="btn btn-primary form-control" @click="Create">Submit</button></router-link>
          </div> 
        </div>
        </div> 
    </div>
</template> 
  
  
  
<script>
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  window.axios.defaults.withCredentials = true;
  export default {
    data() { 
      return {
        password: null,
        email: null,
        name: 1401,
      }
    },
    methods: {
      Create () {
        let self = this;
        axios.get('/sanctum/csrf-cookie').then(response => {
          console.log(response);
          axios.post('/api/login', {
                password: self.password,
                email: self.email,
                device_name: "browser"
            })
            .then(function (response) {
              console.log(response.data);
              localStorage.setItem('token',response.data)
              self.alerts= true;
              self.$router.push('/data');     
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      },
      file(){
      return 1401;
    }
    }
  }
  </script>
  