<template>
    <div>
        <h1>Test</h1>
        <div>
            <div v-for="player in playerList" :key="player.id">
                {{ player.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Hockey", 
    computed: {
        ...mapGetters('hockey', ['playerList'])
    },
    created() {
        this.fetchPlayers()
    },
    methods: {
        ...mapActions('hockey', ['fetchPlayers'])
    }
}
</script>