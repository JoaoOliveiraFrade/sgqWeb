<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'ShowRuleTestCompleted',

    components: { oiModal }
  }
</script>

<template>

  <span style="text-align: left">
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
          <b>Qte de entregas com os testes finalizados, em relação a quantidade de entregas candidatadas.</b><br><br>
          Área VERDE, ref. as entregas c/testes em andamento, c/risco Baixo<br>
          Área AMARELO, ref. as entregas c/testes em andamento, c/risco Médio<br>
          Área VERMELHO, ref. as entregas c/testes em andamento, c/risco Alto
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
