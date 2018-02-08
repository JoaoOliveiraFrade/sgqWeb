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
        data-target="#ShowRuleTestCompleted">
        Regra
    </button>

    <oiModal id="ShowRuleTestCompleted" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          <b>Qte de entregas com testes finalizados em relação à quantidade de entregas candidatadas.</b><br><br>
          <b>Na área com entregas Em testes:</b><br>
          &nbsp;&nbsp;-&nbsp;<b style="color:#FFD700">AMARELO</b>: Risco Baixo<br>
          &nbsp;&nbsp;-&nbsp;<b style="color:#FF8C00">LARANJA</b>: Risco Médio<br>
          &nbsp;&nbsp;-&nbsp;<b style="color:#FF3300">VERMELHO</b>: Risco Alto
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
