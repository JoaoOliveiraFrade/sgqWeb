selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiDefectUnfoundedShowAnalyticGrid from '@/module/indicator/operational/test/defectUnfounded/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectUnfoundedShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectUnfoundedShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectUnfoundedShowAnalytic" title="Taxa Defeito Improcendente - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDefectUnfoundedShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
