<script>
  import { mapGetters, mapActions } from 'vuex'

  import oiProductivityShowChartGroupTestManuf from '@/module/indicator/productivity/comp/ShowChartGroupTestManuf.vue'
  import oiProductivityShowChartGroupTimeline from '@/module/indicator/productivity/comp/ShowChartGroupTimeline.vue'
  import oiProductivityShowChartTotal from '@/module/indicator/productivity/comp/ShowChartTotal.vue'
  import oiProductivityShowRule from '@/module/indicator/productivity/comp/ShowRule.vue'
  import oiProductivityShowAnalytic from '@/module/indicator/productivity/comp/ShowAnalytic.vue'

  import oiRateEvidRejectedShowChartGroupTestManuf from '@/module/indicator/rateEvidRejected/comp/ShowChartGroupTestManuf.vue'
  import oiRateEvidRejectedShowChartGroupTimeline from '@/module/indicator/rateEvidRejected/comp/ShowChartGroupTimeline.vue'
  import oiRateEvidRejectedShowChartTotal from '@/module/indicator/rateEvidRejected/comp/ShowChartTotal.vue'
  import oiRateEvidRejectedShowRule from '@/module/indicator/rateEvidRejected/comp/ShowRule.vue'
  import oiRateEvidRejectedShowAnalytic from '@/module/indicator/rateEvidRejected/comp/ShowAnalytic.vue'

  export default {
    name: 'ShowData',

    computed: {
      ...mapGetters(['selectedProjects', 'produtivityLoading', 'rateEvidRejectedLoading'])
    },

    data () {
      return {
        typesRejects: [ { name: 'Técnica', hours: 16 }, { name: 'Cliente', hours: 8 }, { name: 'Todas', hours: 4 } ],
        typesRejectsSelected: 'Cliente'
      }
    },

    methods: {
      ...mapActions(['loadProdutivity', 'loadRateEvidRejected']),
      selectTypesRejects (typesRejectsSelected) {
        this.typesRejectsSelected = typesRejectsSelected
      }
    },

    components: {
      oiProductivityShowChartGroupTestManuf,
      oiProductivityShowChartGroupTimeline,
      oiProductivityShowChartTotal,
      oiProductivityShowRule,
      oiProductivityShowAnalytic,
      oiRateEvidRejectedShowChartGroupTestManuf,
      oiRateEvidRejectedShowChartGroupTimeline,
      oiRateEvidRejectedShowChartTotal,
      oiRateEvidRejectedShowRule,
      oiRateEvidRejectedShowAnalytic
    },

    watch: {
      'selectedProjects': {
        handler () {
          this.loadProdutivity()
          this.loadRateEvidRejected()
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
      <li><a data-toggle="tab" href="#rateUnfoundedDefectInd" style="padding:4px">Taxa Defeito Improcedente</a></li>
      <li><a data-toggle="tab" href="#rateUatDefectsInd" style="padding:4px">Taxa Defeito UAT</a></li>
      <li><a data-toggle="tab" href="#averageReTestTimeInd" style="padding:4px">Tempo Médio Re-Teste</a></li>
    </ul>

    <div class="tab-content">

      <div id="produtivity" class="tab-pane fade in active" style="padding:0; margin:0">
        <oiProductivityShowRule style="text-align: left"/>
        <oiProductivityShowAnalytic style="text-align: left"/>
        <hr style="margin:1px; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

        <div class="loader" v-show="produtivityLoading" style="margin-top: 25px;margin-bottom: 25px"></div>        
        <div class="row" v-show="!produtivityLoading" style="margin:0; border:0; padding:0">
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

      <div id="rateEvidRejected" class="tab-pane fade" style="padding:0; margin:0">
        <oiRateEvidRejectedShowRule style="text-align: left"/>
        <oiRateEvidRejectedShowAnalytic style="text-align: left"/>
        &nbsp;&nbsp;<label>Tipo:</label>
        <span v-for="i in typesRejects">
            <button style="margin:1px; border:0; padding:0; height: 19px; padding-left:4px; padding-right:4px"
                class="btn btn-xs"
                :class="(typesRejectsSelected === i.name) ? 'active btn-default' : ''" 
            >
              {{i.name}}
            </button>
        </span>
        <hr style="margin:0; height: 1px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

        <div class="loader" v-show="rateEvidRejectedLoading" style="margin-top: 25px;margin-bottom: 25px"></div>        
        <div class="row" style="margin:0; border:0; padding:0">
          <div class="col-sm-4">
            <oiRateEvidRejectedShowChartGroupTestManuf/>
          </div>
          <div class="col-sm-4">
            <!--<oRateEvidRejectedShowChartGroupTimeline/>-->
          </div>
          <div class="col-sm-4">
            <oiRateEvidRejectedShowChartTotal/>
          </div>
        </div>
      </div>

      <div id="rateUnfoundedDefectInd" class="tab-pane fade">
      </div>

      <div id="rateUatDefectsInd" class="tab-pane fade">
      </div>

      <div id="averageReTestTimeInd" class="tab-pane fade">
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
</style>
