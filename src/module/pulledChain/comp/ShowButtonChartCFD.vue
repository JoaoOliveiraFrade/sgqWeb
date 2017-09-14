selected<script>
  import { mapActions } from 'vuex'
  
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiShowChartCFD from './ShowChartCFD.vue'

  export default {
    name: 'ShowButtonChartCFD',

    components: { oiModal, oiShowChartCFD },

    methods: {
      ...mapActions('pulledChain', ['loadDataChartCFD'])
    }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        @click="loadDataChartCFD"
        data-toggle="modal" 
        data-target="#sfsdfsdsdf">
        Gráfico CFD
    </button>

    <oiModal id="sfsdfsdsdf" title="Gráfico CFD">   
      <div style="margin:0; padding:10px" slot="body">
        <oiShowChartCFD/>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
</style>
