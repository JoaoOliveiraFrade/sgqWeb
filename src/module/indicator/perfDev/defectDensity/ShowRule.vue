selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span>
    <button style="padding:0px; padding-left:3px; padding-right:3px; margin-bottom:5px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectDensityShowRule">
        Regra
    </button>
    <oiModal id="defectDensityShowRule" title="Regra">   
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
          Qte de vezes em que os defeitos passaram pelo Status REOPEN / Qte Defeitos.<br><br>

          São considerados os defeitos: <br>
          &nbsp;&nbsp;1) Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;2) CLOSED.
        </label>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
  .fd-label {
    font-weight: normal;
    text-align: left;
  }
</style>
