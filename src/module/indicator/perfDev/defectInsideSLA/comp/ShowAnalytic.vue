selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiDefectInsideSLAShowAnalyticGrid from '@/module/indicator/perfDev/DefectInsideSLA/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectInsideSLAShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
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
