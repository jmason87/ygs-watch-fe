<template>
    <div>
        <div v-for="set in allSets" :key="set.uuid">
          <div v-if="set.year === year">
            <button @click="toggleComponent(set)">{{set.name}}</button>
          </div>
        </div>
        <div v-if="series1">
          <Players></Players>
        </div>
        <div v-if="series2">
          <Players></Players>
        </div>
        <div v-if="extended">
          <Players></Players>
        </div>
    </div>
</template> 
<script>
import Players from '@/components/hockey/players/Players.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PlayerView',
  components: {
    Players,
  },
  computed: {
    ...mapGetters('hockey', ['allSets']),
    year() {
      return this.$route.params.year
    }
  },
  data() {
    return {
      series1: false,
      series2: false,
      extended: false
    }
  },
  created() {
    this.initializeSets()
    console.log(this.allSets)
  },
  methods: {
    ...mapActions('hockey', ['initializeSets']),
    toggleComponent(set) {
      if (set.name === 'Upper Deck Series 1') {
        this.series1 = !this.series1;
        this.series2 = false
        this.extended = false
      } else if (set.name === 'Upper Deck Series 2') {
        this.series2 = !this.series2;
        this.series1 = false
        this.extended = false
      } else if (set.name === 'Upper Deck Extended') {
        this.extended = !this.extended;
        this.series1 = false
        this.series2 = false
      }
    }
  }

}
</script>