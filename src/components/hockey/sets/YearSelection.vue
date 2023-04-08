<template>
    <div>
        <div v-for="year in setInfo.years" :key="year.id">
            <router-link :to="{name: 'sets', params: {year: year}}">
            <button class="btn btn-primary">{{year}}</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { setInfo } from '@/components/hockey/sets/constants.js'

export default {
    data(){
        return {
            setInfo,
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