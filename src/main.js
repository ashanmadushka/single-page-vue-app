import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import UserList from './components/UserList.vue'
import UserAdd from './components/AddUser.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

var routes =  [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: UserList
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: UserAdd
    },
    {
      path: '/link-equipment',
      name: 'link-equipment',
      component: UserList
    }
  ]

// Initialize vue router
const router = new VueRouter({
  routes: routes // Set up routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount('#app')
