<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiTestManufSelection from '@/module/testManuf/comp/Selection.vue'
  import oiSystemSelectionFromTestManufs from '@/module/system/system/comp/SelectionFromTestManufs.vue'
  import oiProjectSelectionFromTestManufsAndSystems from '@/module/project/testProj/comp/SelectionFromTestManufsAndSystems.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'indicatorTestMain',

    components: { oiTestManufSelection, oiSystemSelectionFromTestManufs, oiProjectSelectionFromTestManufsAndSystems, oiShowData },

    computed: {
      ...mapState('indicatorTest', ['selectedTestManufs', 'selectedSystem', 'selectedProject']),
      ...mapGetters('indicatorTest', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indicatorTest', ['setSelectedTestManufs', 'setSelectedSystem', 'setSelectedProject'])
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
        :showButtonSelected="true"
        @onConfirm="setSelectedTestManufs"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiSystemSelectionFromTestManufs v-show="selectedTestManufs.length > 0"
        :testManufs="selectedTestManufs"
        :selectedSystem="selectedSystem"
        @onConfirm="setSelectedSystem"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectSelectionFromTestManufsAndSystems v-show="selectedSystem.length > 0"
        :testManufs="selectedTestManufs"
        :systems="selectedSystem"
        :selectedProject="selectedProject"
        @onConfirm="setSelectedProject"
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
