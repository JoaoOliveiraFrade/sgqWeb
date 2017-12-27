<script>
  import { mapActions, mapState } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/Selection.vue'
  import oiSystemMultiselectionFbyDevManufByCheck from '@/module/system/system/comp/MultiselectionFbyDevManufByCheck.vue'
  import oiProjectMonoSelectionFbyDevManufAndSystems from '@/module/project/testProj/comp/SelectionFbyDevManufAndSystems.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'indOperDevDefectDensity',

    components: { oiDevManufSelection, oiSystemMultiselectionFbyDevManufByCheck, oiProjectMonoSelectionFbyDevManufAndSystems, oiShowData },

    computed: {
      ...mapState('indOperDevDefectDensity', ['selectedDevManuf', 'selectedSystem', 'selectedProject'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indOperDevDefectDensity', ['setSelectedDevManuf', 'setSelectedSystem', 'setSelectedProject'])
    },

    mounted () {
      this.setFeatureName('Ind.Oper.Des - Densidade Defeito')
    }
  }
</script>


<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4">
      <oiDevManufSelection
        :preSelected="selectedDevManuf"
        @onConfirm="setSelectedDevManuf"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSystemMultiselectionFbyDevManufByCheck v-show="selectedDevManuf.length > 0"
        :filterDevManuf="selectedDevManuf"
        :preSelected="selectedSystem"
        @onConfirm="setSelectedSystem"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectMonoSelectionFbyDevManufAndSystems v-show="selectedSystem.length > 0"
        :devManufs="selectedDevManuf"
        :systems="selectedSystem"
        :preSelected="selectedProject"
        @onConfirm="setSelectedProject"
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
