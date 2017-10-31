<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/Selection.vue'
  import oiSystemSelectionFbyDevManufs from '@/module/system/comp/SelectionFbyDevManufs.vue'
  import oiProjectSelectionFbyDevManufsAndSystems from '@/module/project/comp/SelectionFbyDevManufAndSystems.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indicatorPerfDevDefectOfTSInTI',

    components: { oiDevManufSelection, oiSystemSelectionFbyDevManufs, oiProjectSelectionFbyDevManufsAndSystems, oiShowData },

    computed: {
      ...mapState('indicatorPerfDevDefectOfTSInTI', ['selectedDevManufs', 'selectedSystems', 'selectedProjects']),
      ...mapGetters('indicatorPerfDevDefectOfTSInTI', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indicatorPerfDevDefectOfTSInTI', ['setSelectedDevManufs', 'setSelectedSystems', 'setSelectedProjects'])
    },

    mounted () {
      this.setFeatureName('Ind. Desempenho - Defeito de TS em TI')
      // this.setSelectedDevManufs([])
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4">
      <oiDevManufSelection
        :preSelected="selectedDevManufs"
        @onConfirm="setSelectedDevManufs"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSystemSelectionFbyDevManufs v-show="selectedDevManufs.length > 0"
        :devManufs="selectedDevManufs"
        :preSelected="selectedSystems"
        @onConfirm="setSelectedSystems"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectSelectionFbyDevManufsAndSystems v-show="selectedSystems.length > 0"
        :devManufs="selectedDevManufs"
        :systems="selectedSystems"
        :preSelected="selectedProjects"
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
