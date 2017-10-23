<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  import oiDevManufSelection from '@/module/devManuf/comp/SelectionOfQueue.vue'
  import oiSelectionOfQueueFbyDevManufs from '@/module/system/comp/SelectionOfQueueFbyDevManufs.vue'
  import oiProjectSelectionFbyDevManufsAndSystems from '@/module/project/comp/SelectionOfQueueFbyDevManufAndSystems.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'indicatorAccomplishmentQueueMain',

    components: { oiDevManufSelection, oiSelectionOfQueueFbyDevManufs, oiProjectSelectionFbyDevManufsAndSystems, oiShowData },

    computed: {
      ...mapState('indicatorAccomplishmentQueue', ['selectedDevManufs', 'selectedSystems', 'selectedProjects']),
      ...mapGetters('indicatorAccomplishmentQueue', ['showData'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('indicatorAccomplishmentQueue', ['setSelectedDevManufs', 'setSelectedSystems', 'setSelectedProjects'])
    },

    mounted () {
      this.setFeatureName('Ind. Desempenho - Defeito Dentro SLA')
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
      <oiSelectionOfQueueFbyDevManufs v-show="selectedDevManufs.length > 0"
        :devManufs="selectedDevManufs"
        :selectedSystems="selectedSystems"
        @onConfirm="setSelectedSystems"
      />
    </div>
    
    <div class="row well well-sm oi-well col-12 col-sm-4 col-md-4" >
      <oiProjectSelectionFbyDevManufsAndSystems v-show="selectedSystems.length > 0"
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
