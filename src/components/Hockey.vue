<template>
    <div>
        <h1>Test</h1>
        <div>
            <div v-for="player in allPlayers" :key="player.id">
                {{ player.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('hockey', ['allPlayers'])
    },
    created() {
        this.initializePlayers()
    },
    methods: {
        ...mapActions('hockey', ['initializePlayers'])
    }
}
</script>
