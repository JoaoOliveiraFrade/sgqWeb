<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'SelectionTestManuf',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean}
    },

    computed: {
      ...mapState('testManuf', ['data', 'selected'])
    },

    methods: {
      ...mapActions('testManuf', ['load', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.load()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Fáb. Teste"               
      :data="data"
      :selected="selected"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
