<script>
  import oiShowDefectTime from './ShowTime.vue'

  export default {
    name: 'DefectShowData',

    components: { oiShowDefectTime },

    props: {
      project: { type: Object },
      defect: { type: Object }
    }
  }
</script>

<template>
  <div id="cabecalho" >
    <div class="row well well-sm oi-well">
      <div class="col-xs-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Sub/Ent:</label><br>
          <label class="fd-content">{{defect.subDel}}</label>
        </div>
      </div>

      <div class="col-xs-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Número:</label><br>
          <label class="fd-content">{{defect.id}}</label>
        </div>
      </div>

      <div class="col-xs-8 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Nome:</label><br>
          <label class="fd-content">{{defect.name}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">CT:</label><br>
          <label class="fd-content">{{defect.CT}}</label>
        </div>
      </div>

      <div class="col-xs-10 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Nome CT:</label><br>
          <label class="fd-content">{{defect.ctName}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Ciclo:</label><br>
          <label class="fd-content">{{defect.cycle}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Sistema CT:</label><br>
          <label class="fd-content">{{defect.ctSystem}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Sistema Defeito:</label><br>
          <label class="fd-content">{{defect.defectSystem}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Fab.Desenv:</label><br>
          <label class="fd-content">{{defect.devManuf}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Fab.Teste:</label><br>
          <label class="fd-content">{{defect.testManuf}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Fila:</label><br>
          <label class="fd-content">{{defect.queue}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Severidade:</label><br>
          <label class="fd-content">{{defect.severity}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Origem:</label><br>
          <label class="fd-content">{{defect.origin}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Status:</label><br>
          <label class="fd-content">{{defect.status}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-8 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Natureza:</label>
          <label class="fd-content">{{defect.nature}}</label>
        </div>
      </div>
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Detectável em Desenv.:</label><br>
          <label class="fd-content">{{defect.defectOfTSInTI}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Abertura:</label><br>
          <label class="fd-content">{{defect.dtOpening}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Prev. Solução:</label><br>
          <label class="fd-content">{{defect.dtForecastingSolution}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Qte  Reopen:</label><br>
          <label class="fd-content">{{defect.qtyReopened}}</label>
        </div>
      </div>
    </div>

    <div class="row well well-sm oi-well">
      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Qte  Impactado:</label><br>
          <label class="fd-content">{{defect.qtyImpactedCTs}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Ping Pong:</label><br>
          <label class="fd-content">{{defect.qtyPingPong}}</label>
        </div>
      </div>

      <div class="col-xs-4 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
        <div>
          <label class="fd-label">Aging:</label><br>
          <label class="fd-content">{{defect.agingFormat}}</label>
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
            <label class="fd-content" v-html="defect.Comments"></label>
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
