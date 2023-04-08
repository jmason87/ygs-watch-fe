<template>
    <div>
        <div>
            <input v-model="set.name"/> Name
            <input v-model="set.year"/> Year
            <button @click="submit">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    computed: {
        ...mapGetters('hockey', ['set']),
    },
    methods: {
        ...mapActions('hockey', ['storeSet', 'clearSet']),
        submit() {
            this.storeSet(this.set).then(this.clearSet())
        }
    }
}
</script>