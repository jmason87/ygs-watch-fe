<template>
    <div>
        <h1>Seasons</h1>
        <div>
            <div>
                <label>Select Player </label>
                <select v-model="season.player_uuid" name="seasons" id="seasons">
                    <option v-for="player in allPlayers" :key="player.uuid" :value="player.uuid">
                        {{player.name}}
                    </option>
                </select>
            </div>
            <div>
                <label>Select Team </label>
                <select v-model="season.team_uuid" name="seasons" id="seasons">
                    <option v-for="team in allTeams" :key="team.uuid" :value="team.uuid">
                        {{team.team_name}}
                    </option>
                </select>
            </div>
            <div>
                <label>Year </label>
                <input v-model="season.year"/>
            </div>
            <div>
                <label>Games played </label>
                <input v-model="season.games_played"/>
            </div>
            <div>
                <label>Points </label>
                <input v-model="season.points"/>
            </div>
            <div>
                <label>Goals </label>
                <input v-model="season.goals"/>
            </div>
            <div>
                <label>Assists </label>
                <input v-model="season.assists"/>
            </div>
            <button @click="submit">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    computed: {
        ...mapGetters('hockey', [
            'season', 
            'team', 
            'allPlayers', 
            'allTeams'
        ]),
    },
    created() {
        this.initializeTeams()
        this.initializePlayers()
    },
    methods: {
        ...mapActions('hockey', [
            'storeSeason', 
            'initializePlayers', 
            'initializeTeams', 
            'clearSeason'
        ]),
        submit() {
            this.storeSeason(this.season).then(this.clearSeason())
        }
    }
}
</script>