import hockeyApi from "../../api/hockey"
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        playerList: [],
        setList: [],
        seasonList: [],
        teamList: [],
        set: {},
        player: {},
        team: {},
        season: {}
    },

    getters: {
        player: state => state.player,
        set: state => state.set,
        team: state => state.team,
        season: state => state.season,
        allPlayers: state => state.playerList,
        allSets: state => state.setList,
        allSeasons: state => state.seasonList,
        allTeams: state => state.teamList,
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
        },
        setTeamList(state, teams) {
            Vue.set(state, 'teamList', teams)
        },
        setTeam(state, team) {
            Vue.set(state, 'team', team)
        },
        storeTeam(state, team) {
            state.teamList.push(team)
        },
        setSeason(state, season) {
            Vue.set(state, 'season', season)
        },
        storeSeason(state, season) {
            state.seasonList.push(season)
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
        storeSeason({ commit }, seasonPayload ) {
            return hockeyApi
                .storeSeason(seasonPayload)
                .then(res => {
                    commit('storeSeason', res.data)
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
        initializeTeams({ dispatch }) {
            dispatch('setTeamList')
        },
    }
}