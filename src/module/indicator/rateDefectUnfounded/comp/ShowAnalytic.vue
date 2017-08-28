selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiRateDefectUnfoundedShowAnalyticGrid from '@/module/indicator/rateDefectUnfounded/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiRateDefectUnfoundedShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#RateDefectUnfoundedShowAnalytic">
        Analítico
    </button>

    <oiModal id="RateDefectUnfoundedShowAnalytic" title="Taxa Defeito Improcendente - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRateDefectUnfoundedShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
