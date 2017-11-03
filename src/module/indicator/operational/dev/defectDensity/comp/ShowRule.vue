selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span >
    <button style="padding:0px; padding-left:3px; padding-right:3px; margin-bottom:5px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectDensityShowRule">
        Regra
    </button>
    <oiModal id="defectDensityShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte de Defeitos / Qte de CTs.<br>
          <br>
          São considerados os defeitos: <br>
          &nbsp;&nbsp;- Das etapas de TI e UAT<br>
          &nbsp;&nbsp;- CLOSED<br>
          &nbsp;&nbsp;- De CONSTRUÇÃO<br>
          <br>
          São considerados os CTs: <br>
          &nbsp;&nbsp;- Das etapas de TI e UAT<br>
          &nbsp;&nbsp;- Diferentes de CANCELLED e NO RUN<br>
          &nbsp;&nbsp;- Diferentes de MASSA<br>
          <br>

          Devido a necessidade de exibir este dados em uma régua de tempo, os defeitos foram totalizados no mês/ano de execução dos CTs. 
          Com isto, são considerados somente defeitos associados a CTs.
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
