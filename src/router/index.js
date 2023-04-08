import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // Sets Routes
  {
    path: '/hockey/sets/year',
    name: 'setsIndex',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/sets/Year.vue'),
    params: true
  }, 
  { 
    path: '/hockey/sets/addSets',
    name: 'addSet',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/sets/AddSet.vue')
  },
  {
    path: '/hockey/sets/year/:year',
    name: 'sets',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/sets/SetPlayers.vue'),
    params: true
  },
  
  // Player Routes
  { 
    path: '/hockey/players/addPlayers',
    name: 'addPlayer',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/players/AddPlayer.vue')
  },

  // Season Routed

  { 
    path: '/hockey/season/addSeasons',
    name: 'addSeason',
    component: () => import(/* webpackChunkName: "about" */'../views/hockey/seasons/AddSeason.vue')
  },

  // Misc Routes
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
