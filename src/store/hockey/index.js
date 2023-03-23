import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
        setList: [],
    },

    getters: {
        allPlayers: state => state.playerList,
        allSets: state => state.setList,
    },

    mutations: {
        setPlayerList(state, players) {
            Vue.set(state, 'playerList', players)
        },
        setSetList(state, sets) {
            Vue.set(state, 'setList', sets)
        },
    },

    actions: {
        setPlayerList({ commit }) {
            return hockeyApi
                .getPlayers()
                .then(res => {
                    commit('setPlayerList', res.data)
                })
        },
        setSetList({ commit }) {
            return hockeyApi
                .getSets()
                .then(res => {
                    commit('setSetList', res.data)
                })
        },
        initializePlayers({ dispatch }) {
            dispatch('setPlayerList')
        },
        initializeSets({ dispatch }) {
            dispatch('setSetList')
        },
    }
}