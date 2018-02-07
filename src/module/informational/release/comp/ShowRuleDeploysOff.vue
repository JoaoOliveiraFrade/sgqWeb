<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'ShowRuleDeploysOff',

    components: { oiModal }
  }
</script>

<template>

  <span style="text-align: left">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#ShowRuleDeploysOff">
        Regra
    </button>

    <oiModal id="ShowRuleDeploysOff" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          <b>Qte de entregas que Sobem Desligadas em relação à quantidade de entregas candidatadas.</b><br><br>
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
