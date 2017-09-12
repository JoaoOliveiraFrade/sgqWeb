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
        data-target="#RateDefectUatShowRule">
        Regra
    </button>
    <oiModal id="RateDefectUatShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Quantidade de Defeitos de UAT em relação a quantidade de Defeitos de TI e UAT.<br>
          <br>
          São desconsiderados os defeitos com status CANCELLED.<br>
          <br>
          No gráfico Temporal, os defeitos de UAT são contabilizadas no mês/ano em que eles foram criados.<br>
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
