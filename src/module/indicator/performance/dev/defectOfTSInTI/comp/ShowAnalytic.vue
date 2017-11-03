selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiShowAnalyticGrid from './ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiShowAnalyticGrid }
  }
</script>

<template>
  <span>
    <button style="padding:0px; margin-left:2px; padding-left:3px; padding-right:3px; margin-bottom:3px;"    
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#defectDensityShowAnalytic">
        Analítico
    </button>

    <oiModal id="defectDensityShowAnalytic" title="Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
  .fd-label {
    font-weight: normal;
    text-align: left
  }
</style>