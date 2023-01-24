<template class="component-one">
  <header class="p-2 border-bottom background-header">
    <div class="container">
      <div class="d-flex flex-wrap mt-2">

        <div class="flex pt-2" v-if="text" >
          <router-link :to="`/login`" class="p-3 text-decoration-none ">login</router-link>
          <router-link :to="`/register`" class="p-3 text-decoration-none">register</router-link>
        </div>

        <ul class="nav col-lg-auto me-auto align-self-center" v-if="token">
          <li>
            <router-link to="/">
              <span class="nav-link px-2 btn btn-secondary ">
                <img src="/img/home.png" width="30" alt="home">
              </span>
            </router-link>
          </li>    
        </ul>
        <!-- badge text-white span top-->
        <form class="col-auto mb-0 me-3 row align-self-center" v-if="token">
          <div class="col-auto p-0">
            <span @click="fun">
              <router-link :to="`/Search/${value}`" class="btn btn-outline-primary">
                <img src="/img/search.png" alt="search" width="30">
              </router-link>
            </span>
          </div>
          <div class="col-auto">
            <input type="search" class="form-control" placeholder="Search..." v-model="value">
          </div>
        </form>

        <div class="dropdown align-self-center text-end " v-if="token">
          <span  class="d-block link-dark dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown">
            <img :src="`image/img/${img}`" alt="mdo" width="32" height="32" class="rounded-circle text-white">
          </span>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" @click="Create" role="button">New project...</a></li>
            <li>  <a class="  dropdown-item" @click="Profile" role="button">Profile</a></li>  
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout" role="button">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      text: null,
      slug: null,
      token: localStorage.getItem('token'),
      img: null
    }
  },
  methods: {  
    fun() {return this.value = null},
    logout(){
      let self = this;
      // console.log(token);
      axios.get('/api/logout',{
        headers: {
          Authorization: self.token //the token is a variable which holds the token
        }  
      })
          .then(function (response) {
            // handle success
            localStorage.removeItem("token");
            if (!localStorage.getItem("token")) {
              self.$router.push('/login');
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(self.token);
            // handle error
            console.log(error);
        })
    },
    Profile() {
      this.$router.push('/profile');  
    },
    Create() {
      this.$router.push('/create');  
    },
    send(){ 
      this.$emit("my",this.message) 
    } 
  },
  mounted() {
    if (this.token) {
      this.text = null;
      let self = this;
      axios.get('/api/img',{
          headers: {
            Authorization: self.token //the token is a variable which holds the token
          }  
        })
            .then(function (response) {
              // handle success
              console.log(response);
              self.img = response.data
            })
            .catch(function (error) {
              // handle error
              console.log(error);
          })
    }else{
      this.text = 1;
    }
  } 
}
</script>
 