selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#rateDefectsWithinSLAShowRule">
        Regra
    </button>
    <oiModal id="rateDefectsWithinSLAShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Defeitos "Detectáveis em TS", divididos pelo Total de Defeitos.<br>
          <br>
          São considerados os defeitos: <br>
          &nbsp;&nbsp;1) Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;2) CLOSED.<br>
          &nbsp;&nbsp;3) De CONSTRUÇÃO.<br>
          <br>
          No gráfico Temporal, os defeitos são contabilizadas no mês/ano de fechamento.<br>
        </label>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
  .fd-label {
    font-weight: normal;
  }
</style>
