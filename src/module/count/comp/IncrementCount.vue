<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'IncrementCount',

    computed: {
    },

    methods: {
      ...mapActions(['incrementCount', 'decrementCount'])
    }
  }
</script>

<template>
  <span>
    <button @click="incrementCount">+1</button>
    <button @click="decrementCount">-1</button>
  </span>
</template>

<style scoped>
</style>
