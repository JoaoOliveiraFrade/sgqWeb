<script>
  import { mapActions, mapState } from 'vuex'

  import oiSelectionDefectQueue from '@/module/defect/defectQueue/comp/Selection.vue'
  import oiSelectionDefectStatus from '@/module/defect/defectStatus/comp/Selection.vue'
  import oiSelectionDefectTrafficLight from '@/module/defect/defectTrafficLight/comp/Selection.vue'
  import oiSelectionProject from '@/module/project/testProj/comp/multiselection/Main.vue'
  import oiShowData from './ShowData.vue'
  import oiShowDefectDetail from '@/genComp/defect/ShowDetail.vue'

  export default {
    name: 'defectMonitor',

    components: {
      oiSelectionDefectQueue,
      oiSelectionDefectStatus,
      oiSelectionDefectTrafficLight,
      oiSelectionProject,
      oiShowData,
      oiShowDefectDetail
    },

    computed: {
      ...mapState('testProj', ['data']),
      ...mapState('defectMonitor', [
        'selectedDefectQueue',
        'selectedDefectStatus',
        'selectedDefectTrafficLight',
        'selectedProject',
        'loading',
        'status',
        'selectedDefectDetail',
        'selectedDefectTime'
      ])
    },

    methods: {
      ...mapActions('testProj', ['load']),
      ...mapActions('defectMonitor', [
        'setSelectedDefectQueue',
        'setSelectedDefectStatus',
        'setSelectedDefectTrafficLight',
        'setSelectedProject',
        'setStatus',
        'loadData'
      ]),

      ...mapActions(['setFeatureName']),

      confirmSelection (parameter) {
        this.setSelectedProject(parameter)
      }
    },

    mounted () {
      this.setFeatureName('Monitor de Defeito')
      this.load()
      this.loadData()

      setInterval(function () {
        this.loadData()
      }.bind(this), 60000)
    },

    watch: {
      'selectedDefectQueue': {
        handler () {
          this.loadData()
        }
      },
      'selectedDefectStatus': {
        handler () {
          this.loadData()
        }
      },
      'selectedDefectTrafficLight': {
        handler () {
          this.loadData()
        }
      },
      'selectedProject': {
        handler () {
          this.loadData()
        }
      }
    }
  }
</script>

<template>

  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionDefectQueue
        @onConfirm="setSelectedDefectQueue"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionDefectStatus
        @onConfirm="setSelectedDefectStatus"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionDefectTrafficLight
        @onConfirm="setSelectedDefectTrafficLight"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6 col-md-3">
      <oiSelectionProject 
        :projects="data" 
        :selected="selectedProject"
        @onConfirm="setSelectedProject"
      />
    </div>

    <!--
    <div class="loader" v-show="loading" style="margin-top: 35px;margin-bottom: 25px">
    </div>
    -->

    <!--<div v-show="!loading" class="row well well-sm oi-well col-xs-12">-->
    <div class="row well well-sm oi-well col-xs-12">

      <oiShowData v-show="status === 'show'"/>

      <span v-show="status === 'showDetail'" style="display: block; text-align: left">

        <a title="Voltar para a lista de defeitos"
          @click="setStatus('show')">
          <i class="glyphicon glyphicon glyphicon-arrow-left" style="font-size: 20px;"/>
        </a>

        <oiShowDefectDetail 
          :defect="selectedDefectDetail"
          :defectTime="selectedDefectTime"
        />

      </span>        

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
  }
  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #e95420; /* Blue */
      border-bottom: 16px solid #e95420;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }   
</style>
