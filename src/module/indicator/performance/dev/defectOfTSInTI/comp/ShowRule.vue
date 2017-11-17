<script>
  import oiModal from '@/comp/modal/Modal2.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span>
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"    
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectOfTSInTIShowRule">
        Regra
    </button>
    <oiModal id="defectOfTSInTIShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte Defeito de TS encontrado em TI / Qte Total Defeito.<br><br>

          São considerados os defeitos: <br>
          &nbsp;&nbsp;- Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;- CLOSED.<br>
          &nbsp;&nbsp;- CONSTRUÇÃO.<br><br>

          Os Defeitos de TS são identificados pelo campo “Erro Detectável Em Desenvolvimento” igual a SIM.
          Este campo é imputado manualmente no ALM.<br><br>

          No gráfico Temporal, os defeitos são contabilizadas no mês/ano de fechamento.
        </label>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
  .fd-label {
    font-weight: normal;
    text-align: left;
    color: gray;
  }
</style>
