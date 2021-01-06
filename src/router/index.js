import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import News from  '../components/News.vue'

import Message from '../components/Message.vue'

const My = ()=>import('../views/My.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/home/news/',
        component:News
      },
      {
        path:'/home/message/',
        component:Message
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/my',
    name:My,
    component:My
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
