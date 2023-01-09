<template class="commponent-two">
    <div class="background">
      <div class="pt-5 h p p-form">
        <div class="p">
            <div class="constant form">
              <h1 class="text-white text-center"> Update User </h1>
              <div class="mb-3 text-center mt-3">
                <img :src="`/image/${path}`" width="90" class="rounded-circle" alt="profile">
              </div>
              <div class="mb-3">
                <label for="username" class="form-label text-white">username</label>
                <input type="text" class="form-control" id="username" v-model="username" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label text-white">email</label>
                <input type="text" class="form-control" id="email" v-model="email" />
              </div>
              <div class="mb-3">
                <input type="file" @change="uploadFile" ref="file">
              </div>
              <router-link to="/"><button type="submit" class="btn btn-primary form-control" @click="Update">Submit</button></router-link>
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
      }
    },
    mounted() {
      let id = this.$route.params.id;
      let self = this;
      console.log(id); 
      axios.get(`/api/ProfileData/${id}`)
          .then(function (response) {
              // handle success
              console.log(response.data);
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
        let id = this.$route.params.id;
        let self = this;
        const formData = new FormData();
        formData.append("img",this.image)
        formData.append("username",this.username)
        formData.append("email",this.email)
        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post(`/api/update/${id}`,formData,{headers})
          .then(function (response) {
            console.log(response);
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
  
  