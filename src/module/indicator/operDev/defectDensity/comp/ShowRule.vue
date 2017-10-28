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
          Qte de Defeitos / Qte de CTs.<br>
          <br>
          São considerados os defeitos: <br>
          &nbsp;&nbsp;- Das etapas de TI e UAT<br>
          &nbsp;&nbsp;- CLOSED<br>
          &nbsp;&nbsp;- De CONSTRUÇÃO<br>
          <br>
          São considerados os CTs: <br>
          &nbsp;&nbsp;- Das etapas de TI e UAT<br>
          &nbsp;&nbsp;- PASSED<br>
          &nbsp;&nbsp;- Diferentes de MASSA<br>
          <br>
          No gráfico Temporal, os defeitos são contabilizados no mês/ano de fechamento. Já os Cts, são contabilizados no mês/ano da primeira execução PASSED.<br>
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
