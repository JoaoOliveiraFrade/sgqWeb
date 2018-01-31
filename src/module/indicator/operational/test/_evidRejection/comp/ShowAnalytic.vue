<script>
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiRejectionEvidenceShowAnalyticGrid from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiRejectionEvidenceShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#rejectionEvidenceShowAnalytic">
        Analítico
    </button>

    <oiModal id="rejectionEvidenceShowAnalytic" title="Taxa Rejeição Evidência - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRejectionEvidenceShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
