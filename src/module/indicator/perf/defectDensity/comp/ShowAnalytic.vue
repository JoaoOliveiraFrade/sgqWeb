selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiDefectDensityShowAnalyticGrid from './ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectDensityShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectDensityShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectDensityShowAnalytic" title="Densidade Defeito - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDefectDensityShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
