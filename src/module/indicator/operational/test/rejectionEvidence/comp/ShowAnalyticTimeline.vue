<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiRejectionEvidenceShowAnalyticGridTimeline from '@/module/indicator/operational/test/rejectionEvidence/comp/ShowAnalyticGridTimeline.vue'

  export default {
    name: 'ShowAnalyticTimeline',

    components: { oiModal, oiRejectionEvidenceShowAnalyticGridTimeline }
  }
</script>

<template>
  <span style="padding:0; margin:0">

    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#rejectionEvidenceShowAnalyticTimeline">
        Analítico Timeline
    </button>

    <oiModal id="rejectionEvidenceShowAnalyticTimeline" title="Taxa Rejeição Evidência - Analítico - Timeline" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRejectionEvidenceShowAnalyticGridTimeline/>
      </div>
    </oiModal>

  </span>
</template>

<style scoped>
</style>
