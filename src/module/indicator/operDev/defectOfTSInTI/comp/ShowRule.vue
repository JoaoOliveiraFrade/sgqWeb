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
        data-target="#defectOfTSInTIShowRule">
        Regra
    </button>
    <oiModal id="defectOfTSInTIShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte de defeitos com campo “Erro Detectável Em Desenvolvimento” igual a SIM / Qte Total Defeitos.<br><br>

          São considerados os defeitos: <br>
          &nbsp;&nbsp;1) Das etapas de TI e UAT.<br>
          &nbsp;&nbsp;2) CLOSED.<br><br>

          Este campo é imputado manualmente no ALM.
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
