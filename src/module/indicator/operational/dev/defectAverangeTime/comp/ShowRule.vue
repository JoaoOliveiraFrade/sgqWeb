<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

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
        data-target="#defectAverangeTimeShowRule">
        Regra
    </button>
    <oiModal id="defectAverangeTimeShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
<!--          
          Defeitos "Detectáveis em TS", divididos pelo Total de Defeitos.<br>
          <br>
          São considerados os defeitos: <br>
          &nbsp;&nbsp;1) Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;2) CLOSED.<br>
          &nbsp;&nbsp;3) De CONSTRUÇÃO.<br>
          <br>
          No gráfico Temporal, os defeitos são contabilizadas no mês/ano de fechamento.<br>
-->
          <b>Qte de hora útil / Qte de defeito.</b><br><br>

          São consideradas as horas de todos os Status e Agentes por onde o defeito passou.<br><br>

          São considerados os defeitos: <br>
          &nbsp;&nbsp;- Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;- CLOSED.<br>
          &nbsp;&nbsp;- Severidade HIGH.<br><br>

          No cálculo da "Qte de Hora útil", são consideradas as hora entre 9 às 18, exceto fins de semana.
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
