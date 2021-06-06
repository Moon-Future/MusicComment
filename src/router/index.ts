import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Hot from '@/views/hot.vue'
// import Music from '@/views/music.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Hot',
        component: () => import('@/views/hot.vue'),
      }
    ]
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('@/views/music.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router