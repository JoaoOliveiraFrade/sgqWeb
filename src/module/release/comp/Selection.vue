<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'releaseSelection',

    components: { oiSelection },

    computed: {
      ...mapState('release', ['data', 'selected'])
    },

    methods: {
      ...mapActions('release', ['loadData', 'setSelected']),

      confirm (selected) {
        this.setSelected(this.selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadData()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Release"
      :data="data"
      :selected="selected"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
