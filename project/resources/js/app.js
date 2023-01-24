
require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/HeaderComponent.vue').default);
  
import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    { 
        path: "/register" , 
        component: require('./components/auth/registerComponent.vue').default
    },
    { 
        path: "/login" , 
        component: require('./components/auth/loginComponent.vue').default , 
        name: 'login'
    },

    { 
        path: "/header" , 
        component: require('./components/HeaderComponent.vue').default , 
    },
    // // ---------------------------------------------------------------------------------

    { 
        path: "/data" , 
        component: require('./components/auth/dataComponent.vue').default , 
        meta: {requireAuth: true} 
    },


    
    { 
        path: "/" , 
        component: require('./components/indexComponent.vue').default , 
        meta: {requireAuth: true} 
    },
    { 
        path: "/create" , 
        component: require('./components/CreateComponent.vue').default , 
        meta: {requireAuth: true}  
    },
    { 
        path: "/edit/:id" , 
        component: require('./components/editComponent.vue').default , 
        meta: {requireAuth: true} 
    },
    { 
        path: "/Search/:id" ,
         component: require('./components/SearchComponent.vue').default , 
         meta: {requireAuth: true} 
    },
    { 
        path: "/profile" ,
         component: require('./components/profileComponent.vue').default , 
         meta: {requireAuth: true} 
    },
    { 
        path: "/profileEdit" ,
         component: require('./components/profileEditComponent.vue').default , 
         meta: {requireAuth: true} 
    },
]

const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");
   
    if (token) return true;
    return false;
} 

const router = new VueRouter({
    routes: routes,
    mode: "history"
})

console.log(isUserLoggedIn());
 
router.beforeEach((to , from, next) => {
//   console.log(to.path);

    if (to.meta.requireAuth) {
        if (isUserLoggedIn()){
            next();
        }
        else{
            next("/login");
        }
    }

    if (!to.meta.requireAuth) {
        if (!isUserLoggedIn()){
            next();
        }
        else{
            next("/");
        }
    }

})

const app = new Vue({
    el: '#app',
    router
}); 
