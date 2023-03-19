<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('hockey', ['allPlayers']),
        rows() {
            return this.allPlayers.map(player => ({
                name: player.name,
                position: player.position,
                age: player.age,
                birthdate: player.birthdate,
                year_drafted: player.year_drafted,
                round: player.round,
                pick: player.pick
            }))
        },
        columns() {
            return [
                {
                label: 'Name',
                field: 'name',
                },
                {
                label: 'Position',
                field: 'position',
                },
                {
                label: 'Age',
                field: 'age',
                },
                {
                label: 'Birthdate',
                field: 'birthdate',
                },
                {
                label: 'Year Drafted',
                field: 'year_drafted',
                },
                {
                label: 'Round',
                field: 'round',
                },
                {
                label: 'Pick',
                field: 'pick',
                }
            ]
        }
    },
    created() {
        this.initializePlayers()
    },
    methods: {
        ...mapActions('hockey', ['initializePlayers'])
    }
}
</script>
