<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ShowData',

    computed: {
      ...mapState('bitiProj', ['selected'])
      // ...mapGetters('bitiProj', ['devDefectDensityTotal', 'PerfDevDefectDensityTotal', 'defectAverangeTimeTotalHIGH'])
      // ...mapGetters('bitiProj', ['operDevDefectDensityTotal', 'operDevDefectAverangeTimeTotalHIGH', 'operDevDefectReopenedTotal', 'perfDevDefectDensityTotal'])
      // ...mapGetters('testProj', [])

    }
  }
</script>

<template>
    <div v-show="Object.keys(selected).length > 0">


      <ul class="nav nav-tabs" style="margin-top:3px">
        <li class="active"><a data-toggle="tab" href="#overview" style="padding: 4px">Geral</a></li>
        <li><a data-toggle="tab" href="#team" style="padding: 4px">Equipe</a></li>
        <li><a data-toggle="tab" href="#systems" style="padding: 4px">Sistemas</a></li>
        <li><a data-toggle="tab" href="#additionalInformation" style="padding: 4px">Inf. Complementares</a></li>
      </ul>

      <div class="tab-content">
<!--well well-sm oi-well text-left-->
        <div id="overview" class="tab-pane fade in active">

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Estado:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.state }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Classificação:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.classification }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">UN:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.un }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Release (SGQ):</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.releaseSGQFormat }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Release (Clarity):</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.releaseClarityFormat }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Categoria:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.category }}</label>
            </div>
          </div>                    

        </div>

        <div id="team" class="tab-pane fade">

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Gerente Projeto:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.projectManager }}</label>
            </div>
          </div>                    
        
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Lider Técnico:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.technicalLeader }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Gerente Lider Técnico:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.LTManager }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">PMO:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.PMO }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Analista Sistema:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.businessAnalyst }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Lider Teste Sistema:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.testLeader }}</label>
            </div>
          </div>                    

        </div>  

        <div id="systems" class="tab-pane fade">

          <div class="col-xs-12 well well-sm oi-well">
            <div>
              <label class="fd-label">Sistemas Desenvolvimento:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.systemsDev }}</label>
            </div>
          </div>                    

          <div class="col-xs-12 well well-sm oi-well">
            <div>
              <label class="fd-label">Sistemas Teste:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.systemsTest }}</label>
            </div>
          </div>                    

        </div>
        
        <div id="additionalInformation" class="tab-pane fade">

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Há Teste:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.hasTest }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Sist. Concl. no DSOL:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.finishedSystemsInDSOL }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Proposta Qualidade C/GO:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.qualityProposalWithGo }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Desenv. Solução Aprovada:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.approvedSolutionDrawing }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Cronograma Aprovado:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.scheduleApproved }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Pré Candidatura:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.preCandidature }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Candidatura:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.candidature }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Construção Finalizada:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.constructionCompleted }}</label>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Há GMUD:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.hasGMUD }}</label>
            </div>
          </div>          

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 well well-sm oi-well">
            <div>
              <label class="fd-label">Implantação Favorável:</label>
            </div>
            <div>
              <label class="fd-content">{{ selected.favorableOpinionImplantation }}</label>
            </div>
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
    margin: 0px; 
    padding: 3px;
    padding-bottom: 0px;
    height: 100%;
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
