<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/Selection.vue'
  import oiSystemSelectionFbyDevManufs from '@/module/system/comp/SelectionFbyDevManufs.vue'
  import oiProjectSelectionOfDevManufsAndSystems from '@/module/project/comp/SelectionOfDevManufFbyDevManufAndSystems.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indicatorPerfDefectOfTSInTI',

    components: { oiDevManufSelection, oiSystemSelectionFbyDevManufs, oiProjectSelectionOfDevManufsAndSystems, oiShowData },

    computed: {
      ...mapState('indicatorPerfDefectOfTSInTI', ['selectedDevManufs', 'selectedSystems', 'selectedProjects']),
      ...mapGetters('indicatorPerfDefectOfTSInTI', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indicatorPerfDefectOfTSInTI', ['setSelectedDevManufs', 'setSelectedSystems', 'setSelectedProjects'])
    },

    mounted () {
      this.setFeatureName('Ind. de Desempenho - Defeito de TS em TI')
      this.setSelectedDevManufs([])
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4">
      <oiDevManufSelection
        :isShowButtonSelected="true"
        @onConfirm="setSelectedDevManufs"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSystemSelectionFbyDevManufs v-show="selectedDevManufs.length > 0"
        :devManufs="selectedDevManufs"
        :selectedSystems="selectedSystems"
        @onConfirm="setSelectedSystems"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectSelectionOfDevManufsAndSystems v-show="selectedSystems.length > 0"
        :devManufs="selectedDevManufs"
        :systems="selectedSystems"
        :selectedProjects="selectedProjects"
        @onConfirm="setSelectedProjects"
      />
    </div>

    <oiShowData/>
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
