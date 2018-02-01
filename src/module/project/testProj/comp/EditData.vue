<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ShowData',

    components: {
    },

    data () {
      return {
        colors: [
          { portugues: 'VERMELHO', ingles: 'color:red' },
          { portugues: 'VERDE', ingles: 'color:green' },
          { portugues: 'AMARELO', ingles: 'color:gold ' }
        ],

        config: {
          language: 'pt_br',
          events: {
            'froalaEditor.initialized': function () {
            }
          }
        },

        project: ''
      }
    },

    computed: {
      ...mapState('testProj', ['selectedMonoselection'])
    }
  }
</script>

<template>
    <div v-show="Object.keys(selectedMonoselection).length > 0" class="row well well-sm oi-well">

      <div class="row well-sm oi-well">
          <ul class="nav nav-tabs" style="margin-top:2px">
            <li class="active">
              <a data-toggle="tab" href="#trafficLight" style="padding: 3px 5px 3px 5px">Farol
                <img alt="Farol Verde" src="../../../../asset/image/verde-sm.png"  v-show="selectedMonoselection.trafficLight === 'VERDE'">
                <img alt="Farol Amarelo" src="../../../../asset/image/amarelo-sm.png" height="17" width="17" v-show="selectedMonoselection.trafficLight === 'AMARELO'">
                <img alt="Farol Vermelho" src="../../../../asset/image/vermelho-sm.png" height="17" width="17" v-show="selectedMonoselection.trafficLight === 'VERMELHO'">
              </a>
            </li>
            <li><a data-toggle="tab" href="#informative" style="padding: 3px 5px 3px 5px">Resumo Executivo</a></li>
            <li><a data-toggle="tab" href="#attentionPoints" style="padding: 3px 5px 3px 5px">Pontos de Atenção</a></li>
            <li><a data-toggle="tab" href="#attentionPointsOfindicator" style="padding: 3px 5px 3px 5px">Indicadores</a></li>
            <li><a data-toggle="tab" href="#iterationsActive" style="padding: 3px 5px 3px 5px">Filtros</a></li>
          </ul>

          <div class="tab-content">
            <div id="trafficLight" class="tab-pane fade in active" style="padding:0; margin:0; text-align: center">
                <div class="col-xs-12 oi-col">
                    <input type="radio" id="green" value="VERDE" v-model="selectedMonoselection.trafficLight">
                    <label for="green">Verde</label>

                    <input type="radio" id="yellow" value="AMARELO" v-model="selectedMonoselection.trafficLight">
                    <label for="yellow">Amarelo</label>

                    <input type="radio" id="red" value="VERMELHO" v-model="selectedMonoselection.trafficLight">
                    <label for="red">Vermelho</label>
                </div>

                <div class="col-xs-12 oi-col">
                    <label class="fd-label">Causa Raíz</label>
                    <!--
                    <textarea id="opiniao"
                      rows="5" name="opiniao" 
                      v-model="selectedMonoselection.rootCause"
                      wrap="hard">
                    </textarea>
                    -->
                    <froala :tag="'textarea'" :config="config" v-model="selectedMonoselection.rootCause"></froala>
                </div>

                <div class="col-xs-12 oi-col">
                    <label class="fd-label">Plano de Ação</label>
                    <!--
                    <textarea id="opiniao"
                      rows="5" name="opiniao" 
                      v-model="selectedMonoselection.actionPlan"
                      wrap="hard"> 
                    </textarea>
                    -->
                    <froala :tag="'textarea'" :config="config" v-model="selectedMonoselection.actionPlan"></froala>
                </div>
            </div>

            <div id="informative" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 oi-col">
                  <!--
                  <textarea id="opiniao" 
                    rows="10" name="opiniao" 
                    v-model="selectedMonoselection.informative"
                    wrap="hard">
                  </textarea>
                  -->
                  <froala :tag="'textarea'" :config="config" v-model="selectedMonoselection.informative"></froala>
              </div>
            </div>

            <div id="attentionPoints" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 oi-col">
                  <!--
                  <textarea id="opiniao"
                    rows="10" name="opiniao" 
                    v-model="selectedMonoselection.attentionPoints"
                    wrap="hard">
                  </textarea>
                  -->
                  <froala :tag="'textarea'" :config="config" v-model="selectedMonoselection.attentionPoints"></froala>
              </div>
            </div>

            <div id="attentionPointsOfindicator" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <!--
              <div class="col-xs-12 oi-col">
                  <label class="fd-label">Pontos de Atenção</label>
                  <textarea id="opiniao"
                    rows="5" name="opiniao" 
                    v-model="selectedMonoselection.attentionPointsOfindicator"
                    wrap="hard">
                  </textarea>
              </div>
              <div class="row">
                <label class="fd-label">Indicadores</label>
              </div>
              -->

              <!--
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
              -->

            </div>
            <div id="iterationsActive" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 text-left" style="margin:5px; border:0; padding:0; padding-top:10px">
                <!--
                <oiSelection
                  idChild="iterations"
                  title="Iterations Ativos"
                  :dataSource="iterations"
                  :itemsSelected="iterationsActive"
                  :showButtonSelected="false"
                  @onChangeSelected="ConfirmIterations"
                />  
                -->                            
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
    padding: 3px; 
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
    padding: 0; 
    font-weight: normal;
  }

  label[for="green"] {
    color: green;
  }

  label[for="yellow"] {
    color: yellow;
  }

  label[for="red"] {
    color: red;
  }

  textarea {
    min-width: 100%
  }

  img {
    margin-top: 4px;
    vertical-align: top;
    height: 12px;
    width: 12px;
  }  
</style>