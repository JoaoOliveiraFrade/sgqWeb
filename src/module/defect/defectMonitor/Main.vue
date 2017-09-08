<script>
  // import { mapActions, mapGetters } from 'vuex'

  import oiSelectionDefectQueue from '@/module/defect/defectQueue/comp/Selection.vue'
  import oiSelectionDefectStatus from '@/module/defect/defectStatus/comp/Selection.vue'
  import oiSelectionDefectSla from '@/module/defect/defectSla/comp/Selection.vue'
  import oiSelectionProject from '@/module/project/comp/SelectionByTestManufs.vue'
  // import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'defectMonitor',

    components: { oiSelectionDefectQueue, oiSelectionDefectStatus, oiSelectionDefectSla, oiSelectionProject }

    // computed: {
    //   ...mapGetters(['selectedTestManufs', 'selectedSystems', 'projectConfirmed'])
    // },

    // methods: {
    //   ...mapActions(['setFeatureName'])
    // },

    // mounted () {
    //   this.setFeatureName('Monitor de Defeito')
    // }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiSelectionDefectQueue/>
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiSelectionDefectStatus/>
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiSelectionDefectSla/>
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiSelectionProject/>
    </div>

    <!--
    <div class="row well well-sm oi-well" style="margin-bottom:3px" v-if="selectedTestManufs.length > 0">
      <oiSelectionSystem
        :isShowButtonSelected="true"
      />
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px" v-if="selectedSystems.length > 0">
      <oiSelectionProject/>
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiShowData v-show="projectConfirmed"/>
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
    border: 0;
    padding: 3px;
  } 
  .oi-col {
    padding: 3px;
    margin: 0;
    border: 0;
  }
</style>
