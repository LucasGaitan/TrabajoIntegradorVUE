import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Usuarios from '../views/Usuarios.vue'
import Posts from '../views/Posts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: Posts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
