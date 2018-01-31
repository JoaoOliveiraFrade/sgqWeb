<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/genComp/selection/Main.vue'

  export default {
    name: 'MultiSelectionSystemList',

    components: { oiSelection },

    props: {
      showButtonSelected: {type: Boolean}
    },

    computed: {
      ...mapState('trg', ['systems', 'systemsMultiSelected'])
    },

    methods: {
      ...mapActions('trg', ['setSystemsMultiSelected']),

      confirm (selected) {
        this.setSystemsMultiSelected(selected)
        this.$emit('onConfirm', selected)
      }
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="systems"
      :selected="systemsMultiSelected"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
