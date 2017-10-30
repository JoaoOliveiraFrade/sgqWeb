selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiDefectUATShowAnalyticGrid from '@/module/indicator/operTest/defectUAT/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectUATShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectUATShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectUATShowAnalytic" title="Taxa Defeito UAT - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDefectUATShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
