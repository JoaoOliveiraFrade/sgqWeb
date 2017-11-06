<script>
  import { mapActions, mapState } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/SelectionOfAgent.vue'
  
  import oiSystemMultiselectionFbyDevManuf from '@/module/system/systemFromAgent/comp/MultiselectionFbyDevManuf.vue'
  
  // import oiSelectionFromAgentFbyDevManufs from '@/module/system/systemFromAgent/comp/SelectionFromAgentFbyDevManufs.vue'
  // import oiProjectMonoSelectionFbyDevManufAndSystems from '@/module/project/comp/SelectionFromAgentFbyDevManufAndSystems.vue'
  // import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indPerfDevDefectFromTSInTIAgentMain',

    components: { oiDevManufSelection, oiSystemMultiselectionFbyDevManuf },
    // components: { oiDevManufSelection, oiSelectionFromAgentFbyDevManufs, oiProjectMonoSelectionFbyDevManufAndSystems, oiShowData },

    computed: {
      ...mapState('indPerfDevDefectOfTSInTIAgent', ['selectedDevManuf', 'selectedSystem', 'selectedProject'])
      // ...mapGetters('indPerfDevDefectDensity', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indPerfDevDefectOfTSInTIAgent', ['setSelectedDevManuf', 'setSelectedSystem', 'setSelectedProject'])
    },

    mounted () {
      this.setFeatureName('Ind.Desemp.Des - Defeito de TS em TI (agente)')
      // this.setSelectedDevManuf([])
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4">
      <oiDevManufSelection
        :isShowButtonSelected="true"
        @onConfirm="setSelectedDevManuf"
      />
    </div>

<!--v-show="selectedDevManuf.length > 0"-->

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSystemMultiselectionFbyDevManuf 
        :devManufs="selectedDevManuf"
        :selectedSystem="selectedSystem"
        @onConfirm="setSelectedSystem"
      />
    </div>

<!--
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSelectionFromAgentFbyDevManufs v-show="selectedDevManuf.length > 0"
        :devManufs="selectedDevManuf"
        :selectedSystem="selectedSystem"
        @onConfirm="setSelectedSystem"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectMonoSelectionFbyDevManufAndSystems v-show="selectedSystem.length > 0"
        :devManufs="selectedDevManuf"
        :systems="selectedSystem"
        :selectedProject="selectedProject"
        @onConfirm="setSelectedProject"
      />
    </div>

    <div class="row well-sm oi-well" style="padding-top: 30px">
      <oiShowData/>
    </div>
-->    
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
