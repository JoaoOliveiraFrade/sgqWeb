<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'ShowRuleLossRelease',

    components: { oiModal }
  }
</script>

<template>

  <span style="text-align: left">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#ShowRuleLossRelease">
        Regra
    </button>

    <oiModal id="ShowRuleLossRelease" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Qte de entregas que <b>Perderam Release</b> em relação à quantidade de entregas candidatadas.<br><br>
          Entregas que Perderam Release, são aquelas marcadas no SGQ, no Menu "Operacional / Entrega / Teste" opção Edição.
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
