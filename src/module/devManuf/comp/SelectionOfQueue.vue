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
      ...mapState('devManuf', ['data', 'selected'])
    },

    methods: {
      ...mapActions('devManuf', ['loadOfQueue', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
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
      :data="data"
      :selected="selected"
      @onConfirm="confirm"
    />
  </span>
</template>

<style scoped>
</style>
