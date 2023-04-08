<template>
    <div>
        <div>
            <input v-model="team.team_name"/> Name
            <button @click="submit">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    computed: {
        ...mapGetters('hockey', ['team']),
    },
    methods: {
        ...mapActions('hockey', ['storeTeam', 'clearTeam']),
        submit() {
            this.storeTeam(this.team).then(this.clearTeam())
        }
    }
}
</script>