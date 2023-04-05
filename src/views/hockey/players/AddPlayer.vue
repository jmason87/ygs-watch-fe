<template>
    <div>
        <h1>Players</h1>
        <div>
            <input v-model="player.name"/> Name
            <input v-model="player.position"/> Position
            <input v-model="player.age"/> Age
            <input v-model="player.birthdate"/> Birthdate
            <input v-model="player.year_drafted"/> Year Drafted
            <input v-model="player.round"/> Round
            <input v-model="player.pick"/> Pick
            <div>
                <select v-model="player.set_uuid" name="sets" id="sets">
                    <option v-for="set in allSets" :key="set.uuid" :value="set.uuid">
                        {{set.year}} {{set.name}}
                    </option>
                </select>
            </div>
            <button @click="submit">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    computed: {
        ...mapGetters('hockey', ['player', 'allSets']),
    },
    created() {
        this.initializeSets()
    },
    methods: {
        ...mapActions('hockey', ['storePlayer', 'initializeSets', 'clearPlayer']),
        submit() {
            this.storePlayer(this.player).then(this.clearPlayer())
        }
    }
}
</script>