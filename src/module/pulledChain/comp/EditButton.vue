<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiEdit from './Edit.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'EditButton',

    components: { oiModal, oiEdit },

    props: {
      project: {type: Object}
    },

    computed: {
      ...mapGetters(['pulledChainProjectSelected'])
    },

    methods: {
      ...mapActions(['setPulledChainProjectSelected']),

      select () {
        this.setPulledChainProjectSelected(this.project)
      }
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <a class='btn btn-xs my-tool-tip'
            title="Editar"
            style="padding:0;margin:0; text-right"
            @click="select"
            data-toggle="modal"
            :data-target="'#modalEdit' + pulledChainProjectSelected.id">
            <span class="glyphicon glyphicon glyphicon-pencil icon"></span>
        </a>

        <oiModal :id="'modalEdit' + pulledChainProjectSelected.id">
            <span style="margin:0; border:0; padding:0" slot="header">
                <div class="col-xs-1" style="margin:0; border:0; padding:0; text-align: left">
                    <a class="btn btn-primary btn-xs"
                        role="button"
                        data-dismiss="modal">
                        Fechar
                    </a>
                </div>

                <div class="col-xs-10" style="margin:0; border:0; padding:0; text-align: center">
                    <label class="fd-label" style="font-size: 12px; white-space: normal">[Projeto] {{pulledChainProjectSelected.subprojectDelivery}} - {{pulledChainProjectSelected.name}}</label>
                </div>

                <hr class="col-xs-12">
            </span>
            
            <oiEdit slot="body"/>
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
    color: gray;
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
