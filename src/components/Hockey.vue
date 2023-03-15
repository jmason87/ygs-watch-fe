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
    name: "Hockey", 
    computed: {
        ...mapGetters(['allPlayers'])
    },
    created() {
        this.fetchPlayers()
    },
    methods: {
        ...mapActions(['fetchPlayers'])
    }
}
</script>