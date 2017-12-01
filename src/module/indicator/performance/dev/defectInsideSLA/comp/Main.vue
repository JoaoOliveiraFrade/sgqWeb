<script>
  import { mapActions, mapState } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/SelectionOfAgent.vue'
  import oiSelectionFromAgentFbyDevManufs from '@/module/system/systemFromAgent/comp/SelectionFromAgentFbyDevManufs.vue'
  import oiProjectMonoSelectionFbyDevManufAndSystems from '@/module/project/test/comp/SelectionFromAgentFbyDevManufAndSystems.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'indPerfDevDefectInsideSLAMain',

    components: { oiDevManufSelection, oiSelectionFromAgentFbyDevManufs, oiProjectMonoSelectionFbyDevManufAndSystems, oiShowData },

    computed: {
      ...mapState('indPerfDevDefectInsideSLA', ['selectedDevManuf', 'selectedSystem', 'selectedProject'])
      // ...mapGetters('indPerfDevDefectDensity', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indPerfDevDefectInsideSLA', ['setSelectedDevManuf', 'setSelectedSystem', 'setSelectedProject'])
    },

    mounted () {
      this.setFeatureName('Ind.Desemp.Des - Defeito Dentro SLA')
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
