<script>
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiDensityShowAnalyticGrid from './DensityShowAnalyticGrid.vue'

  export default {
    name: 'DensityShowAnalytic',

    components: { oiModal, oiDensityShowAnalyticGrid },

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
        data-target="#densityAnalyticalModal">
        Analítico
    </button>

    <oiModal id="densityAnalyticalModal" :title="title" size="l">   
      <div style="margin:0; padding:10px" slot="body">
        <oiDensityShowAnalyticGrid
          :dataSource="dataSource"
        />
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
