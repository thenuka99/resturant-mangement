import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/employeelist',
    name: 'EmployeeList',
    component: () => import('../components/EmployeeList.vue')
  },
  {
    path: '/resturantlist',
    name: 'ResturantList',
    component: () => import( '../components/NewEmployeeList.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
