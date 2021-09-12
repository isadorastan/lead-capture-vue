import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lead from '../components/LeadContactForm';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/frontstart',
    name: 'Frontstart',
    component: Lead
  }
]

const router = new VueRouter({
  routes
})

export default router
