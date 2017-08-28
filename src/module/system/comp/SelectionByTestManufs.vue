<script>
  import { mapActions, mapGetters } from 'vuex'
  import oiSelection from '@/module/selection/comp/selections.vue'

  export default {
    name: 'SelectionSystemByTestManufs',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean}
    },

    methods: {
      ...mapActions(['setSelectedSystems'])
    },

    computed: {
      ...mapGetters(['systemsByTestManufs', 'selectedSystems'])
    }

  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      idChild="system"
      gender="male"
      :dataSource="systemsByTestManufs"
      :itemsSelected="selectedSystems"
      :isShowButtonSelected="isShowButtonSelected"
      @onChangeSelected="setSelectedSystems"
    />
  </span>
</template>

<style scoped>
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }
</style>
