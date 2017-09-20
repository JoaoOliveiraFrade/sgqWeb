<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'DevManufSelection',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean}
    },

    computed: {
      ...mapState('DevManuf', ['data', 'selected'])
    },

    methods: {
      ...mapActions('DevManuf', ['load', 'setSelected']),

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
      title="Fáb. Desenv."               
      :data="data"
      :selected="selected"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
