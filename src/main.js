import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue';
import About from './components/About.vue';
import login from './components/login.vue';
import signUp from './components/signUp.vue';
import Add from './components/Add.vue';
import update from './components/update.vue';
Vue.use(VueRouter);
const routes = [
  { path: '/', component: home },
  {
    path:'/about',component:About
  },
  {
    path:'/login',component:login
  },
  {
    path:'/signup',component:signUp
  },
   {
    path:'/add',component:Add
  },
    {
    path:'/update/:id',component:update
  },

]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
