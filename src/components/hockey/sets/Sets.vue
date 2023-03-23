<template>
    <div>
        <h1>Sets</h1>
        <button class="btn btn-primary">Add Set</button>
        <vue-good-table
            :columns="columns"
            :rows   ="rows">
        </vue-good-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('hockey', ['allSets']),
        columns() {
            return [
                {
                label: 'Name',
                field: 'name',
                },
            ]
        },
        rows() {
            return this.allSets.map(set => ({
                name: set.name,
            }))
        },
    },
    created() {
        this.initializeSets()
    },
    methods: {
        ...mapActions('hockey', ['initializeSets']),
    }

}
</script>