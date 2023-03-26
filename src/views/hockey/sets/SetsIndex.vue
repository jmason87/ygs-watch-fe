<template>
    <div>
        <YearSelection></YearSelection>
    </div>
</template>
<script>
import YearSelection from '@/components/hockey/sets/YearSelection.vue'

export default {
  name: 'SetsView',
  components: {
   YearSelection
  }
}
</script>