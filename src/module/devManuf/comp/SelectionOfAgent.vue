<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'DevManufSelectionOfAgent',

    components: { oiSelection },

    props: {
      isShowButtonselectedOfAgent: {type: Boolean}
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
      this.loadFromAgent()
      this.setSelected([])
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
