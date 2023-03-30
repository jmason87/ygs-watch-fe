<template>
    <div>
        <div v-for="year in years" :key="year.id">
            <router-link :to="{name: 'sets', params: {year: year}}">
            <button class="btn btn-primary">{{year}}</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            years: ['2019', '2020','2021','2022'],
        }
    },
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