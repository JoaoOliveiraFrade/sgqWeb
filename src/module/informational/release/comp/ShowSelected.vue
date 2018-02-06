<script>
  import { mapState } from 'vuex'
  import oiTestCompleted from '@/genComp/chart/release/TestCompleted'
  import oiShowRuleTestCompleted from './ShowRuleTestCompleted'

  import oiDeployOff from '@/genComp/chart/release/DeployOff'
  import oiRuleDeploysOff from './ShowRuleDeploysOff'

  export default {
    name: 'ShowSelected',

    components: { oiTestCompleted, oiShowRuleTestCompleted, oiDeployOff, oiRuleDeploysOff },

    computed: {
      ...mapState('informationalRelease', ['selectedMonoselection'])
    }
  }
</script>

<template>
  <div class="container-fluid">
    <!--
    <div class="col-xs-12 text-left" style="padding: 0px; padding-top: 5px">

      <a class="btn btn-xs my-tool-tip oi-icon"
        @click="requestReportGrouperConsult"
        data-toggle="modal"
        data-target="#showReport"
        title="Report Por Email">
        <span class="glyphicon glyphicon-envelope"></span>
      </a>
      <a class="btn btn-xs my-tool-tip oi-icon"
        @click="searchGrouperConsult"
        data-toggle="tooltip" 
        title="Pesquisa">
        <span class="glyphicon glyphicon-search"></span>
      </a>
    </div>
    -->

    <div class="col-xs-12 well well-sm oi-well">
      <div class="col-sm-1" style="margin:0; border:0; padding:5px" v-show="selectedMonoselection.type === 'STATUS'">
          <label class="fd-label">Farol:</label>
          <div class="text-left" style="padding-bottom:5px">
            <img alt="Farol Verde" src="../../../../asset/image/verde.png"  v-show="selectedMonoselection.trafficLight === 'VERDE'">
            <img alt="Farol Amarelo" src="../../../../asset/image/amarelo.png" v-show="selectedMonoselection.trafficLight === 'AMARELO'">
            <img alt="Farol Vermelho" src="../../../../asset/image/vermelho.png" v-show="selectedMonoselection.trafficLight === 'VERMELHO'">
          </div>
      </div>
      
      <div class="col-sm-8" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">Nome:</label>
        </div>
        <div>
          <label class="fd-content" v-html="selectedMonoselection.name"/>
        </div>
      </div>

      <!--
      <div class="col-sm-1" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">Previsto:</label>
        </div>
        <div>
          <label class="fd-content">{{grouperProjectsPlanned}} ({{Math.round(grouperProjectsPlanned / (grouperProjectsTotal > 0 ? grouperProjectsTotal : 1) * 100)}}%)</label>
        </div>
      </div>

      <div class="col-sm-1" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">Realizado:</label>
        </div>
        <div>
          <label class="fd-content">{{grouperProjectsRealized}} ({{Math.round(grouperProjectsRealized / (grouperProjectsTotal > 0 ? grouperProjectsTotal : 1) * 100)}}%)</label>
        </div>
      </div>      

      <div class="col-sm-1" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">GAP:</label>
        </div>
        <div>
          <label class="fd-content">{{(grouperProjectsPlanned - grouperProjectsRealized) < 0 ? 0 : grouperProjectsPlanned - grouperProjectsRealized}}</label>
        </div>
      </div>      
      -->

      <div class="col-xs-12" style="margin:0; border:0; padding:5px" v-show="selectedMonoselection.type === 'STATUS'">
        <div>
          <label class="fd-label">Resumo Executivo Agrupador:</label>
        </div>
        <div>
          <label class="fd-content" v-html="selectedMonoselection.executiveSummary ? selectedMonoselection.executiveSummary : 'Sem dados!'"/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 oi-col">
          <oiTestCompleted :value="{ qtyDefect: 10, qtyCt: 100, candidate: 46, testCompleted: 22, lowRiskProgress: 7, mediumRiskProgress : 8, highRiskProgress: 9 }"/>
          <oiShowRuleTestCompleted/>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 oi-col">
          <oiDeployOff :value="{ qtyDefect: 10, qtyCt: 100, candidate: 46, testCompleted: 22, lowRiskProgress: 7, mediumRiskProgress : 8, highRiskProgress: 9 }"/>
          <oiRuleDeploysOff/>
      </div>

      <!--
      <div class="col-xs-12" style="margin:0; border:0; padding:5px">
        <oiShowGridProject
          :items="grouperProjects"
        />
      </div>
      -->
    </div>
  </div>  
</template> 

<style scoped>
  div {
    margin:0; 
    border:0; 
    padding:0;
    padding-left:3px
  }
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
