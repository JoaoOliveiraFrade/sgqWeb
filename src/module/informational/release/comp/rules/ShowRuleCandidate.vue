<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'ShowRuleCandidate',

    components: { oiModal }
  }
</script>

<template>

  <span style="text-align: left">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#ShowRuleCandidate">
        Regra
    </button>

    <oiModal id="ShowRuleCandidate" title="Regra">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
          Entregas candidatadas, são aquelas Associadas a Agrupadores no SGQ, através do Menu "Operacional / Agrupador".<br><br>
          O Agrupadores deverá ser do tipo "STATUS" e conter o padrão de nome "Release CCQ...".
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
