<script>
  import { mapActions, mapState } from 'vuex'

  import oiSelectionDefectQueue from '@/module/defect/defectQueue/comp/Selection.vue'
  import oiSelectionDefectStatus from '@/module/defect/defectStatus/comp/Selection.vue'
  import oiSelectionDefectTrafficLight from '@/module/defect/defectTrafficLight/comp/Selection.vue'
  import oiSelectionProject from '@/module/project/project/comp/multiselection/Main.vue'

  // import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'defectMonitor',

    components: {
      oiSelectionDefectQueue,
      oiSelectionDefectStatus,
      oiSelectionDefectTrafficLight,
      oiSelectionProject
    },

    computed: {
      // ...mapState(['selectedTestManufs', 'selectedSystem', 'projectConfirmed'])
      ...mapState('project', ['data']),
      ...mapState('defectMonitor', ['selectedProject'])
    },

    methods: {
      ...mapActions('project', ['load']),
      ...mapActions('defectMonitor', ['setSelectedProject']),
      ...mapActions(['setFeatureName']),

      confirmSelection (parameter) {
        this.setSelectedProject(parameter)
      }
    },

    mounted () {
      this.setFeatureName('Monitor de Defeito')
      this.load()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionDefectQueue/>
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionDefectStatus/>
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionDefectTrafficLight/>
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionProject 
        :projects="data" 
        :selected="selectedProject"
        @confirmSelection="confirmSelection"
      />
    </div>

    <!--
    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3" v-if="selectedTestManufs.length > 0">
      <oiSelectionSystem
        :isShowButtonSelected="true"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3" v-if="selectedSystem.length > 0">
      <oiSelectionProject/>
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
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
    margin-bottom:0px;
    padding: 2px;
  } 
</style>
