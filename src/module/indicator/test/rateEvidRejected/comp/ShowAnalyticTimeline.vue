selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiRateEvidRejectedShowAnalyticGridTimeline from '@/module/indicator/test/rateEvidRejected/comp/ShowAnalyticGridTimeline.vue'

  export default {
    name: 'ShowAnalyticTimeline',

    components: { oiModal, oiRateEvidRejectedShowAnalyticGridTimeline }
  }
</script>

<template>
  <span style="padding:0; margin:0">

    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#RateEvidRejectedShowAnalyticTimeline">
        Analítico Timeline
    </button>

    <oiModal id="RateEvidRejectedShowAnalyticTimeline" title="Taxa Rejeição Evidência - Analítico - Timeline" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRateEvidRejectedShowAnalyticGridTimeline/>
      </div>
    </oiModal>

  </span>
</template>

<style scoped>
</style>
