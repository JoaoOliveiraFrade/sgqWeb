<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'DevManufSelection',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean},
      preSelected: { type: Array, default: () => [] }
    },

    computed: {
      ...mapState('devManuf', ['data', 'selected'])
    },

    methods: {
      ...mapActions('devManuf', ['load', 'setSelected']),

      confirm (selected) {
        this.setSelected(this.selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.load()
      this.setSelected(this.preSelected)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Fáb. Desenv."               
      :data="data"
      :selected="selected"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
