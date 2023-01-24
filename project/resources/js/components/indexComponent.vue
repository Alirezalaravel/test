<template>
  <div class="h background-table">
    <div class="p-table pt-5 pb-3 background-table ">
      <div class="p background-r pt-5">
        <table class="table text-center">
          <thead class="thead-dark">
            <tr class="row thead">
              <th scope="col" class="col">#</th> 
              <th scope="col" class="col">firstname</th>
              <th scope="col" class="col">lastname</th>
              <th scope="col" class="col">phone</th>
              <th scope="col" class="col">image</th>
              <th scope="col" class="col">updata</th>
              <th scope="col" class="col">delete</th> 
            </tr>
          </thead>
          <tbody v-for="item in items">
            <tr class="row">
              <th scope="row" class="col align-self-center ">{{ item.id }}</th>  
              <td class="col align-self-center">{{ item.firstname }}</td>
              <td class="col align-self-center">{{ item.lastname }}</td>
              <td class="col align-self-center">{{ item.phone }}</td>
              <td class="col align-self-center"><img :src="`./image/${item.path}`" width="80" class="rounded-circle" alt="profile"></td>
              <td class="col align-self-center"><router-link :to="`/edit/${item.id}`"><button class="btn btn-primary btn-sm" ><img src="/img/update.png" width="40"></button></router-link></td>
              <td class="col align-self-center"><router-link to="/"><button class="btn btn-danger btn-sm" @click="DeleteUser(item.id)"><img src="/img/delete.png" width="40"></button></router-link></td>
            </tr>
          </tbody>
          </table>
      </div>
   </div>
  </div>
</template>

<script>
 export default {
  data() {
    return {
      items: null,
    }
  },
  mounted() {
    
    let self = this;
    axios.get('/api/data')
    .then(function (response) {
      console.log(response.data);
      self.items = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    this.send(); // ! ---------------------------
  },
  methods: {
    DeleteUser(event){
      axios.delete(`/api/delete/${event}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    let self = this;
    axios.get('/api/data')
    .then(function (response) {
      // handle success
      console.log(response.data);
      self.items = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    },
    send(){ // ! ---------------------------
      this.$emit("my",this.message) // ! ---------------------------
    } // ! ---------------------------
  },
 }
</script>

<style>
  tbody .row>* {
    border-bottom-width: 0 !important;
  }
  tbody .row {
    padding: 7px;
    border-bottom-width: 1px !important;
    border-bottom-color: black
  }
</style>