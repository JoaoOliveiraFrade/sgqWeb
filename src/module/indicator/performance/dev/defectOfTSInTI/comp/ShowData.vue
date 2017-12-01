<script>
  import { mapActions, mapState } from 'vuex'

  import oiRule from './ShowRule.vue'
  import oiShowAnalytic from './ShowAnalytic.vue'
  import oiShowChartGroupDevManuf from './ShowChartGroupDevManuf.vue'
  import oiShowChartGroupTimeline from './ShowChartGroupTimeline.vue'
  import oiShowChartTotal from './ShowChartTotal.vue'

  export default {
    name: 'ShowData',

    components: {
      oiRule,
      oiShowAnalytic,
      oiShowChartGroupDevManuf,
      oiShowChartGroupTimeline,
      oiShowChartTotal
    },

    computed: {
      // ...mapState('indicatorDefectDensity', { loadingDefectDensity: state => (state.loading) })
      ...mapState('indPerfDevDefectOfTSInTI', ['selectedProject', 'loading'])
    },

    methods: {
      // ...mapActions({'loadDefectDensity': 'indicatorDefectDensity/load'}),
      ...mapActions('indPerfDevDefectOfTSInTI', ['loadData'])
    },

    watch: {
      'selectedProject': {
        handler () {
          this.loadData()
        }
      }
    }

    // mounted () {
    //   console.log('ShowData - mounted')
    //   this.load()
    // }
  }
</script>

<template>
  <div v-show="selectedProject.length > 0">
      <div class="loader" v-show="loading" style="margin-top: 50px; margin-bottom: 25px"/>
      <div class="well well-sm oi-well col-xs-12" v-show="!loading" style="padding:3px">
        
        <oiRule style="text-align: left"/>
        <oiShowAnalytic style="text-align: left"/>

        <hr style="margin-top: 1px; height: 21px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

        <div class="col-sm-4">
          <oiShowChartGroupDevManuf/>
        </div>
        <div class="col-sm-4">
          <oiShowChartGroupTimeline/>
        </div>
        
        <div class="col-sm-4">
          <oiShowChartTotal/>
        </div>
      </div>
  </div>
</template>

<style scoped>
  label {
      margin: 0px;
      border: 0px;
      padding: 0px;
      font-weight: normal;
      font-size: 12px;
  }
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }
  td {
    text-align: center;
  }
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
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
  button {
    margin:0px; 
    margin-bottom:1px; 
    border:0; 
    padding:0; 
    height: 19px; 
    padding-left:4px; 
    padding-right:4px
  }
</style>
