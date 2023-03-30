<template>
    <div>
        <div v-for="set in allSets" :key="set.uuid">
          <div v-if="set.year === year">
            <button @click="toggleComponent(set.uuid)">{{set.name}}</button>
          </div>
        </div>
        <div v-if="showComponent">
          <Players :uuid="setUuid"></Players>
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
      showComponent: false,
      setUuid: '',
    }
  },
  created() {
    this.initializeSets()
  },
  methods: {
    ...mapActions('hockey', ['initializeSets']),
    toggleComponent(uuid) {
      this.showComponent = !this.showComponent
      this.setUuid = uuid
    }
  }

}
</script>