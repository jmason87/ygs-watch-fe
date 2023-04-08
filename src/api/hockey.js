import axios from 'axios'


export default {
    // Players API
    getPlayers(params = {}) {
        return axios.get('http://127.0.0.1:8000/api/players', { params })
    },
    storePlayers(payload) {
        return axios.post('http://127.0.0.1:8000/api/players', payload)
    },

    // Sets API
    getSets() {
        return axios.get('http://127.0.0.1:8000/api/sets')
    },
    getSet(uuid) {
        return axios.get(`http://127.0.0.1:8000/api/sets/${uuid}`)
    },
    storeSet(payload) {
        return axios.post('http://127.0.0.1:8000/api/sets', payload)
    },

    // Season API
    getSeasons() {
        return axios.get('http://127.0.0.1:8000/api/seasons')
    },
    storeSeason(payload) {
        return axios.post('http://127.0.0.1:8000/api/seasons', payload)
    },
    // Team API
    getTeams() {
        return axios.get('http://127.0.0.1:8000/api/teams')
    },
    storeTeam(payload) {
        return axios.post('http://127.0.0.1:8000/api/teams', payload)
    },
}


