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
          Defeitos (CLOSED de CONSTRUÇÃO) divididos pelos CTs (PASSED diferentes de MASSA), multiplicado por 100.<br>
          <br>
          São considerados somente defeitos e CTs das etapas de TI e UAT.<br>
          <br>
          No gráfico Temporal, os defeitos são contabilizadas no mês/ano de fechamento. Já os Cts, são contabilizadas no mês/ano da primeira execução PASSED.<br>
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
