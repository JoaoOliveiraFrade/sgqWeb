<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  import oiProductivityShowChartGroupTestManuf from '@/module/indicator/productivity/comp/ShowChartGroupTestManuf.vue'
  import oiProductivityShowChartGroupTimeline from '@/module/indicator/productivity/comp/ShowChartGroupTimeline.vue'
  import oiProductivityShowChartTotal from '@/module/indicator/productivity/comp/ShowChartTotal.vue'
  import oiProductivityShowRule from '@/module/indicator/productivity/comp/ShowRule.vue'
  import oiProductivityShowAnalytic from '@/module/indicator/productivity/comp/ShowAnalytic.vue'

  import oiSelectionRejectionType from '@/module/indicator/rateEvidRejected/comp/SelectionRejectionType.vue'
  import oiRateEvidRejectedShowRule from '@/module/indicator/rateEvidRejected/comp/ShowRule.vue'
  import oiRateEvidRejectedShowAnalytic from '@/module/indicator/rateEvidRejected/comp/ShowAnalytic.vue'
  import oiRateEvidRejectedShowAnalyticTimeline from '@/module/indicator/rateEvidRejected/comp/ShowAnalyticTimeline.vue'
  import oiRateEvidRejectedShowChartGroupTestManuf from '@/module/indicator/rateEvidRejected/comp/ShowChartGroupTestManuf.vue'
  import oiRateEvidRejectedShowChartGroupTimeline from '@/module/indicator/rateEvidRejected/comp/ShowChartGroupTimeline.vue'
  import oiRateEvidRejectedShowChartTotal from '@/module/indicator/rateEvidRejected/comp/ShowChartTotal.vue'

  import oiRateDefectUnfoundedShowRule from '@/module/indicator/rateDefectUnfounded/comp/ShowRule.vue'
  import oiRateDefectUnfoundedShowAnalytic from '@/module/indicator/rateDefectUnfounded/comp/ShowAnalytic.vue'
  import oiRateDefectUnfoundedShowChartGroupTestManuf from '@/module/indicator/rateDefectUnfounded/comp/ShowChartGroupTestManuf.vue'
  import oiRateDefectUnfoundedShowChartGroupTimeline from '@/module/indicator/rateDefectUnfounded/comp/ShowChartGroupTimeline.vue'
  import oiRateDefectUnfoundedShowChartTotal from '@/module/indicator/rateDefectUnfounded/comp/ShowChartTotal.vue'

  import oiRateDefectUatShowRule from '@/module/indicator/rateDefectUat/comp/ShowRule.vue'
  import oiRateDefectUatShowAnalytic from '@/module/indicator/rateDefectUat/comp/ShowAnalytic.vue'
  import oiRateDefectUatShowChartGroupTestManuf from '@/module/indicator/rateDefectUat/comp/ShowChartGroupTestManuf.vue'
  import oiRateDefectUatShowChartGroupTimeline from '@/module/indicator/rateDefectUat/comp/ShowChartGroupTimeline.vue'
  import oiRateDefectUatShowChartTotal from '@/module/indicator/rateDefectUat/comp/ShowChartTotal.vue'

  import oiAverangeRetestHoursShowRule from '@/module/indicator/averangeRetestHours/comp/ShowRule.vue'
  import oiAverangeRetestHoursShowAnalytic from '@/module/indicator/averangeRetestHours/comp/ShowAnalytic.vue'
  // import oiAverangeRetestHoursShowChartGroupTestManuf from '@/module/indicator/averangeRetestHours/comp/ShowChartGroupTestManuf.vue'
  // import oiAverangeRetestHoursShowChartGroupTimeline from '@/module/indicator/averangeRetestHours/comp/ShowChartGroupTimeline.vue'
  // import oiAverangeRetestHoursShowChartTotal from '@/module/indicator/averangeRetestHours/comp/ShowChartTotal.vue'

  export default {
    name: 'ShowData',

    components: {
      oiProductivityShowChartGroupTestManuf,
      oiProductivityShowChartGroupTimeline,
      oiProductivityShowChartTotal,
      oiProductivityShowRule,
      oiProductivityShowAnalytic,

      oiSelectionRejectionType,
      oiRateEvidRejectedShowRule,
      oiRateEvidRejectedShowAnalytic,
      oiRateEvidRejectedShowAnalyticTimeline,
      oiRateEvidRejectedShowChartGroupTestManuf,
      oiRateEvidRejectedShowChartGroupTimeline,
      oiRateEvidRejectedShowChartTotal,

      oiRateDefectUnfoundedShowRule,
      oiRateDefectUnfoundedShowAnalytic,
      oiRateDefectUnfoundedShowChartGroupTestManuf,
      oiRateDefectUnfoundedShowChartGroupTimeline,
      oiRateDefectUnfoundedShowChartTotal,

      oiRateDefectUatShowRule,
      oiRateDefectUatShowAnalytic,
      oiRateDefectUatShowChartGroupTestManuf,
      oiRateDefectUatShowChartGroupTimeline,
      oiRateDefectUatShowChartTotal,

      oiAverangeRetestHoursShowRule,
      oiAverangeRetestHoursShowAnalytic
      // oiAverangeRetestHoursShowChartGroupTestManuf
      // oiAverangeRetestHoursShowChartGroupTimeline,
      // oiAverangeRetestHoursShowChartTotal
    },

    computed: {
      ...mapGetters(['selectedProjects', 'produtivityLoading']),
      ...mapState('indicatorRateEvidRejected', { loadingRateEvidRejected: state => (state.loading || state.loadingTimeline) }),
      ...mapState('indicatorRateDefectUnfounded', { loadingRateDefectUnfounded: state => (state.loading) }),
      ...mapState('indicatorRateDefectUat', { loadingRateDefectUat: state => (state.loading) }),
      ...mapState('indicatorAverangeRetestHours', { loadingAverangeRetestHours: state => (state.loading) })
    },

    methods: {
      ...mapActions(['loadProdutivity']),
      ...mapActions({'loadRateEvidRejected': 'indicatorRateEvidRejected/load'}),
      ...mapActions({'loadRateEvidRejectedTimeline': 'indicatorRateEvidRejected/loadTimeline'}),
      ...mapActions({'loadRateDefectUnfounded': 'indicatorRateDefectUnfounded/load'}),
      ...mapActions({'loadRateDefectUat': 'indicatorRateDefectUat/load'}),
      ...mapActions({'loadAverangeRetestHours': 'indicatorAverangeRetestHours/load'})
    },

    watch: {
      'selectedProjects': {
        handler () {
          this.loadProdutivity()

          this.loadRateEvidRejected()
          this.loadRateEvidRejectedTimeline()

          this.loadRateDefectUnfounded()
          this.loadRateDefectUat()
          this.loadAverangeRetestHours()
        }
      }
    }
  }
</script>

<template>
  <div>
    <ul class="nav nav-tabs" style="margin-top:3px">
      <li class="active"><a data-toggle="tab" href="#produtivity" style="padding:4px">Produtividade</a></li>
      <li><a data-toggle="tab" href="#rateEvidRejected" style="padding:4px">Taxa Rejeição Evidência</a></li>
      <li><a data-toggle="tab" href="#rateDefectUnfounded" style="padding:4px">Taxa Defeito Improcedente</a></li>
      <li><a data-toggle="tab" href="#rateDefectUat" style="padding:4px">Taxa Defeito UAT</a></li>
      <li><a data-toggle="tab" href="#averangeRetestHours" style="padding:4px">Tempo Médio Reteste Defeito</a></li>
    </ul>

    <div class="tab-content">

      <div id="produtivity" class="tab-pane fade in active" style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="produtivityLoading" style="margin-top: 25px;margin-bottom: 25px"></div>        
        <div class="row" v-show="!produtivityLoading" style="margin:0; border:0; padding:0">
          <oiProductivityShowRule style="text-align: left"/>
          <oiProductivityShowAnalytic style="text-align: left"/>
          
          <hr style="margin:1px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">
        
          <div class="col-sm-4">
            <oiProductivityShowChartGroupTestManuf/>
          </div>

          <div class="col-sm-4">
            <oiProductivityShowChartGroupTimeline/>
          </div>

          <div class="col-sm-4">
            <!--<oiProductivityShowChartTotal/>-->
          </div>
        </div>
      </div>

      <div id="rateEvidRejected" class="tab-pane fade" style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingRateEvidRejected" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingRateEvidRejected" style="margin:0; border:0; padding:0">
          <oiRateEvidRejectedShowRule style="text-align: left"/>
          <oiRateEvidRejectedShowAnalytic style="text-align: left"/>
          <oiRateEvidRejectedShowAnalyticTimeline style="text-align: left"/>

          <oiSelectionRejectionType/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiRateEvidRejectedShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiRateEvidRejectedShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiRateEvidRejectedShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="rateDefectUnfounded" class="tab-pane fade"style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingRateDefectUnfounded" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingRateDefectUnfounded" style="margin:0; border:0; padding:0">
          <oiRateDefectUnfoundedShowRule style="text-align: left"/>
          <oiRateDefectUnfoundedShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiRateDefectUnfoundedShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiRateDefectUnfoundedShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiRateDefectUnfoundedShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="rateDefectUat" class="tab-pane fade"style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingRateDefectUat" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingRateDefectUat" style="margin:0; border:0; padding:0">
          <oiRateDefectUatShowRule style="text-align: left"/>
          <oiRateDefectUatShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiRateDefectUatShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiRateDefectUatShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiRateDefectUatShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="averangeRetestHours" class="tab-pane fade"style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingAverangeRetestHours" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingAverangeRetestHours" style="margin:0; border:0; padding:0">
          <oiAverangeRetestHoursShowRule style="text-align: left"/>
          <oiAverangeRetestHoursShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <!--<oiAverangeRetestHoursShowChartGroupTestManuf/>-->
          </div>
          <div class="col-sm-4">
            <!--<oiAverangeRetestHoursShowChartGroupTimeline/>-->
          </div>
          <div class="col-sm-4">
            <!--<oiAverangeRetestHoursShowChartTotal/>-->
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
