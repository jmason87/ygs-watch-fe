import Vue from 'vue'
import Vuex from 'vuex'
import hockey from './hockey'

Vue.use(Vuex)

export const modules = {
  hockey,
}

export const store = new Vuex.Store({
  modules
})
