<template>
    <div>
        <h1>Sets</h1>
        <router-link to="./sets/add">
        <button class="btn btn-primary">Add Sets</button>
        </router-link>
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
        ...mapGetters('hockey', ['allSets', 'set']),
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