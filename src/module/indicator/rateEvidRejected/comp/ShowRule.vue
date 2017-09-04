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
        data-target="#RateEvidRejectedShowRule">
        Regra
    </button>
    <oiModal id="RateEvidRejectedShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Quantidade de REJEIÇÕES de Evidências em relação à quantidade de CTs (que contém evidências).<br>
          <br>
          São considerados somente os CTs de TI, com status PASSED.<br>
          <br>
          No gráfico Temporal, as rejeições são contabilizadas no mês/ano em que elas ocorreram.<br>
          <br>
          CTs com evidências, são os que contém o campo 'validação evidência' diferente de 'N/A'.
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
