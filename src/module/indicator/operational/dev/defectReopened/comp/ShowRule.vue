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
        data-target="#defectReopenedShowRule">
        Regra
    </button>
    <oiModal id="defectReopenedShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          <b>Qte de vezes em que o defeito passou pelo Status REOPEN / Qte de Defeito.</b><br><br>

          São considerados os defeitos: <br>
          &nbsp;&nbsp;1) Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;2) CLOSED.
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
