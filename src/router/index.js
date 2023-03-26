import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hockey',
    name: 'hockey',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/players/PlayerIndex.vue')
  },
  {
    path: '/hockey/players',
    name: 'hockey',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/players/PlayerIndex.vue')
  },
  {
    path: '/hockey/sets',
    name: 'setsIndex',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/sets/SetsIndex.vue'),
    params: true
  },
  {
    path: '/hockey/sets/:year',
    name: 'sets',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/players/PlayerIndex.vue'),
    params: true
  },
  { 
    path: '/hockey/sets/add',
    name: 'addSet',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/sets/AddSet.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */'../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
