selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiRateDefectsWithinSLAShowAnalyticGrid from '@/module/indicator/accomplishment/rateDefectsWithinSLA/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiRateDefectsWithinSLAShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#rateDefectsWithinSLAShowAnalytic">
        Analítico
    </button>

    <oiModal id="rateDefectsWithinSLAShowAnalytic" title="Taxa Defeito Dentro do SLA - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiRateDefectsWithinSLAShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
