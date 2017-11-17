<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiDefectAverangeRetestTimeShowAnalyticGrid from '@/module/indicator/operational/test/defectAverangeRetestTime/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectAverangeRetestTimeShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectAverangeRetestTimeShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectAverangeRetestTimeShowAnalytic" title="Tempo Médio Reteste Defeito - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDefectAverangeRetestTimeShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
