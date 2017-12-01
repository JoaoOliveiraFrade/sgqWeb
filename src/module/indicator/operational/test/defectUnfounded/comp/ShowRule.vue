<script>
  import oiModal from '@/comp/modal/Modal2.vue'

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
        data-target="#defectUnfoundedShowRule">
        Regra
    </button>
    <oiModal id="defectUnfoundedShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          <b>Qte de defeito Improcedente / Qte total de defeito.</b><br><br>

          São considerados somente os defeitos de TI.<br><br>

          São considerados Improcedentes, os defeitos com Status CANCELLED e Origem igual a IMPROCEDENTE.<br><br>

          No gráfico Temporal, os defeitos improcedentes são contabilizadas no mês/ano mais recente em que eles foram alterados para Improcedente.
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
