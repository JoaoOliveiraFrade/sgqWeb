<script>
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiProductivityShowAnalyticGrid from '@/module/indicator/operational/test/productivity/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowAnalytic',

    components: { oiModal, oiProductivityShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">

    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#productivityShowAnalytic">
        Analítico
    </button>

    <oiModal id="productivityShowAnalytic" title="Produtividade - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiProductivityShowAnalyticGrid/>
      </div>
    </oiModal>

  </span>
</template>

<style scoped>
</style>
