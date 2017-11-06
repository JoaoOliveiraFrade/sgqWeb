selected<script>
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
        data-target="#rejectionEvidenceShowRule">
        Regra
    </button>
    <oiModal id="rejectionEvidenceShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte de Rejeições de Evidências / Qte de CTs.<br><br>

          São considerados os CTs: <br>
          &nbsp;&nbsp;- Da etapa de TI.<br>
          &nbsp;&nbsp;- PASSED.<br>
          &nbsp;&nbsp;- Que contém evidências.<br><br>

          CTs com evidências, são os que contém o campo "Validação Evidência" diferente de N/A.<br><br>

          São consideradas as rejeições Técnicas e as de Clientes.<br><br>

          No gráfico Temporal, as rejeições são contabilizadas no mês/ano em que elas ocorreram.

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
