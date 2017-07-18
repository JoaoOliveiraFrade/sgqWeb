<script>
  import { mapActions, mapGetters } from 'vuex'
  import oiSelection from '@/module/selection/comp/selections.vue'

  export default {
    name: 'SelectionTestManuf',

    components: { oiSelection },

    props: {
      isShowButtonSelected: {type: Boolean}
    },

    mounted () {
      this.loadTestManufs()
    },

    methods: {
      ...mapActions(['loadTestManufs', 'setSelectedTestManufs'])
    },

    computed: {
      ...mapGetters(['testManufs', 'selectedTestManufs'])
    }

  }
</script>

<template>
  <span>
    <oiSelection
      title="Fáb. Teste"               
      idChild="testManuf"
      :dataSource="testManufs"
      :itemsSelected="selectedTestManufs"
      :isShowButtonSelected="isShowButtonSelected"
      @onChangeSelected="setSelectedTestManufs"        
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
