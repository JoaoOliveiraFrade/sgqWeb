selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiRateDefectUatShowAnalyticGrid from '@/module/indicator/rateDefectUat/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiRateDefectUatShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#RateDefectUatShowAnalytic">
        Analítico
    </button>

    <oiModal id="RateDefectUatShowAnalytic" title="Taxa Defeito UAT - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRateDefectUatShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
