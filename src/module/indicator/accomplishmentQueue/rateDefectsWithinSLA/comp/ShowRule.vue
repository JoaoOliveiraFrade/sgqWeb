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
        data-target="#rateDefectsWithinSLAShowRule">
        Regra
    </button>
    <oiModal id="rateDefectsWithinSLAShowRule" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          <!--
          Quantidade de defeitos que perderam SLA, divididos pela quantidade total de Defeitos X 100.<br>
          <br>
          -->
          São considerados os defeitos CLOSE e de CONSTRUÇÃO, das etapas de TI, UAT, TRG e DEV.<br>
          <br>
          No Cálculo do SLA, são computados os tempos dos status IN_PROGESS, PENDENT (PROGRESS) e REOPEN.<br>
          <br>
          No gráfico Temporal, os defeitos são contabilizadas no mês/ano em que eles estiveram os status considerados.<br>
          <br>
          São desconsideradas as Fáb. de desenv. com o conteúdo: '', 'OI','LÍDER TÉCNICO', 'ÁREA DE NEGÓCIOS', 'ÁREA USUÁRIA', 'AUTOMAÇÃO', 'ENGENHARIA', 'OI (API)' e 'OI (APLICATIVO)'.<br>
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
