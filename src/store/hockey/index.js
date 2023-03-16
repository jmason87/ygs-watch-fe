import axios from 'axios'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: []
    },

    getters: {
        playerList: state => state.playerList
    },

    mutations: {
        setPlayerList(state, players) {
            Vue.set(state, 'playerList', players)
        }
    },

    actions: {
        fetchPlayers({ commit }) {
            axios.get('http://127.0.0.1:8000/api/players')
                .then(res => {
                    const { data } = res.data
                    commit('setPlayerList', data)
                })
        },
    }
}