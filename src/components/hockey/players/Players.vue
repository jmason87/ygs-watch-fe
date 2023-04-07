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
    props: {
        uuid: {
            type: String,
            required: true,
        }
    },
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
                games_played: player.season.reduce(function (acc, obj) { return acc + obj.games_played}, 0),
                team: player.season.at(0).team.team_name,
                goals: player.season.reduce(function (acc, obj) { return acc + obj.goals}, 0),
                assists: player.season.reduce(function (acc, obj) { return acc + obj.assists}, 0),
                points: player.season.reduce(function (acc, obj) { return acc + obj.points}, 0),
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
        this.initializePlayers({set_uuid: this.uuid})
    },
    methods: {
        ...mapActions('hockey', ['initializePlayers']),
    }
}
</script>
