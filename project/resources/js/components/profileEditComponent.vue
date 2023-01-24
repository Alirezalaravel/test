<template class="commponent-two">
    <div class="background">
      <div class="pt-4 h p p-form">
        <div class="">
            <div class="constant form">
              <h1 class="text-white text-center"> Update User </h1>
              <div class="mb-3 text-center mt-3">
                <img :src="`/image/img/${path}`" width="90" class="rounded-circle" alt="profile">
              </div>
              <div class="mb-3">
                <label for="username" class="form-label text-white">
                    <img src="/img/user.png" alt="" width="20">
                    username
                </label>
                <input type="text" class="form-control" id="username" v-model="username" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label text-white">
                    <img src="/img/email.png" alt="" width="20">
                    email
                </label>
                <input type="text" class="form-control" id="email" v-model="email" />
              </div>
              <div class="mb-3">
                <img src="/img/image.png" width="10%" alt="image">
                <input type="file" @change="uploadFile" ref="file">
              </div>
              <button type="submit" class="btn btn-primary form-control" @click="Update">Submit</button>
              <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
              </p>
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
        email: null,
        path: null,
        errors: [],
        token: localStorage.getItem('token'),
      }
    },
    mounted() {
        this.path = null;
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
      Update () { 
        this.errors = [];
        if (this.username && this.email) {    
          let self = this;
          const formData = new FormData();
          formData.append("path",this.path)
          formData.append("username",this.username)
          formData.append("email",this.email)
          const headers = { 'Content-Type': 'multipart/form-data' ,  Authorization: self.token};
          console.log(headers);
          axios.post(`/api/profileEdit`,formData,{headers})
            .then(function (response) {
              console.log(response);
              self.$router.push("/");
            })
            .catch(function (error) {
              console.log(error);
            });
        }else{
          if (!this.username) {
            this.errors.push("username required.");
          }
          
          if (!this.email) {
            this.errors.push("email required.");
          }
          
        }
      },
      uploadFile(e) {
        this.path = e.target.files[0];
        console.log(this.path);
      }
    }
  }
  </script>
  
  