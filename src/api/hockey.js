import axios from 'axios'


export default {
    // Players API
    getPlayers() {
        return axios.get('http://127.0.0.1:8000/api/players')
    },

    // Sets API
    getSets() {
        return axios.get('http://127.0.0.1:8000/api/sets')
    },
}


