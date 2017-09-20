<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'DevManufSelectionOfQueue',

    components: { oiSelection },

    props: {
      isShowButtonselectedOfQueue: {type: Boolean}
    },

    computed: {
      ...mapState('devManuf', ['dataOfQueue', 'selectedOfQueue'])
    },

    methods: {
      ...mapActions('devManuf', ['loadOfQueue', 'setSelectedOfQueue']),

      confirm (selected) {
        this.setSelectedOfQueue(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadOfQueue()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Fáb. Desenv. (agente)"
      :data="dataOfQueue"
      :selected="selectedOfQueue"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
