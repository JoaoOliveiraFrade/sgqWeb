<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiTestManufSelection from '@/module/testManuf/comp/Selection.vue'
  import oiSystemSelectionFromTestManufs from '@/module/system/comp/SelectionFromTestManufs.vue'
  import oiProjectSelectionFromTestManufsAndSystems from '@/module/project/comp/SelectionFromTestManufsAndSystems.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indicatorTestMain',

    components: { oiTestManufSelection, oiSystemSelectionFromTestManufs, oiProjectSelectionFromTestManufsAndSystems, oiShowData },

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

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSystemSelectionFromTestManufs v-show="selectedTestManufs.length > 0"
        :testManufs="selectedTestManufs"
        :selectedSystems="selectedSystems"
        @onConfirm="setSelectedSystems"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectSelectionFromTestManufsAndSystems v-show="selectedSystems.length > 0"
        :testManufs="selectedTestManufs"
        :systems="selectedSystems"
        :selectedProjects="selectedProjects"
        @onConfirm="setSelectedProjects"
      />
    </div>

    <div class="row well-sm oi-well" style="padding-top: 30px" v-if="showData">
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
    height: 30px;
  }   
  .oi-col {
    padding: 3px;
    margin: 0;
    border: 0;
  }
</style>
