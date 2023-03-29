import axios from 'axios'


export default {
    // Players API
    getPlayers() {
        return axios.get('http://127.0.0.1:8000/api/players')
    },
    getFilteredPlayers(uuid) {
        return axios.get(`http://127.0.0.1:8000/api/players?set_uuid=${uuid}`)
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
    }
}


