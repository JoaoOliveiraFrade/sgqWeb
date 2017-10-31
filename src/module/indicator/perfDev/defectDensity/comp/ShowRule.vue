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
        data-target="#defectInsideSLAShowRule">
        Regra
    </button>
    <oiModal id="defectInsideSLAShowRule" title="Regra">   
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
          &nbsp;&nbsp;- PASSED<br>
          &nbsp;&nbsp;- Diferentes de MASSA<br>
          <br>
          No gráfico Temporal, os defeitos são contabilizados no mês/ano de fechamento. Já os Cts, são contabilizados no mês/ano da primeira execução PASSED.<br>
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
</style>