<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ShowData',

    components: {
    },

    computed: {
      ...mapState('projectBiti', ['selected'])
      // ...mapGetters('projectBiti', ['devDefectDensityTotal', 'PerfDevDefectDensityTotal', 'defectAverangeTimeTotalHIGH'])
      // ...mapGetters('projectBiti', ['operDevDefectDensityTotal', 'operDevDefectAverangeTimeTotalHIGH', 'operDevDefectReopenedTotal', 'perfDevDefectDensityTotal'])
      // ...mapGetters('project', [])
    }
  }
</script>

<template>
    <div v-show="Object.keys(selected).length > 0">

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
          </div>              
        </div>

        <div id="overview" class="tab-pane fade" style="padding:5px; margin:0; text-align: center">

            <div class="row well" style="margin:0px; padding:0px">

              <div class="col-xs-12 col-sm-1 text-left">
              </div>

              <div class="col-xs-12 col-sm-5 text-left">
              </div>

              <div class="col-xs-12 col-sm-6 text-left">
              </div>

            </div>

            <div class="well well-sm oi-well text-left">
            </div>

            <div class="well well-sm oi-well text-left">
            </div>
                   
        </div>

        <div id="monitoring" class="tab-pane fade">
        </div>  

        <div id="defect" class="tab-pane fade">
        </div>
        
        <div id="operacionalIndicator" class="tab-pane fade">
          <div class="row well well-sm oi-well text-center">
          </div>
        </div>

        <div id="performanceIndicator" class="tab-pane fade">
          <div class="row well well-sm oi-well text-center">
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
