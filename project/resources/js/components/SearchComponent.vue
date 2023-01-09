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
                <th scope="col" class="col">updata</th>
                <th scope="col" class="col">delete</th> 
              </tr>
            </thead>
            <tbody  v-for="item in items">
              <tr class="row">
                <th scope="row" class="col align-self-center py-4">{{ item.id }}</th>  
                <td class="col align-self-center py-4">{{ item.firstname }}</td>
                <td class="col align-self-center py-4">{{ item.lastname }}</td>
                <td class="col align-self-center py-4">{{ item.phone }}</td>
                <td class="col mt-1"><router-link :to="`/edit/${item.id}`"><button class="btn btn-primary btn-sm" ><img src="/img/update.png" width="40"></button></router-link></td>
                <td class="col mt-1"><router-link to="/"><button class="btn btn-danger btn-sm" @click="DeleteUser(item.id)"><img src="/img/delete.png" width="40"></button></router-link></td>
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

        let id = this.$route.params.id;
        let self = this;

        axios.get(`/api/Search/${id}`)
        .then(function (response) {
            // handle success
            // console.log(response.data);
            self.items = response.data;
            console.log(self.items);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        this.send();
      
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
      .finally(function () {
        // always executed
      });
  
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
      .finally(function () {
        // always executed
      });
      },
      send(){
        this.$emit("my",this.message)
      }
    },
   }
</script>