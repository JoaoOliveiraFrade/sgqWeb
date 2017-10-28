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
        data-target="#productivityShowRule">
        Regra
    </button>

    <oiModal id="productivityShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Quantidade de Execuções (PASSED + FAILED) de CTs de TI.
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
