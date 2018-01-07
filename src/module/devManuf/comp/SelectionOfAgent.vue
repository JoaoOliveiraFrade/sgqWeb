<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'DevManufSelectionOfAgent',

    components: { oiSelection },

    props: {
      showButtonSelected: {type: Boolean},
      preSelected: { type: Array, default: () => [] }
    },

    computed: {
      ...mapState('devManuf', ['data', 'selected'])
    },

    methods: {
      ...mapActions('devManuf', ['loadDataFromAgent', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadDataFromAgent()
      this.setSelected(this.preSelected)
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
