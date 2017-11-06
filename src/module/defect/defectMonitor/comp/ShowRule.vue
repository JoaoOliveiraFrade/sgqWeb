selected<script>
  import oiModal from '@/comp/modal/Modal2.vue'

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
        data-target="#defectAverangeRetestTimeShowRule">
        Regra
    </button>
    <oiModal id="defectAverangeRetestTimeShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Quantidade de Horas de Reteste de Defeitos em relação a quantidade de Defeitos.<br>
          <br>
          São considerados somente os defeitos de TI.<br>
          <br>
          São desconsiderados os defeitos com status CANCELLED.<br>
          <br>
          No gráfico Temporal, as horas são contabilizadas no mês/ano em que os defeitos estiveram em reteste.<br>
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
