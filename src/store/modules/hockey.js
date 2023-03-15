import axios from 'axios'

  const state = {
    players: []
  }
  
  const getters = {
    allPlayers: (state) => state.players
  }

    const mutations = {
        setPlayers: (state, players) => (state.players = players)
  }

   const actions = {
    async fetchPlayers({ commit }) {
        const response = await axios.get('http://127.0.0.1:8000/api/players')
        commit('setPlayers', response.data)
    }
  }

  export default {
    state,
    getters,
    mutations,
    actions
  }