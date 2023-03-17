import axios from 'axios'

export default {
    getPlayers() {
        return axios.get('http://127.0.0.1:8000/api/players')
    }
}