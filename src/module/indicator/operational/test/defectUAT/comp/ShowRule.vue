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
        data-target="#defectUATShowRule">
        Regra
    </button>
    <oiModal id="defectUATShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label" style="font-weight: normal; text-align: left">
          Qte Defeitos de UAT / Qte Defeitos de TI e UAT.<br>
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
    text-align: left;
  }
</style