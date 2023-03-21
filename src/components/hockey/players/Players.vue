<template>
  <div>
    <vue-good-table
        :columns="columns"
        :rows="rows"
        :group-options="{
            enabled: true,
            collapsable: true,
        }">
    </vue-good-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('hockey', ['allPlayers']),
        columns() {
            return [
                {
                label: 'Name',
                field: 'name',
                },
                {
                label: 'Year',
                field: 'year',
                },
                {
                label: 'Team',
                field: 'team',
                },
                {
                label: 'Games Played',
                field: 'games_played',
                },
                {
                label: 'Goals',
                field: 'goals',
                },
                {
                label: 'Assists',
                field: 'assists',
                },
                {
                label: 'Points',
                field: 'points',
                },
            ]
        },
        rows() {
            return this.allPlayers.map(player => ({
                name: player.name,
                games_played: 100,
                team: 'Current Team',
                goals: 10,
                assists: 50,
                points: 60,
                children: player.season.map(seas => ({
                    year: seas.year,
                    games_played: seas.games_played,
                    team: seas.team.team_name,
                    goals: seas.goals,
                    assists: seas.assists,
                    points: seas.points,
                }))
            }))
        },
    },
    created() {
        this.initializePlayers()
    },
    methods: {
        ...mapActions('hockey', ['initializePlayers']),
    }
}
</script>
