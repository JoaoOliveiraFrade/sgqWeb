selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiProductivityShowAnalyticGrid from '@/module/indicator/productivity/comp/ShowAnalyticGrid.vue'

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
        data-target="#ProdutivityShowAnalytic">
        Analítico
    </button>

    <oiModal id="ProdutivityShowAnalytic" title="Produtividade - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiProductivityShowAnalyticGrid/>
      </div>
    </oiModal>

  </span>
</template>

<style scoped>
</style>
