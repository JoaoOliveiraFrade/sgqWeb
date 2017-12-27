<script>
  import oiChartDensityDefectTotal from '@/comp/chart/defect/DensityDefectTotal'
  import oiChartDefectReopenedTotal from '@/comp/chart/defect/DefectReopenedTotal'
  import oiChartDefectAverangeTimeTotal from '@/comp/chart/defect/DefectAverangeTimeTotal'
  import oiChartdefectOfTSInTI from '@/comp/chart/defect/DefectOfTSInTITotal'
  import oiChartExecutionProject from '@/comp/chart/execution/CurvaS'
  import oiChartOpenedXClosedXCancelled from '@/comp/chart/defect/openedXClosedXCancelled'
  import oiChartGroupOrigin from '@/comp/chart/defect/groupOrigin'
  import oiChartCtsImpactedXDefects from '@/comp/chart/mix/ctsImpactedXDefects'
  import oiChartProductivityXDefects from '@/comp/chart/mix/productivityXDefects'
  import oiChartProductivityXDefectsGroupWeekly from '@/comp/chart/mix/productivityXDefectsGroupWeekly'

  import oiGridMonitAcum from './gridMonitAcum'
  import oiGridMonitDay from './gridMonitDay'
  import oiGridDefectsOpen from './gridDefectsOpen'

  export default {
    name: 'projectShowReport',

    components: {
      oiChartDensityDefectTotal,
      oiChartDefectReopenedTotal,
      oiChartDefectAverangeTimeTotal,
      oiChartdefectOfTSInTI,
      oiChartExecutionProject,
      oiGridMonitAcum,
      oiGridMonitDay,
      oiChartOpenedXClosedXCancelled,
      oiChartGroupOrigin,
      oiGridDefectsOpen,
      oiChartCtsImpactedXDefects,
      oiChartProductivityXDefects,
      oiChartProductivityXDefectsGroupWeekly
    },

    props: {
      project: { type: Object },
      densityDefectTotal: { type: Object },
      DefectAverangeTimeTotal: { type: Object },
      reopenedTotal: { type: Object },
      defectOfTSInTITotal: { type: Object },
      statusByProjectGroupDayTop5: { type: Object },
      statusByProjectGroupDayTop30: { type: Object },
      statusByProjectGroupMonth: { type: Object },
      defectStatus: { type: Array },
      defectGroupOrigin: { type: Array },
      defectsOpenInTestManuf: { type: Array },
      defectsOpenInDevManuf: { type: Array },
      ctsImpactedXDefects: { type: Array },
      productivityXDefects: { type: Array },
      productivityXDefectsGroupWeekly: { type: Array }
    }
  }
</script>

<template>
  <div id="projects" class="projects">
      <div id="cabecalho" class="row well well-sm oi-well" >
          <div class="col-xs-12 col-md-6" style="margin:0; border:0; padding:0; padding-left:5px">
            <div>
              <label class="fd-label">Projeto:</label>
              <label class="fd-content">{{project.subprojectDelivery}}</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-6" style="margin:0; border:0; padding:0; padding-left:5px">
            <div>
              <label class="fd-label">Nome:</label>
              <label class="fd-content">{{project.name}}</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-6" style="margin:0; border:0; padding:0; padding-left:5px">
            <br>
            <div>
              <label class="fd-label">GP:</label>
              <label class="fd-content">{{project.GP}}</label>
            </div>
          </div>

          <div class="col-xs-12 col-md-6" style="margin:0; border:0; padding:0; padding-left:5px">
            <div>
              <label class="fd-label">N3:</label>
              <label class="fd-content">{{project.N3}}</label>
            </div>
          </div>

          <div class="col-xs-12" style="margin:0; border:0; padding:0; padding-left:5px">
            <br>
            <div>
              <label class="fd-label" v-text="">Objetivos (Clarity):</label>
              <label class="fd-content" v-html="project.objective"/>
            </div>
          </div>
      </div>

      <div id="trafficLight" class="row well well-sm oi-well">
        <br>
        <div class="col-xs-1">
            <label class="fd-label">Farol &nbsp</label>
            <div class="text-center" style="padding-bottom:5px">
              <img alt="Farol Verde" src="../../../asset/image/verde.png"  v-show="project.trafficLight === 'VERDE'">
              <img alt="Farol Amarelo" src="../../../asset/image/amarelo.png" v-show="project.trafficLight === 'AMARELO'">
              <img alt="Farol Vermelho" src="../../../asset/image/vermelho.png" v-show="project.trafficLight === 'VERMELHO'">
            </div>
        </div>

        <div id="rootCause" class="col-xs-5">
          <div>
            <label class="fd-label">Causa Raíz</label>
          </div>
          <div>
            <label class="fd-content" v-html="project.rootCause ? project.rootCause : 'Sem dados!'"></label>
          </div>
        </div>

        <div id="actionPlan"class="col-xs-6">
          <div>
            <label class="fd-label">Plano de Ação</label>
          </div>
          <div>
            <label class="fd-content" v-html="project.actionPlan ? project.actionPlan : 'Sem dados!'"></label>
          </div>
        </div>
      </div>

      <div id="Informative_AttentionPoints" class="row well well-sm oi-well">
          <br>
          <div class="col-xs-6">
            <div id="Informative">
              <label class="fd-label">Resumo Executivo</label>
            </div>
            <div>
              <label class="fd-content" v-html="project.informative ? project.informative : 'Sem dados!'"></label>
            </div>
          </div>

          <div class="col-xs-6">
            <div id="AttentionPoints">
              <label class="fd-label">Pontos de Atenção</label>
            </div>
            <div>
              <label class="fd-content" v-html="project.attentionPoints ? project.attentionPoints : 'Sem dados!'"></label>
            </div>
          </div>
      </div>

      <div id="monitoring" class="row well well-sm oi-well">
          <div id="Acumulado" class="col-xs-12 col-lg-6 text-center" style="padding-top:10px">
              <label class="fd-label">Acumulado</label><br><br>
              <oiGridMonitAcum :dataSource="statusByProjectGroupDayTop5"/>
          </div>

          <div class="col-xs-12 col-lg-6 text-center" style="padding-top:10px">
              <label class="fd-label">Diário</label><br><br>
              <oiGridMonitDay :dataSource="statusByProjectGroupDayTop5"/>
          </div>
          
          <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
              <br>
              <oiChartExecutionProject :dataSource="statusByProjectGroupMonth" title="Curva S"/>
          </div>

          <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
              <br>
              <oiChartExecutionProject :dataSource="statusByProjectGroupDayTop30" title="Curva S dos últimos dias"/>
          </div>
      </div>  

      <div id="Indicadores" class="row well well-sm oi-well text-center">
          <div id="AttentionPointsInd" style="padding-top:10px">
             
              <label class="fd-label">Indicadores de Defeito</label><br>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="col-xs-6 col-md-3 oi-col">
                        <oiChartDensityDefectTotal :value="densityDefectTotal"/>
                      </div>

                      <div class="col-xs-6 col-md-3 oi-col">
                        <oiChartDefectAverangeTimeTotal :value="DefectAverangeTimeTotal"/>
                      </div>

                      <div class="col-xs-6 col-md-3 oi-col">
                        <oiChartDefectReopenedTotal :value="reopenedTotal"/>
                      </div>

                      <div class="col-xs-6 col-md-3 oi-col">
                        <oiChartdefectOfTSInTI :value="defectOfTSInTITotal"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>  

  </div>
</template>

<style scoped>
  .oi-well {
    margin: 2px; 
    padding: 0;
  }

  .oi-col {
    padding: 5px; 
    margin: 0; 
    border: 0;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding: 3px; 
    text-align: left;
    font-weight: normal;
  }

  img {
    margin: 0; 
    border: 0; 
    padding: 0;
    vertical-align: top;
    height: 35px;
    width: 35px;
  }
</style>
