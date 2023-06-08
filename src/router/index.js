import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import JobDetails from '../views/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'music',
      component: ()=> import('../views/MusicaView.vue')
    },
    {
      path: '/popular',
      name: 'popular',
      component: ()=> import('../views/PopularMusica.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:"/jobs",
      name:'jobs',
      component: () => import('../views/JobsView.vue')
    },
    {
      path:'/jobs/:id',
      name:'jobdetails',
      component:JobDetails,
      props:true
    },
    {
      path:'/users',
      name:'userdetails',
      component: () => import('../views/UseView.vue')
    },
    {
      path:'/music',
      name:'MusicaView',
      component: () => import('../views/MusicaView.vue')
    },
    {
      path:'/home',
      redirect:'/'
    },
    {
      path:'/:catchAll(.*)',
      component:NotFound
    }
  ]
})

export default router
