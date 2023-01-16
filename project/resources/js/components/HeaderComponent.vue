<template class="component-one">
  <header class="p-3 border-bottom background-header">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center p-header">

        <ul class="nav col-lg-auto me-auto mb-2 justify-content-center">
          <li><router-link to="/"><span class="nav-link px-2 link-secondary badge btn btn-secondary text-white"><img src="/img/home.png" width="30" alt="home"></span></router-link></li>
        </ul>

        <form class="col-auto mb-0 me-3 row">
          <div class="col-auto align-self-center p-0">
            <span @click="fun"><router-link :to="`/Search/${value}`" class="btn btn-outline-primary"><img src="/img/search.png" alt="search" width="30"></router-link></span>
          </div>
          <div class="col-auto">
            <input type="search" class="form-control" placeholder="Search..." v-model="value">
          </div>
        </form>

        <div class="dropdown text-end">
          <span  class="d-block link-dark dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown">
            <img src="" alt="mdo" width="32" height="32" class="rounded-circle text-white">
          </span>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><router-link to="/create"><a class="dropdown-item" >New project...</a></router-link></li>
            <li><a class="  dropdown-item" @click="Profile">Profile</a></li>  
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout">Sign out</a></li>
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
      slug: null,
      token: localStorage.getItem('token')
    }
  },
  methods: {
    fun() {return this.value = null},
    logout(){
      let self = this;
        axios.get('/api/logout', 
          {
            header: {
              Authorization: 'Bearer ' + self.token
            }
          }
        )
          .then(function (response) {
            // handle success
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
    }
  },
}
</script>
 