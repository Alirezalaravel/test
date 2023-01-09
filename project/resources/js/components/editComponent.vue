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
              <label for="firstname" class="form-label text-white">firstname</label>
              <input type="text" class="form-control" id="firstname" v-model="firstname" />
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label text-white">lastname</label>
              <input type="text" class="form-control" id="lastname" v-model="lastname" />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label text-white">phone</label>
              <input type="text" class="form-control" id="phone" v-model="phone" />
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
      firstname: null,
      lastname: null,
      phone: null,
      path: null,
    }
  },
  mounted() {
    let id = this.$route.params.id;
    let self = this;
    console.log(id); 
    axios.get(`/api/edit/${id}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            self.firstname = response.data.firstname;
            self.lastname = response.data.lastname;
            self.phone = response.data.phone;
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
      formData.append("firstname",this.firstname)
      formData.append("lastname",this.lastname)
      formData.append("phone",this.phone)
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

