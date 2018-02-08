<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'ShowRuleTestProgressLowRisk',

    components: { oiModal }
  }
</script>

<template>

  <span style="text-align: left">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#ShowRuleTestProgressLowRisk">
        Regra
    </button>

    <oiModal id="ShowRuleTestProgressLowRisk" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte de entregas <b>Em Testes</b> com <b>Risco Baixo</b> em relação à quantidade de entregas candidatadas.
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
