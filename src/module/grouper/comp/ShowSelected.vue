<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ShowSelected',

    computed: {
      ...mapState('grouper', ['selected'])
    }
  }
</script>

<template>
  <span v-show="Object.keys(selected).length > 0">

    <div class="col-sm-1" style="margin:0; border:0; padding:5px" v-show="selected.type === 'STATUS'">
        <label class="fd-label">Farol:</label>
        <div class="text-left" style="padding-bottom:5px">
          <img alt="Farol Verde" src="../../../asset/image/verde.png"  v-show="selected.trafficLight === 'VERDE'">
          <img alt="Farol Amarelo" src="../../../asset/image/amarelo.png" v-show="selected.trafficLight === 'AMARELO'">
          <img alt="Farol Vermelho" src="../../../asset/image/vermelho.png" v-show="selected.trafficLight === 'VERMELHO'">
        </div>
    </div>
    
    <div class="col-sm-8" style="margin:0; border:0; padding:5px">
      <div>
        <label class="fd-label">Nome:</label>
      </div>
      <div>
        <label class="fd-content" v-html="selected.name"/>
      </div>
    </div>

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

    <div class="col-xs-12" style="margin:0; border:0; padding:5px" v-show="selected.type === 'STATUS'">
      <div>
        <label class="fd-label">Resumo Executivo Agrupador:</label>
      </div>
      <div>
        <label class="fd-content" v-html="selected.executiveSummary ? selected.executiveSummary : 'Sem dados!'"/>
      </div>
    </div>

  </span>    
</template> 

<style scoped>
  img {
    margin: 0; 
    border: 0; 
    padding: 0;
    vertical-align: top;
    height: 35px;
    width: 35px;
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
</style>
