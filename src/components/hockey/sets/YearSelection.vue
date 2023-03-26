<template>
    <div>
    <div v-for="set in allSets" :key="set.uuid">
        <router-link :to="{name: 'sets', params: {year: set.year}}">
        <button class="btn btn-primary">{{set.year}}</button>
        </router-link>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('hockey', ['allSets', 'set']),
    },
    created() {
        this.initializeSets()
    },
    methods: {
        ...mapActions('hockey', ['initializeSets']),
    }

}
</script>