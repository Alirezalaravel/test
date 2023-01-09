<template>
  <div class="background">
    <div class="pt-5 pb-3 h p p-form">
      <div class="p">
        <div class="form">
          <h1 class="text-white text-center"> Create User </h1>
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
          <router-link to="/"><button type="submit" class="btn btn-primary form-control" @click="Create">Submit</button></router-link>
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
      image: null,
    }
  }, 
  methods: {
    Create () { 

      let self = this;
      const formData = new FormData();
      formData.append("img",this.image)
      formData.append("firstname",this.firstname)
      formData.append("lastname",this.lastname)
      formData.append("phone",this.phone)
      const headers = { 'Content-Type': 'multipart/form-data' };
      axios.post('/api/store',formData,{headers})
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
    },
  }
}
</script>
