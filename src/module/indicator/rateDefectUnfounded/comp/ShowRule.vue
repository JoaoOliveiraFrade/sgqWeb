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
        data-target="#RateDefectUnfoundedShowRule">
        Regra
    </button>
    <oiModal id="RateDefectUnfoundedShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Quantidade de defeitos com status CANCELLED e origem IMPROCEDENTE, em relação a quantidade total de defeitos.<br>
          <br>
          São considerados somente os defeitos de TI.<br>
          <br>
          No gráfico Temporal, os defeitos improcedentes são contabilizadas no mês/ano mais recente em que eles foram alterados para IMPROCEDENTE.
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
