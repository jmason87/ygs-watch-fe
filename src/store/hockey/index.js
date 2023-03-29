import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
        setList: [],
        set: {},
    },

    getters: {
        set: state => state.set,
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
        storeSet(state, set) {
            state.setList.push(set)
        },
        setSet(state, data) {
            const set = { ...data }
            console.log(set)
            Vue.set(state, 'set', set)
        },
    },

    actions: {
        setPlayerList({ commit }, uuid) {
            return hockeyApi
                .getFilteredPlayers(uuid)
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
        initializePlayers({ dispatch }) {
            dispatch('setPlayerList')
        },
        initializeSets({ dispatch }) {
            dispatch('setSetList')
        },
    }
}