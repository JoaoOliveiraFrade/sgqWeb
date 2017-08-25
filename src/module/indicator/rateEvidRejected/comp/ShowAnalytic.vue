selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiRateEvidRejectedShowAnalyticGrid from '@/module/indicator/rateEvidRejected/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiRateEvidRejectedShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">

    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#RateEvidRejectedShowAnalytic">
        Analítico
    </button>

    <oiModal id="RateEvidRejectedShowAnalytic" title="Taxa Rejeição Evidência - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRateEvidRejectedShowAnalyticGrid/>
      </div>
    </oiModal>

  </span>
</template>

<style scoped>
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  }   
</style>
