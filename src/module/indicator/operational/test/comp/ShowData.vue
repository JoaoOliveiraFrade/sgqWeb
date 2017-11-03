<script>
  import { mapActions, mapState } from 'vuex'

  import oiProductivityShowRule from '@/module/indicator/operational/test/productivity/comp/ShowRule.vue'
  import oiProductivityShowAnalytic from '@/module/indicator/operational/test/productivity/comp/ShowAnalytic.vue'
  import oiProductivityShowChartGroupTestManuf from '@/module/indicator/operational/test/productivity/comp/ShowChartGroupTestManuf.vue'
  import oiProductivityShowChartGroupTimeline from '@/module/indicator/operational/test/productivity/comp/ShowChartGroupTimeline.vue'
  import oiProductivityShowChartTotal from '@/module/indicator/operational/test/productivity/comp/ShowChartTotal.vue'

  import oiRejectionEvidenceShowRule from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowRule.vue'
  import oiRejectionEvidenceShowAnalytic from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowAnalytic.vue'
  import oiRejectionEvidenceShowAnalyticTimeline from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowAnalyticTimeline.vue'
  import oiRejectionEvidenceShowChartGroupTestManuf from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowChartGroupTestManuf.vue'
  import oiRejectionEvidenceShowChartGroupTimeline from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowChartGroupTimeline.vue'
  import oiRejectionEvidenceShowChartTotal from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowChartTotal.vue'
  import oiSelectionRejectionType from '@/module/indicator/operational/test/rejectionEvidence/comp/SelectionRejectionType.vue'

  import oiDefectUnfoundedShowRule from '@/module/indicator/operational/test/defectUnfounded/comp/ShowRule.vue'
  import oiDefectUnfoundedShowAnalytic from '@/module/indicator/operational/test/defectUnfounded/comp/ShowAnalytic.vue'
  import oiDefectUnfoundedShowChartGroupTestManuf from '@/module/indicator/operational/test/defectUnfounded/comp/ShowChartGroupTestManuf.vue'
  import oiDefectUnfoundedShowChartGroupTimeline from '@/module/indicator/operational/test/defectUnfounded/comp/ShowChartGroupTimeline.vue'
  import oiDefectUnfoundedShowChartTotal from '@/module/indicator/operational/test/defectUnfounded/comp/ShowChartTotal.vue'

  import oiDefectUATShowRule from '@/module/indicator/operational/test/defectUAT/comp/ShowRule.vue'
  import oiDefectUATShowAnalytic from '@/module/indicator/operational/test/defectUAT/comp/ShowAnalytic.vue'
  import oiDefectUATShowChartGroupTestManuf from '@/module/indicator/operational/test/defectUAT/comp/ShowChartGroupTestManuf.vue'
  import oiDefectUATShowChartGroupTimeline from '@/module/indicator/operational/test/defectUAT/comp/ShowChartGroupTimeline.vue'
  import oiDefectUATShowChartTotal from '@/module/indicator/operational/test/defectUAT/comp/ShowChartTotal.vue'

  import oiDefectAverangeRetestTimeShowRule from '@/module/indicator/operational/test/defectAverangeRetestTime/comp/ShowRule.vue'
  import oiDefectAverangeRetestTimeShowAnalytic from '@/module/indicator/operational/test/defectAverangeRetestTime/comp/ShowAnalytic.vue'
  import oiDefectAverangeRetestTimeShowChartGroupTestManuf from '@/module/indicator/operational/test/defectAverangeRetestTime/comp/ShowChartGroupTestManuf.vue'
  import oiDefectAverangeRetestTimeShowChartGroupTimeline from '@/module/indicator/operational/test/defectAverangeRetestTime/comp/ShowChartGroupTimeline.vue'
  import oiDefectAverangeRetestTimeShowChartTotal from '@/module/indicator/operational/test/defectAverangeRetestTime/comp/ShowChartTotal.vue'

  export default {
    name: 'ShowData',

    components: {
      oiProductivityShowRule,
      oiProductivityShowAnalytic,
      oiProductivityShowChartGroupTestManuf,
      oiProductivityShowChartGroupTimeline,
      oiProductivityShowChartTotal,

      oiRejectionEvidenceShowRule,
      oiRejectionEvidenceShowAnalytic,
      oiRejectionEvidenceShowAnalyticTimeline,
      oiRejectionEvidenceShowChartGroupTestManuf,
      oiRejectionEvidenceShowChartGroupTimeline,
      oiRejectionEvidenceShowChartTotal,
      oiSelectionRejectionType,

      oiDefectUnfoundedShowRule,
      oiDefectUnfoundedShowAnalytic,
      oiDefectUnfoundedShowChartGroupTestManuf,
      oiDefectUnfoundedShowChartGroupTimeline,
      oiDefectUnfoundedShowChartTotal,

      oiDefectUATShowRule,
      oiDefectUATShowAnalytic,
      oiDefectUATShowChartGroupTestManuf,
      oiDefectUATShowChartGroupTimeline,
      oiDefectUATShowChartTotal,

      oiDefectAverangeRetestTimeShowRule,
      oiDefectAverangeRetestTimeShowAnalytic,
      oiDefectAverangeRetestTimeShowChartGroupTestManuf,
      oiDefectAverangeRetestTimeShowChartGroupTimeline,
      oiDefectAverangeRetestTimeShowChartTotal
    },

    computed: {
      ...mapState('indicatorTest', ['selectedProjects']),
      ...mapState('indicatorProductivity', { loadingProductivity: state => (state.loading) }),
      ...mapState('indicatorRejectionEvidence', { loadingRejectionEvidence: state => (state.loading || state.loadingTimeline) }),
      ...mapState('indicatorDefectUnfounded', { loadingDefectUnfounded: state => (state.loading) }),
      ...mapState('indicatorDefectUAT', { loadingdefectUAT: state => (state.loading) }),
      ...mapState('indicatorTestDefectAverangeRetestTime', { loadingdefectAverangeRetestTime: state => (state.loading) })
    },

    methods: {
      ...mapActions({'loadProductivity': 'indicatorProductivity/load'}),
      ...mapActions({'loadRejectionEvidence': 'indicatorRejectionEvidence/load'}),
      ...mapActions({'loadRejectionEvidenceTimeline': 'indicatorRejectionEvidence/loadTimeline'}),
      ...mapActions({'loadDefectUnfounded': 'indicatorDefectUnfounded/load'}),
      ...mapActions({'loaddefectUAT': 'indicatorDefectUAT/load'}),
      ...mapActions({'loaddefectAverangeRetestTime': 'indicatorTestDefectAverangeRetestTime/load'}),

      load () {
        this.loadProductivity()

        this.loadRejectionEvidence()
        this.loadRejectionEvidenceTimeline()

        this.loadDefectUnfounded()
        this.loaddefectUAT()
        this.loaddefectAverangeRetestTime()
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
      <li class="active"><a data-toggle="tab" href="#productivity" style="padding:4px">Produtividade</a></li>
      <li><a data-toggle="tab" href="#rejectionEvidence" style="padding:4px">Taxa Rejeição Evidência</a></li>
      <li><a data-toggle="tab" href="#defectUnfounded" style="padding:4px">Taxa Defeito Improcedente</a></li>
      <li><a data-toggle="tab" href="#defectUAT" style="padding:4px">Taxa Defeito UAT</a></li>
      <li><a data-toggle="tab" href="#defectAverangeRetestTime" style="padding:4px">Tempo Médio Reteste Defeito</a></li>
    </ul>

    <div class="tab-content">

      <div id="productivity" class="tab-pane fade in active" style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingProductivity" style="margin-top: 25px;margin-bottom: 25px"></div>        
        <div class="row" v-show="!loadingProductivity" style="margin:0; border:0; padding:0">
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
            <oiProductivityShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="rejectionEvidence" class="tab-pane fade" style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingRejectionEvidence" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingRejectionEvidence" style="margin:0; border:0; padding:0">
          <oiRejectionEvidenceShowRule style="text-align: left"/>
          <oiRejectionEvidenceShowAnalytic style="text-align: left"/>
          <oiRejectionEvidenceShowAnalyticTimeline style="text-align: left"/>

          <oiSelectionRejectionType/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiRejectionEvidenceShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiRejectionEvidenceShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiRejectionEvidenceShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="defectUnfounded" class="tab-pane fade"style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingDefectUnfounded" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingDefectUnfounded" style="margin:0; border:0; padding:0">
          <oiDefectUnfoundedShowRule style="text-align: left"/>
          <oiDefectUnfoundedShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiDefectUnfoundedShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiDefectUnfoundedShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiDefectUnfoundedShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="defectUAT" class="tab-pane fade"style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingdefectUAT" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingdefectUAT" style="margin:0; border:0; padding:0">
          <oiDefectUATShowRule style="text-align: left"/>
          <oiDefectUATShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiDefectUATShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiDefectUATShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiDefectUATShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="defectAverangeRetestTime" class="tab-pane fade"style="padding:0; margin:0; padding-top:5px;">
        <div class="loader" v-show="loadingdefectAverangeRetestTime" style="margin-top: 25px; margin-bottom: 25px"/>
        <div class="row" v-show="!loadingdefectAverangeRetestTime" style="margin:0; border:0; padding:0">
          <oiDefectAverangeRetestTimeShowRule style="text-align: left"/>
          <oiDefectAverangeRetestTimeShowAnalytic style="text-align: left"/>

          <hr style="margin-top: 2px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

          <div class="col-sm-4">
            <oiDefectAverangeRetestTimeShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <oiDefectAverangeRetestTimeShowChartGroupTimeline/>
          </div>
          <div class="col-sm-4">
            <oiDefectAverangeRetestTimeShowChartTotal/>
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
