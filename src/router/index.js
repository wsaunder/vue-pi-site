import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
]

const router = new VueRouter({
  routes
})

export default router
