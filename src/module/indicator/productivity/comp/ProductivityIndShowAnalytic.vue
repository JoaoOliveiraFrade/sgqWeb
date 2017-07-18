selected<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiProductivityIndShowAnalyticGrid from '@/module/indicator/productivity/comp/ProductivityIndShowAnalyticGrid.vue'

  export default {
    name: 'ProdutivityIndShowAnalytic',

    components: { oiModal, oiProductivityIndShowAnalyticGrid }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button style="margin:0; border:0; padding:0; height: 19px; padding-left:4px; padding-right:4px"
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#ProdutivityIndShowAnalytic">Analítico
    </button>

    <oiModal id="ProdutivityIndShowAnalytic">
      <div style="margin:0; border:0; padding:0" slot="header">
        <div class="col-xs-1" style="padding:0; margin:0; border:0">
          <a class="btn btn-primary btn-xs"   
            role="button"
            data-dismiss="modal">
            Fechar
          </a> 
        </div>
      
        <div class="col-xs-10" style="text-align: center">
          <label class="fd-label">Analítico</label>
        </div>
        
        <hr class="col-xs-12" >
      </div>

      <div style="margin:0; padding:10px" slot="body">
        <oiProductivityIndShowAnalyticGrid/>
      </div>
    </oiModal> 
  </span>
</template>

<style scoped>
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  }   
</style>
