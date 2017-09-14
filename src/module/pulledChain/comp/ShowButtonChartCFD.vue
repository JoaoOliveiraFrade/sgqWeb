selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  // import oiAverangeRetestHoursShowAnalyticGrid from '@/module/indicator/test/averangeRetestHours/comp/ShowAnalyticGrid.vue'

  export default {
    name: 'ShowButtonChartCFD',

    components: { oiModal }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#sfsdfsdsdf">
        Gráfico CFD
    </button>

    <oiModal id="sfsdfsdsdf" title="Tempo Médio Reteste Defeito - Analítico" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <!--<oiAverangeRetestHoursShowAnalyticGrid/>-->
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
