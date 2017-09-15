selected<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiShowChartCFD from './ShowChartCFD.vue'

  export default {
    name: 'ShowButtonChartCFD',

    components: { oiModal, oiShowChartCFD }
  }
</script>

<template>
  <div>
    <button  style="height:21px;"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#sfsdfsdsdf">
        <!--<span class="glyphicon glyphicon-object-align-bottom icon"></span>-->
        Gráfico CFD
    </button>

    <oiModal id="sfsdfsdsdf" title="Cadeia Puxada">   
      <div style="margin:0; padding:10px" slot="body">
        <oiShowChartCFD/>
      </div>
    </oiModal>
  </div>
</template>

<style scoped>
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    margin-bottom:0px;
    padding: 2px;
    height: 30px;
  }   
  .oi-col {
    padding: 3px;
    margin: 0;
    border: 0;
  }
</style>
