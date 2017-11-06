selected<script>
  import oiModal from '@/comp/modal/Modal2.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"    
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectInsideSLAShowRule">
        Regra
    </button>
    <oiModal id="defectInsideSLAShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte Agentes dentro do SLA / Qte total de Agentes.<br><br>

          São considerados os defeitos: <br>
          &nbsp;&nbsp;- Das etapas de TI, UAT, TRG e DEV.<br>
          &nbsp;&nbsp;- CLOSED.<br>
          &nbsp;&nbsp;- CONSTRUÇÃO.<br>
          &nbsp;&nbsp;- Status IN_PROGESS, PENDENT (PROGRESS) e REOPEN.<br><br>

          As Fáb. Desenvolvimento e Sistemas, são calculados a partir do Agente, Campo "Encaminhado Para".<br><br>

          No gráfico Temporal, os defeitos são contabilizadas no mês/ano em que eles estiveram no status considerados.<br><br>

          São desconsideradas as de Fáb.Desenv. com o conteúdo: '', 'OI','LÍDER TÉCNICO', 'ÁREA DE NEGÓCIOS', 'ÁREA USUÁRIA', 'AUTOMAÇÃO', 'ENGENHARIA', 'OI (API)' e 'OI (APLICATIVO)'.
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
