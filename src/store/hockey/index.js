import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
    },

    getters: {
        allPlayers: state => state.playerList,
    },

    mutations: {
        setPlayerList(state, players) {
            Vue.set(state, 'playerList', players)
        }
    },

    actions: {
        setPlayerList({ commit }) {
            return hockeyApi
                .getPlayers()
                .then(res => {
                    commit('setPlayerList', res.data)
                })
        },
        initializePlayers({ dispatch }) {
            dispatch('setPlayerList')
        },
    }
}