<script>
  import oiDisplayCount from './comp/DisplayCount.vue'
  import oiIncrementCount from './comp/IncrementCount.vue'

  export default {
    name: 'MainCount',

    components: { oiDisplayCount, oiIncrementCount },

    data () {
      return {
      }
    },

    methods: {
    }
  }
</script>

<template>
  <div class="container">
    <oi-display-count/>
    <oi-increment-count/>
  </div>
</template>

<style scoped>
</style>
