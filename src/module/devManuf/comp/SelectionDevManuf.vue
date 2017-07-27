<script>
  import { mapActions, mapGetters } from 'vuex'
  import oiSelection from '@/module/selection/comp/selections.vue'

  export default {
    name: 'SelectionDevManuf',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean}
    },

    mounted () {
      this.loadDevManufs()
    },

    methods: {
      ...mapActions(['loadDevManufs', 'setSelectedDevManufs'])
    },

    computed: {
      ...mapGetters(['devManufs', 'selectedDevManufs'])
    }

  }
</script>

<template>
  <span>
    <oiSelection
      title="Fáb. Desenv."               
      idChild="devManuf"
      :dataSource="devManufs"
      :itemsSelected="selectedDevManufs"
      :isShowButtonSelected="isShowButtonSelected"
      @onChangeSelected="setSelectedDevManufs"        
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
