<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/genComp/selection2/Main.vue'

  export default {
    name: 'MultiSelectionSystemList',

    components: { oiSelection },

    props: {
      showButtonSelected: {type: Boolean}
    },

    computed: {
      ...mapState('trg', ['systems', 'selectedSystems'])
    },

    methods: {
      ...mapActions('trg', ['setSelectedSystems']),

      confirm (selected) {
        this.setSelectedSystems(selected)
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
      :selected="selectedSystems"
      @onConfirm="confirm"        
    />
  </span>
</template>

<style scoped>
</style>
