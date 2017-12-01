<script>
  import { mapActions, mapState } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/Selection.vue'
  import oiMultiselectionFbyDevManufByCheck from '@/module/system/system/comp/MultiselectionFbyDevManufByCheck.vue'
  import oiProjectMonoSelectionFbyDevManufAndSystems from '@/module/project/test/comp/SelectionFbyDevManufAndSystems.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'indPerfDevDefectDensity',

    components: { oiDevManufSelection, oiMultiselectionFbyDevManufByCheck, oiProjectMonoSelectionFbyDevManufAndSystems, oiShowData },

    computed: {
      ...mapState('indPerfDevDefectDensity', ['selectedDevManuf', 'selectedSystem', 'selectedProject'])
      // ...mapGetters('indPerfDevDefectDensity', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indPerfDevDefectDensity', ['setSelectedDevManuf', 'setSelectedSystem', 'setSelectedProject'])
    },

    mounted () {
      this.setFeatureName('Ind.Desemp.Des - Densidade Defeito')
      // this.setSelectedDevManuf([])
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
      <oiMultiselectionFbyDevManufByCheck v-show="selectedDevManuf.length > 0"
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
