<script>
  import { mapActions, mapGetters } from 'vuex'
  import oiSelection from '@/module/selection/comp/selections.vue'

  export default {
    name: 'Selection',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean}
    },

    methods: {
      ...mapActions(['setSelectedDevSystems'])
    },

    computed: {
      ...mapGetters(['systemsByDevManufs', 'selectedDevSystems'])
    }

  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      idChild="system"
      gender="male"
      :dataSource="systemsByDevManufs"
      :itemsSelected="selectedDevSystems"
      :isShowButtonSelected="isShowButtonSelected"
      @onChangeSelected="setSelectedDevSystems"
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
