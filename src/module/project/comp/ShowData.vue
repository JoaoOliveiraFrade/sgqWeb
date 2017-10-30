<script>
  import { mapState, mapGetters } from 'vuex'
  import oiChartDefectDensityTotal from '@/comp/chart/defect/DensityDefectTotal'
  import oiChartDefectAverangeTimeTotal from '@/comp/chart/defect/DefectAverangeTimeTotal'
  import oiChartDefectReopenedTotal from '@/comp/chart/defect/DefectReopenedTotal'
  import oiChartDefectOfTSInTITotal from '@/comp/chart/defect/DefectOfTSInTITotal'

  import oiChartProductivityTotal from '@/comp/chart/execution/ProductivityTotal'
  import oiChartRejectionEvidenceTotal from '@/comp/chart/test/rejectionEvidenceTotal'
  import oiChartDefectUnfoundedTotal from '@/comp/chart/defect/defectUnfoundedTotal'
  import oiChartDefectUATTotal from '@/comp/chart/defect/defectUATTotal'
  import oiChartDefectAverangeRetestTimeTotal from '@/comp/chart/defect/DefectAverangeRetestTimeTotal'

  import oiRulerOperDevDefectDensity from '@/module/indicator/operDev/defectDensity/comp/ShowRule'
  import oiRulerOperDevDefectAverangeTime from '@/module/indicator/operDev/defectAverangeTime/comp/ShowRule'
  import oiRulerOperDevDefectReopened from '@/module/indicator/operDev/defectReopened/comp/ShowRule'
  import oiRulerOperDevDefectOfTSInTI from '@/module/indicator/operDev/defectOfTSInTI/comp/ShowRule'

  import oiRulerOperTestProductivity from '@/module/indicator/operTest/productivity/comp/ShowRule'
  import oiRulerOperTestRejectionEvidence from '@/module/indicator/operTest/rejectionEvidence/comp/ShowRule'
  import oiRulerOperTestDefectUnfounded from '@/module/indicator/operTest/defectUnfounded/comp/ShowRule'
  import oiRulerOperTestDefectUAT from '@/module/indicator/operTest/defectUAT/comp/ShowRule'
  import oiRulerOperTestDefectAverangeRetestTime from '@/module/indicator/operTest/defectAverangeRetestTime/comp/ShowRule'

  import oiRulerPerfDevDefectDensity from '@/module/indicator/perfDev/defectDensity/comp/ShowRule'

  export default {
    name: 'ShowData',

    components: {
      oiChartDefectDensityTotal,
      oiChartDefectAverangeTimeTotal,
      oiChartDefectReopenedTotal,
      oiChartDefectOfTSInTITotal,
      oiChartProductivityTotal,
      oiChartRejectionEvidenceTotal,
      oiChartDefectUnfoundedTotal,
      oiChartDefectUATTotal,
      oiChartDefectAverangeRetestTimeTotal,

      oiRulerOperDevDefectDensity,
      oiRulerOperDevDefectAverangeTime,
      oiRulerOperDevDefectReopened,
      oiRulerOperDevDefectOfTSInTI,

      oiRulerOperTestProductivity,
      oiRulerOperTestRejectionEvidence,
      oiRulerOperTestDefectUnfounded,
      oiRulerOperTestDefectUAT,
      oiRulerOperTestDefectAverangeRetestTime,

      oiRulerPerfDevDefectDensity
    },

    computed: {
      ...mapState('project', ['selectedMonoselection']),
      // ...mapGetters('project', ['devDefectDensityTotal', 'perfDefectDensityTotal', 'defectAverangeTimeTotalHIGH'])
      // ...mapGetters('project', ['operDevDefectDensityTotal', 'operDevDefectAverangeTimeTotalHIGH', 'operDevDefectReopenedTotal', 'perfDevDefectDensityTotal'])
      ...mapGetters('project', [
        'operDevDefectDensityTotal',
        'operDevDefectAverangeTimeTotalHIGH',
        'operDevDefectReopenedTotal',
        'operDevDefectOfTSInTITotal',
        'operTestProductivityTotal',
        'operTestRejectionEvidenceTotal',
        'operTestDefectUnfoundedTotal',
        'operTestDefectUATTotal',
        'operTestDefectAverangeRetestTimeTotal',
        'perfDevDefectDensityTotal'
      ])
    }
  }
</script>

<template>
    <div v-show="Object.keys(selectedMonoselection).length > 0">

      <ul class="nav nav-tabs" style="margin-top:3px">
        <li class="active"><a data-toggle="tab" href="#Iteration" style="padding: 4px">Fitros</a></li>
        <li><a data-toggle="tab" href="#overview" style="padding: 4px">Visão Geral</a></li>
        <li><a data-toggle="tab" href="#monitoring" style="padding: 4px">Acompanhamento</a></li>
        <li><a data-toggle="tab" href="#defect" style="padding: 4px">Defeito</a></li>
        <li><a data-toggle="tab" href="#operacionalIndicator" style="padding: 4px">Ind. Operacional</a></li>
        <li><a data-toggle="tab" href="#performanceIndicator" style="padding: 4px">Ind. Desempenho</a></li>
      </ul>

      <div class="tab-content">

        <div id="Iteration" class="tab-pane fade in active">
          <div class="col-xs-12 text-left" style="margin:5px; border:0; padding:0; padding-top:10px">
          <!--
            <oiSelection
              idChild="iterationsFiltered"
              title="Iterations"
              :dataSource="iterationsActiveFull"
              :itemsSelected="iterationsFiltered"
              :isShowButtonSelected="false"
              @onChangeSelected="confirmIterations"
            />                      
          -->
          </div>              
        </div>

        <div id="overview" class="tab-pane fade" style="padding:5px; margin:0; text-align: center">

            <div class="row well" style="margin:0px; padding:0px">

              <div class="col-xs-12 col-sm-1 text-left">
                  <label class="fd-label">&nbspFarol</label>
                  <div class="text-left" style="padding-bottom:3px">
                    <img alt="Farol Verde" src="../../../asset/image/verde-sm.png"  v-show="selectedMonoselection.trafficLight === 'VERDE'">
                    <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="selectedMonoselection.trafficLight === 'AMARELO'">
                    <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="selectedMonoselection.trafficLight === 'VERMELHO'">
                  </div>
              </div>

              <div class="col-xs-12 col-sm-5 text-left">
                <div>
                  <label class="fd-label">Causa Raíz</label>
                </div>
                <div>
                  <label class="fd-content" v-html="selectedMonoselection.rootCause ? selectedMonoselection.rootCause : 'Sem dados!'"></label>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 text-left">
                <div>
                  <label class="fd-label">Plano de Ação</label>
                </div>
                <div>
                  <label class="fd-content" v-html="selectedMonoselection.actionPlan ? selectedMonoselection.actionPlan : 'Sem dados!'"></label>
                </div>
              </div>

            </div>

            <div class="well well-sm oi-well text-left">
              <div>
                <label class="fd-label">Resumo Executivo:</label>
              </div>
              <div>
                <label class="fd-content" v-html="selectedMonoselection.informative ? selectedMonoselection.informative : 'Sem dados!'"></label>
              </div>
            </div>

            <div class="well well-sm oi-well text-left">
              <div>
                <label class="fd-label">Pontos de Atenção:</label>
              </div>
              <div>
                <label class="fd-content" v-html="selectedMonoselection.attentionPoints ? selectedMonoselection.attentionPoints : 'Sem dados!'"></label>
              </div>
            </div>
                   
        </div>

        <div id="monitoring" class="tab-pane fade">
<!--        
            <div id="Acumulado" class="col-xs-12 col-lg-6 text-center" style="padding-top:10px">
                <label class="fd-label">Acumulado</label>
                <oiGridMonitAcum :dataSource="statusByProjectGroupDayTop5"/>
            </div>

            <div class="col-xs-12 col-lg-6 text-center" style="padding-top:10px">
                <label class="fd-label">Diário</label>
                <oiGridMonitDay :dataSource="statusByProjectGroupDayTop5"/>
            </div>

            <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
                <oiChartExecutionProject :dataSource="statusByProjectGroupMonth" title="Curva S"/>
            </div>

            <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
                <oiChartExecutionProject :dataSource="statusByProjectGroupDayTop30" title="Curva S dos últimos dias"/>
            </div>

            <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
                <oiChartProductivityXDefects
                  title = "Produtividade X Defeitos Abertos" 
                  :dataSource="productivityXDefects" 
                />
            </div>
            
            <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
                <oiChartProductivityXDefectsGroupWeekly
                  title = "Produtividade X Defeitos Abertos, Semanal" 
                  :dataSource="productivityXDefectsGroupWeekly" 
                />
            </div>
-->            
        </div>  

        <div id="defect" class="tab-pane fade">
<!--        
          <div class="col-xs-12 col-md-6 col-lg-4 text-center" style="margin:0; border:0; padding:0; padding-top:10px">
            <oiChartOpenedXClosedXCancelled 
              title = "Abertos X Fechados X Cancelados" 
              :defectStatus="defectStatus" 
            />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 text-center" style="margin:0; border:0; padding:0; padding-top:15px">
            <oiChartGroupOrigin 
              title = "Fechados Por Origem"
              :data = "defectGroupOrigin"
            />
          </div>

          <div class="col-xs-12 col-lg-4 text-center" style="margin:0; border:0; padding:0; padding-top:15px">
            <oiChartCtsImpactedXDefects 
              title = "CTs Impactados X Defeitos Abertos" 
              :dataSource="ctsImpactedXDefects" 
            />
          </div>

          <div id="defectsOpenInTestManuf" class="col-xs-12 col-lg-6 text-center" style="padding-top:10px" v-show="defectsOpenInTestManuf.length > 0">
            <label class="fd-label">Aberto na Fáb. Teste</label>
            <oiGridDefectsOpen 
              :project="project"
              :defects="defectsOpenInTestManuf"
              id="xpto1"
              @onSelectDefect="selectDefect"
            />
          </div>
          <div class="col-xs-12 col-lg-6 text-center" style="padding-top:10px" v-show="defectsOpenInDevManuf.length > 0">
            <label class="fd-label">Aberto na Fáb. Desenv.</label>
            <oiGridDefectsOpen 
              :project="project"
              :defects="defectsOpenInDevManuf"
              id="xpto2"
              @onSelectDefect="selectDefect"
            />
          </div>
-->
        </div>
        
        <div id="operacionalIndicator" class="tab-pane fade">
          <div class="row well well-sm oi-well text-center">
            <label class="fd-label">DESENVOLVIMENTO</label><br>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectDensityTotal :value="operDevDefectDensityTotal"/>
                <oiRulerOperDevDefectDensity/>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectAverangeTimeTotal :value="operDevDefectAverangeTimeTotalHIGH"/>
                <oiRulerOperDevDefectAverangeTime/>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectReopenedTotal :value="operDevDefectReopenedTotal"/>
                <oiRulerOperDevDefectReopened/>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectOfTSInTITotal :value="operDevDefectOfTSInTITotal"/>
                <oiRulerOperDevDefectOfTSInTI/>
            </div>
          </div>

          <div class="row well well-sm oi-well text-center">
            <label class="fd-label">TESTE</label><br>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
              <oiChartProductivityTotal :value="operTestProductivityTotal"/>
              <oiRulerOperTestProductivity/>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
              <oiChartRejectionEvidenceTotal :value="operTestRejectionEvidenceTotal"/>
              <oiRulerOperTestRejectionEvidence/>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
              <oiChartDefectUnfoundedTotal :value="operTestDefectUnfoundedTotal"/>
              <oiRulerOperTestDefectUnfounded/>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
              <oiChartDefectUATTotal :value="operTestDefectUATTotal"/>
              <oiRulerOperTestDefectUAT/>
            </div>
            
            <div class="col-xs-12 oi-col">
                <oiChartDefectAverangeRetestTimeTotal :value="operTestDefectAverangeRetestTimeTotal"/>
                <oiRulerOperTestDefectAverangeRetestTime/>
            </div>

<!--
            <oiChartDefectAverangeTimeTotal :value="DefectAverangeTimeTotal"/>
            <oichartDefectReopenedTotal :value="reopenedTotal"/>
            <oiChartdefectOfTSInTI :value="defectOfTSInTITotal"/>
-->

          </div>
        </div>

        <div id="performanceIndicator" class="tab-pane fade">
          <div class="row well well-sm oi-well text-center">
            <label class="fd-label">DESENVOLVIMENTO</label><br>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectDensityTotal :value="perfDevDefectDensityTotal"/>
                <oiRulerPerfDevDefectDensity/>
            </div>
<!--
            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectReopenedTotal :value="defectAverangeTimeTotalHIGH"/>
            </div>
            <oiChartDefectAverangeTimeTotal :value="DefectAverangeTimeTotal"/>
            <oichartDefectReopenedTotal :value="reopenedTotal"/>
            <oiChartdefectOfTSInTI :value="defectOfTSInTITotal"/>
-->
          </div>

          <div class="row well well-sm oi-well text-center">
            <label class="fd-label">TESTE</label><br>
<!--
            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectDensityTotal :value="defectDensityTotal"/>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 oi-col">
                <oiChartDefectAverangeTimeTotal :value="defectAverangeTimeTotalHIGH"/>
            </div>
            <oiChartDefectAverangeTimeTotal :value="DefectAverangeTimeTotal"/>
            <oichartDefectReopenedTotal :value="reopenedTotal"/>
            <oiChartdefectOfTSInTI :value="defectOfTSInTITotal"/>
-->
          </div>         

        </div>

      </div>
    </div>
</template>

<style scoped>

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
    font-weight: bold;
    font-size: 14px;
  }

  .oi-well {
    margin: 2px; 
    padding: 3px;
    padding-bottom: 0px
  }
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
