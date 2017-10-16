<script>
  import { mapActions, mapState } from 'vuex'

  import oiDefectDensityRule from '@/module/indicator/accomplishment/defectDensity/comp/ShowRule.vue'
  import oiDefectDensityShowAnalytic from '@/module/indicator/accomplishment/DefectDensity/comp/ShowAnalytic.vue'
  import oiDefectDensityShowChartGroupDevManuf from '@/module/indicator/accomplishment/DefectDensity/comp/ShowChartGroupDevManuf.vue'
  import oiDefectDensityShowChartGroupTimeline from '@/module/indicator/accomplishment/DefectDensity/comp/ShowChartGroupTimeline.vue'
  import oiDefectDensityShowChartTotal from '@/module/indicator/accomplishment/DefectDensity/comp/ShowChartTotal.vue'

  export default {
    name: 'ShowData',

    components: {
      oiDefectDensityRule,
      oiDefectDensityShowAnalytic,
      oiDefectDensityShowChartGroupDevManuf,
      oiDefectDensityShowChartGroupTimeline,
      oiDefectDensityShowChartTotal
    },

    computed: {
      ...mapState('indicatorAccomplishment', ['selectedProjects']),
      ...mapState('indicatorDefectDensity', { loadingDefectDensity: state => (state.loading) })
    },

    methods: {
      ...mapActions({'loadDefectDensity': 'indicatorDefectDensity/load'}),

      load () {
        this.loadDefectDensity()
      }
    },

    watch: {
      'selectedProjects': {
        handler () {
          this.load()
        }
      }
    },

    mounted () {
      this.load()
    }
  }
</script>

<template>
  <div>
    <ul class="nav nav-tabs" style="margin-top:3px">
      <li class="active"><a data-toggle="tab" href="#defectDensity" style="padding:4px">Densidade Defeito</a></li>
    </ul>

    <div class="tab-content">

      <div id="defectDensity" class="tab-pane fade in active" style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingDefectDensity" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingDefectDensity" style="margin:0; border:0; padding:0">
          <oiDefectDensityRule style="text-align: left"/>
          <oiDefectDensityShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiDefectDensityShowChartGroupDevManuf/>
          </div>
          <div class="col-sm-4">
            <oiDefectDensityShowChartGroupTimeline/>
          </div>
          
          <div class="col-sm-4">
            <oiDefectDensityShowChartTotal/>
          </div>
        </div>
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
      border-top: 16px solid #3498db; /* Blue */
      border-bottom: 16px solid #3498db;
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
