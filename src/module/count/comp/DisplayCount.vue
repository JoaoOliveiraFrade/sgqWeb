<script>
  // import { getCount } from '@/module/count/vuexModule'
  // import { getCount } from 'vuex'
  // import { getCount } from '@/module/count/vuexModule/getters'
  import { mapGetters } from 'vuex'

  export default {
    name: 'DisplayCount',

    computed: {
      ...mapGetters(['getCount'])
      // count: function () {
      //   return this.$store.state.count
      // }
    }
    /*
    vuex: {
      getters: {
        getCount
      }
    },
    */
  }
</script>

<template>
  <span>
  <h1>Contador é {{getCount}}</h1>
  </span>
</template>

<style scoped>
</style>
