selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'

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
        data-target="#productivityShowRule">
        Regra
    </button>

    <oiModal id="productivityShowRule" title="Regra">   
      <div style="margin:0; padding:10px; text-align: left" slot="body">
        <label class="fd-label" style="font-weight: normal; text-align: left">
          Quantidade de Execuções (PASSED + FAILED) dos CTs de TI.
        </label>
      </div>
    </oiModal>

  </span>
</template>

<style scoped>
  .fd-label {
    font-weight: normal;
    text-align: left
  }
</style>
