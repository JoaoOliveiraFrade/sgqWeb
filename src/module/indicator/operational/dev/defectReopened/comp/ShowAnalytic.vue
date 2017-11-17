<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiShowAnalyticGrid from './ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiShowAnalyticGrid }
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

    <oiModal id="defectDensityShowAnalytic" title="Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiShowAnalyticGrid/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
