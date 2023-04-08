import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
        setList: [],
        seasonList: [],
        set: {},
        player: {},
    },

    getters: {
        player: state => state.player,
        set: state => state.set,
        allPlayers: state => state.playerList,
        allSets: state => state.setList,
        allSeasons: state => state.seasonList,
    },

    mutations: {
        setPlayerList(state, players) {
            Vue.set(state, 'playerList', players)
        },
        storePlayer(state, player) {
            state.playerList.push(player)
        },
        setPlayer(state, player) {
            Vue.set(state, 'player', player)
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
        setSeasonList(state, seasons) {
            Vue.set(state, 'seasonList', seasons)
        }

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
        clearPlayer({ commit }) {
            commit('setPlayer', {
                name: '',
                position: '',
                age: '',
                birthdate: '',
                year_drafted: '',
                round: '',
                pick: '',
                set_uuid: ''
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
        setSeasonList({ commit }) {
            return hockeyApi
                .getSeasons()
                .then(res => {
                    commit('setSeasonList', res.data)
                })
        },
        initializePlayers({ dispatch }, params = {}) {
            dispatch('setPlayerList', params)
        },
        initializeSets({ dispatch }) {
            dispatch('setSetList')
        },
        initializeSeasons({ dispatch }) {
            dispatch('setSeasonList')
        },
    }
}