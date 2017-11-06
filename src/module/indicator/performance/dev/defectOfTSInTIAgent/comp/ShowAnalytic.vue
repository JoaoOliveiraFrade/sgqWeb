selected<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiDefectOfTSInTIAgentShowAnalyticGrid from '@/module/indicator/performance/dev/defectOfTSInTIAgent/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiDefectOfTSInTIAgentShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"    
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectOfTSInTIAgentShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectOfTSInTIAgentShowAnalytic" title="Taxa Defeito Dentro do SLA - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDefectOfTSInTIAgentShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
