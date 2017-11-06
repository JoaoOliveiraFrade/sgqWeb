selected<script>
  import oiModal from '@/comp/modal/Modal2.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span>
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"
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

          Devido a necessidade de exibir este dados em uma régua de tempo, os defeitos foram totalizados no mês/ano da última execução de seu CT associado.
          Com isto, são considerados somente defeitos que tenham associação com CT.
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
