<template>
    <div class="background">
      <div class="pt-5 pb-3 h p p-form">
        <div class="p">
          <div class="form">
            <h1 class="text-white text-center"> Register </h1>
            <div class="mb-3">
              <img src="/img/user.png" alt="" width="20">
              <label for="username" class="form-label text-white">username</label>
              <input type="text" class="form-control" id="username" v-model="username" />
            </div>
            <div class="mb-3">
              <img src="/img/password.png" alt="" width="20">
              <label for="password" class="form-label text-white">password</label>
              <input type="text" class="form-control" id="password" v-model="password" />
            </div>
            <div class="mb-3">
              <img src="/img/email.png" alt="" width="20">
              <label for="email" class="form-label text-white">email</label>
              <input type="text" class="form-control" id="email" v-model="email" />
            </div>
            <div class="mb-3">
              <input type="file" @change="uploadFile" ref="file">
            </div>
           <button type="submit" class="btn btn-primary form-control" @click="Create">Submit</button>
          </div> 
        </div>
        </div> 
    </div>
  
</template> 
  
  
  
  
  
<script>
  export default {
    data() { 
      return {
        username: null,
        password: null,
        email: null,
  
      }
    },
    // methods: {
    //   Create () { 
    //     let self = this;
    //   axios.post('/api/register', {
    //     username: self.username,
    //     password: self.password,
    //     email: self.email,
    //     })
    //     .then(function (response) {
    //       self.$router.push('/login')
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   }
    // }
    methods: {
      Create () {
        const formData = new FormData();
        formData.append("img",this.image)
        formData.append("username",this.username)
        formData.append("password",this.password)
        formData.append("email",this.email)
        const headers = { 'Content-Type': 'multipart/form-data' };
        let self = this;
        axios.post(`/api/register`,formData,{headers})
          .then(function (response) {
            console.log(response);
            self.$router.push('/login');
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      uploadFile(e) {
        this.image = e.target.files[0];
        console.log(this.image);
      }
    }
  }
</script>
  