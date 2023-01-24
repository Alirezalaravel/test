<template>
  <div class="background">
    <div class="pt-4 pb-3 h p p-form">
      <div class="">
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
            <input type="number" class="form-control" id="phone" v-model="phone" />
          </div>
          <div class="mb-3">
            <img src="/img/image.png" width="10%" alt="image">
            <input type="file" @change="uploadFile" ref="file">
          </div>
          <button type="submit" class="btn btn-primary form-control" @click="Create">Submit</button>
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
      firstname: null,
      lastname: null,
      phone: null,
      image: null,
      errors: [],
    }
  }, 
  methods: {
    Create () {

      this.errors = [];
      let phone = this.phone;
      if (this.firstname && this.lastname && this.phone && phone.length == 11) {      
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
            self.$router.push("/");
          })
          .catch(function (error) {
            console.log(error);  
          });   
      }else{
        if (!this.firstname) {
          this.errors.push("firstname required.");
        }
        
        if (!this.lastname) {
          this.errors.push("lastname required.");
        }
        
        let phone = this.phone;
        if (!this.phone) {
          this.errors.push("phone required.");  
        }
        else if(phone.length > 11 || phone.length < 11){
          this.errors.push("The phone number must be 12 digits.");
        }
      }

    },
    uploadFile(e) {
        this.image = e.target.files[0];
        console.log(this.image);
    },
  }
}
</script>
