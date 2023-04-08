import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
        setList: [],
        seasonList: [],
        teamList: [],
        player: {},
        set: {},
        season: {},
        team: {},
    },

    getters: {
        allPlayers: state => state.playerList,
        allSets: state => state.setList,
        allSeasons: state => state.seasonList,
        allTeams: state => state.teamList,
        player: state => state.player,
        set: state => state.set,
        season: state => state.season,
        team: state => state.team,
    },

    mutations: {
        // Player mutations
        setPlayerList(state, players) {
            Vue.set(state, 'playerList', players)
        },
        setPlayer(state, player) {
            Vue.set(state, 'player', player)
        },
        storePlayer(state, player) {
            state.playerList.push(player)
        },

        // Set mutations
        setSetList(state, sets) {
            Vue.set(state, 'setList', sets)
        },
        setSet(state, data) {
            const set = { ...data }
            Vue.set(state, 'set', set)
        },
        storeSet(state, set) {
            state.setList.push(set)
        },

        // Season mutation
        setSeasonList(state, seasons) {
            Vue.set(state, 'seasonList', seasons)
        },
        setSeason(state, season) {
            Vue.set(state, 'season', season)
        },
        storeSeason(state, season) {
            state.seasonList.push(season)
        },

        // Team mutations
        setTeamList(state, teams) {
            Vue.set(state, 'teamList', teams)
        },
        setTeam(state, team) {
            Vue.set(state, 'team', team)
        },
        storeTeam(state, team) {
            state.teamList.push(team)
        },
    },

    actions: {
        // Player actions
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
        initializePlayers({ dispatch }, params = {}) {
            dispatch('setPlayerList', params)
        },

        // Set actions
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
        clearSet({ commit }) {
            commit('setSet', {
                name: '',
                year: '',
            })
        },
        initializeSets({ dispatch }) {
            dispatch('setSetList')
        },

        // Season actions
        setSeasonList({ commit }) {
            return hockeyApi
                .getSeasons()
                .then(res => {
                    commit('setSeasonList', res.data)
                })
        },
        storeSeason({ commit }, seasonPayload ) {
            return hockeyApi
                .storeSeason(seasonPayload)
                .then(res => {
                    commit('storeSeason', res.data)
                })
        },
        clearSeason({ commit }) {
            commit('setSeason', {
                year: '',
                player_uuid: '',
                team_uuid: '',
                points: '',
                goals: '',
                assists: '',
            })
        },
        initializeSeasons({ dispatch }) {
            dispatch('setSeasonList')
        },

        // Team actions
        setTeamList({ commit }) {
            return hockeyApi
                .getTeams()
                .then(res => {
                    commit('setTeamList', res.data)
                })
        },
        storeTeam({ commit }, teamPayload) {
            return hockeyApi
                .storeTeam(teamPayload)
                .then(res => {
                    commit('storeTeam', res.data)
                })
        },
        clearTeam({ commit }) {
            commit('setTeam', {
                team_name: ''
            })
        },
        initializeTeams({ dispatch }) {
            dispatch('setTeamList')
        },
    }
}