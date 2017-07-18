<script>
  import oiHeader from '@/module/header/Main.vue'
  // import { mapState, mapActions } from 'vuex'
  // import store from './vuexStore'

  export default {
    name: 'App',
    components: { oiHeader }
    // data () {
    //   return {
    //   }
    // },
    // store,
    // computed: {
    //   ...mapState({
    //     counter: state => state.counter.counter
    //   }),
    //   /*
    //   counter () {
    //     return this.$store.state.counter.counter
    //   }
    //   */
    //   counterX2 () {
    //     return this.$store.getters.counterX2
    //   },
    //   nameEmail () {
    //     return this.$store.getters.nameEmail
    //   }
    // },
    // methods: {
    //   mudarDados () {
    //     // const payload = { counter: 500 }
    //     // this.$store.commit('CHANGE_COUNTER', 500)
    //     // this.$store.commit('changeCounterMutation', 55)
    //     // this.$store.dispatch('changeCounterAction', 11)
    //     this.changeCounterAction(2)
    //   },
    //   ...mapActions(['changeCounterAction'])
    // }
  }
</script>

<template>
  <div id="app">
    <oiHeader/> 
    <router-view/>
  </div>
</template>

<style src="@/asset/sass/app.scss" lang="sass">
</style>
