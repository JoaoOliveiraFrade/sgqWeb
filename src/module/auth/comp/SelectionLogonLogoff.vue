<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiLoginAuth from './Login.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'SelectionLogonLogoff',

    components: { oiModal, oiLoginAuth },

    computed: {
      ...mapGetters(['isLogged'])
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <button v-show="!isLogged"
            type="button"     
            class="btn btn-xs"
            data-toggle="modal" 
            data-target="#modalSelectionButton">Logon
        </button>

        <button v-show="isLogged"
            type="button"     
            class="btn btn-xs"
            data-toggle="modal" 
            data-target="#modalSelectionButton">Logoff
        </button>

        <oiModal id="modalSelectionButton">
            <div class="row" style="margin:0; border:0; padding:0" slot="header">
                <div class="col-xs-1" style="padding:0; margin:0; border:0">
                  <a class="btn btn-primary btn-xs"   
                      role="button"
                      data-dismiss="modal">
                      Fechar
                  </a> 
                </div>
            
                <div class="col-xs-10" style="text-align: center">
                <label class="fd-label">Autenticação</label>
                </div>
                
                <hr class="col-xs-12" >
            </div>

            <oiLoginAuth slot="body"/>
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
