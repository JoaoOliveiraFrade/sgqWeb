selected<script>
  import oiChartProductivityIndTotal from '@/module/indicator/productivity/comp/ChartProductivityIndTotal.vue'
  import oiChartProductivityIndGroupTestManuf from '@/module/indicator/productivity/comp/ChartProductivityIndGroupTestManuf.vue'
  import oiChartProductivityIndGroupTimeline from '@/module/indicator/productivity/comp/ChartProductivityIndGroupTimeline.vue'

  import oiProductivityIndShowRule from '@/module/indicator/productivity/comp/ProductivityIndShowRule.vue'
  import oiProductivityIndShowAnalytic from '@/module/indicator/productivity/comp/ProductivityIndShowAnalytic.vue'

  import oiRateRejectionEvidenceIndShowRule from '@/module/indicator/rateRejectionEvidence/comp/RateRejectionEvidenceIndShowRule.vue'
  import oiRateRejectionEvidenceIndShowAnalytic from '@/module/indicator/rateRejectionEvidence/comp/RateRejectionEvidenceIndShowAnalytic.vue'

  export default {
    name: 'ShowDataIndicatorTest',

    components: {
      oiChartProductivityIndTotal,
      oiChartProductivityIndGroupTestManuf,
      oiChartProductivityIndGroupTimeline,
      oiProductivityIndShowRule,
      oiProductivityIndShowAnalytic,

      oiRateRejectionEvidenceIndShowRule,
      oiRateRejectionEvidenceIndShowAnalytic
    }
  }
</script>

<template>
  <div>
    <ul class="nav nav-tabs" style="margin-top:3px">
      <li class="active"><a data-toggle="tab" href="#produtivityInd" style="padding:4px">Produtividade</a></li>
      <li><a data-toggle="tab" href="#rateRejectionEvidenceInd" style="padding:4px">Taxa Rejeição Evidência</a></li>
      <li><a data-toggle="tab" href="#rateUnfoundedDefectInd" style="padding:4px">Taxa Defeito Improcedente</a></li>
      <li><a data-toggle="tab" href="#rateUatDefectsInd" style="padding:4px">Taxa Defeito UAT</a></li>
      <li><a data-toggle="tab" href="#averageReTestTimeInd" style="padding:4px">Tempo Médio Re-Teste</a></li>
    </ul>

    <div class="tab-content">

      <div id="produtivityInd" class="tab-pane fade in active" style="padding:0; margin:0; text-align: right">
        <oiProductivityIndShowRule style="text-align: left"/>
        <oiProductivityIndShowAnalytic style="text-align: left"/>

        <div class="row" style="margin:0; border:0; padding:0">
          <div class="col-sm-4">
            <oiChartProductivityIndGroupTestManuf/>
          </div>

          <div class="col-sm-4">
            <oiChartProductivityIndGroupTimeline/>
          </div>

          <div class="col-sm-4">
            <oiChartProductivityIndTotal/>
          </div>
        </div>
      </div>

      <div id="rateRejectionEvidenceInd" class="tab-pane fade" style="padding:0; margin:0; text-align: right">
        <oiRateRejectionEvidenceIndShowRule style="text-align: left"/>
        <oiRateRejectionEvidenceIndShowAnalytic style="text-align: left"/>

        <div class="row" style="margin:0; border:0; padding:0">
          <div class="col-sm-4">
            <oiChartProductivityIndGroupTestManuf/>
          </div>

          <div class="col-sm-4">
            <oiChartProductivityIndGroupTimeline/>
          </div>

          <div class="col-sm-4">
            <oiChartProductivityIndTotal/>
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
</style>
