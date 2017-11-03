selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiDefectInsideSLAShowAnalyticGrid from '@/module/indicator/performance/dev/DefectInsideSLA/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectInsideSLAShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"    
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectInsideSLAShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectInsideSLAShowAnalytic" title="Taxa Defeito Dentro do SLA - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDefectInsideSLAShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
