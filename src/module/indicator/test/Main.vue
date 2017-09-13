<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiTestManufSelection from '@/module/testManuf/comp/Selection.vue'
  import oiSystemSelectionOfTestManufs from '@/module/system/comp/SelectionOfTestManufs.vue'
  import oiProjectSelectionOfTestManufsAndSystems from '@/module/project/comp/SelectionOfTestManufsAndSystems.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indicatorTestMain',

    components: { oiTestManufSelection, oiSystemSelectionOfTestManufs, oiProjectSelectionOfTestManufsAndSystems, oiShowData },

    computed: {
      ...mapState('indicatorTest', ['selectedTestManufs', 'selectedSystems', 'selectedProjects']),
      ...mapGetters('indicatorTest', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indicatorTest', ['setSelectedTestManufs', 'setSelectedSystems', 'setSelectedProjects'])
    },

    mounted () {
      this.setFeatureName('Indicadores de Teste')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4">
      <oiTestManufSelection
        :isShowButtonSelected="true"
        @onConfirm="setSelectedTestManufs"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" v-if="selectedTestManufs.length > 0">
      <oiSystemSelectionOfTestManufs
        :testManufs="selectedTestManufs"
        :selectedSystems="selectedSystems"
        @onConfirm="setSelectedSystems"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" v-if="selectedSystems.length > 0">
      <oiProjectSelectionOfTestManufsAndSystems
        :testManufs="selectedTestManufs"
        :systems="selectedSystems"
        :selectedProjects="selectedProjects"
        @onConfirm="setSelectedProjects"
      />
    </div>

    <div class="row well well-sm oi-well" style="padding-top: 30px" v-if="showData">
      <oiShowData/>
    </div>
    
  </div> 
</template>

<style scoped>
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    margin-bottom:0px;
    padding: 2px;
  }   
  .oi-col {
    padding: 3px;
    margin: 0;
    border: 0;
  }
</style>
