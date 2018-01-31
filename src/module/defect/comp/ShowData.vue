<script>
  import { mapState } from 'vuex'
  import oiShowDefectTime from './ShowTime.vue'

  export default {
    name: 'DefectShowData',

    components: { oiShowDefectTime },

    computed: {
      ...mapState('defect', 'selectedDefectDetail', 'selectedDefectTime')
    }
  }
</script>

<template>
  <div id="cabecalho" >
  <pre>{{selectedDefectDetail}}</pre>
    <div class="row well well-sm oi-well">
      <div class="col-xs-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Sub/Ent:</label><br>
          <label class="fd-content">{{selectedDefectDetail.subDel}}</label>
        </div>
      </div>

      <div class="col-xs-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Número:</label><br>
          <label class="fd-content">{{selectedDefectDetail.id}}</label>
        </div>
      </div>

      <div class="col-xs-8 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Nome:</label><br>
          <label class="fd-content">{{selectedDefectDetail.name}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">CT:</label><br>
          <label class="fd-content">{{selectedDefectDetail.CT}}</label>
        </div>
      </div>

      <div class="col-xs-10 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Nome CT:</label><br>
          <label class="fd-content">{{selectedDefectDetail.ctName}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Ciclo:</label><br>
          <label class="fd-content">{{selectedDefectDetail.cycle}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Sistema CT:</label><br>
          <label class="fd-content">{{selectedDefectDetail.ctSystem}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Sistema Defeito:</label><br>
          <label class="fd-content">{{selectedDefectDetail.defectSystem}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Fab.Desenv:</label><br>
          <label class="fd-content">{{selectedDefectDetail.devManuf}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Fab.Teste:</label><br>
          <label class="fd-content">{{selectedDefectDetail.testManuf}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Fila:</label><br>
          <label class="fd-content">{{selectedDefectDetail.queue}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Severidade:</label><br>
          <label class="fd-content">{{selectedDefectDetail.severity}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Origem:</label><br>
          <label class="fd-content">{{selectedDefectDetail.origin}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Status:</label><br>
          <label class="fd-content">{{selectedDefectDetail.status}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-8 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Natureza:</label>
          <label class="fd-content">{{selectedDefectDetail.nature}}</label>
        </div>
      </div>
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Detectável em Desenv.:</label><br>
          <label class="fd-content">{{selectedDefectDetail.defectOfTSInTI}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Abertura:</label><br>
          <label class="fd-content">{{selectedDefectDetail.dtOpening}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Prev. Solução:</label><br>
          <label class="fd-content">{{selectedDefectDetail.dtForecastingSolution}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Qte  Reopen:</label><br>
          <label class="fd-content">{{selectedDefectDetail.qtyReopened}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Qte  Impactado:</label><br>
          <label class="fd-content">{{selectedDefectDetail.qtyImpactedCTs}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Ping Pong:</label><br>
          <label class="fd-content">{{selectedDefectDetail.qtyPingPong}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Aging:</label><br>
          <label class="fd-content">{{selectedDefectDetail.agingFormat}}</label>
        </div>
      </div>
    </div>

    <div class="col-xs-12 text-left" style="margin:0; border:0; padding:0; padding-left:5px; margin-bottom: 10px">
      <oiShowDefectTime/>
    </div>

    <div class="col-xs-12 text-left" style="margin:0; border:0; padding:0; padding-left:5px; margin-bottom: 10px">
      <a class="btn btn-primary btn-xs" 
        role="button" 
        data-toggle="collapse" 
        href="#Comments" 
        style="margin-top:10px"
        aria-expanded="false" 
        aria-controls="collapseExample">
        Comentários
      </a>
      <div id="Comments" class="collapse" >
        <div class="well">
            <label class="fd-content" v-html="selectedDefectDetail.Comments"></label>
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
