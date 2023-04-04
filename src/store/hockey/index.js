import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
        setList: [],
        set: {},
        player: {},
    },

    getters: {
        player: state => state.player,
        set: state => state.set,
        allPlayers: state => state.playerList,
        allSets: state => state.setList,
    },

    mutations: {
        setPlayerList(state, players) {
            Vue.set(state, 'playerList', players)
        },
        storePlayer(state, player) {
            state.playerList.push(player)
        },
        setSetList(state, sets) {
            Vue.set(state, 'setList', sets)
        },
        storeSet(state, set) {
            state.setList.push(set)
        },
        setSet(state, data) {
            const set = { ...data }
            Vue.set(state, 'set', set)
        },

    },

    actions: {
        setPlayerList({ commit }, params = {}) {
            return hockeyApi
                .getPlayers(params)
                .then(res => {
                    commit('setPlayerList', res.data)
                })
        },
        storePlayer({ commit }, payload) {
            return hockeyApi
                .storePlayers(payload)
                .then(res => {
                    commit('storePlayer', res.data)
                })
        },
        setSetList({ commit }) {
            return hockeyApi
                .getSets()
                .then(res => {
                    commit('setSetList', res.data)
                })
        },
        storeSet({ commit }, setPayload) {
            return hockeyApi
                .storeSet(setPayload)
                .then(res => {
                    commit('storeSet', res.data)
                })
        },
        getSet({ commit }, uuid) {
            return hockeyApi
                .getSet(uuid)
                .then(res => {
                    commit('setSet', res.data)
                })
        },
        initializePlayers({ dispatch }, params = {}) {
            dispatch('setPlayerList', params)
        },
        initializeSets({ dispatch }) {
            dispatch('setSetList')
        },
    }
}