<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/SelectionOfQueue.vue'
  import oiSelectionOfQueueFbyDevManuf from '@/module/system/comp/SelectionOfQueueFbyDevManuf.vue'
  import oiProjectSelectionOfDevManufsAndSystems from '@/module/project/comp/SelectionOfQueueFbyDevManufAndSystems.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indicatorAccomplishmentMain',

    components: { oiDevManufSelection, oiSelectionOfQueueFbyDevManuf, oiProjectSelectionOfDevManufsAndSystems, oiShowData },

    computed: {
      ...mapState('indicatorAccomplishment', ['selectedDevManufs', 'selectedSystems', 'selectedProjects']),
      ...mapGetters('indicatorAccomplishment', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indicatorAccomplishment', ['setSelectedDevManufs', 'setSelectedSystems', 'setSelectedProjects'])
    },

    mounted () {
      this.setFeatureName('Indicadores de Desempenho')
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
      <oiSelectionOfQueueFbyDevManuf v-show="selectedDevManufs.length > 0"
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
