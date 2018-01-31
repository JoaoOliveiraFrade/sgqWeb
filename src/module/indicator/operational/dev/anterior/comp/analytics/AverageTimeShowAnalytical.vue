<script>
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiAverangeTimeShowAnalyticGrid from './AverageTimeShowAnalyticalGrid.vue'

  export default {
    name: 'AverageTimeShowAnalytical',

    components: { oiModal, oiAverangeTimeShowAnalyticGrid },

    props: {
      title: {type: String},
      dataSource: {type: Array}
    }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#AverangeTimeAnalyticalModal">
        Analítico
    </button>

    <oiModal id="AverangeTimeAnalyticalModal" :title="title" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiAverangeTimeShowAnalyticGrid
          :dataSource="dataSource"
        />
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
