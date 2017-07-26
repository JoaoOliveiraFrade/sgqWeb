<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiGridSelected from '@/module/project/comp/SelectionGridMult/GridSelected.vue'

  export default {
    name: 'SelectedButton',

    components: { oiModal, oiGridSelected }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <button 
            type="button"
            class="btn btn-xs"
            data-toggle="modal" 
            :data-target="'#modalShow' + idChild">Selecionado
        </button>

        <oiModal :id="'modalShow' + idChild">
        <div class="row" style="padding:0; margin:0; border:0" slot="header">
            <div class="col-xs-1" style="padding:0; margin:0; border:0">
            <a class="btn btn-primary btn-xs"   
                role="button"
                data-dismiss="modal">
                Fechar
            </a> 
            </div>
        
            <div class="col-xs-10" style="color: read; padding:0; margin:0; border:0; text-align: center">
            <label class="fd-label">{{title}} Selecionado</label>
            </div>
            
            <hr class="col-xs-12">
        </div>

        <oiGridSelected slot="body"/>

        </oiModal>
    </span>
</template>

<style scoped>
  .icon {
    font-size: medium;
  }
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    font-size: 13px; 
    white-space: normal;
  }
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  } 
</style>
