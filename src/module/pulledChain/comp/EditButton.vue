<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiEdit from './Edit.vue'

  export default {
    name: 'EditButton',

    components: { oiModal, oiEdit },

    props: {
      project: { type: Object }
    },

    methods: {
      toValue (item) {
        let aux = { ...item }
        return aux
      }
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <a class='btn btn-xs my-tool-tip'
            title="Editar"
            style="padding:0;margin:0; text-right"
            data-toggle="modal"
            :data-target="'#modalEdit' + project.id">
            <span class="glyphicon glyphicon glyphicon-pencil icon"></span>
        </a>

        <oiModal :id="'modalEdit' + project.id">
            <span style="margin:0; border:0; padding:0" slot="header">
                <div class="col-xs-1" style="margin:0; border:0; padding:0; text-align: left">
                    <a class="btn btn-primary btn-xs"
                        role="button"
                        data-dismiss="modal">
                        Fechar
                    </a>
                </div>

                <div class="col-xs-10" style="margin:0; border:0; padding:0; text-align: center">
                    <label class="fd-label">Seleção do [projeto] {{project.subprojectDelivery}}</label>
                </div>

                <hr class="col-xs-12">
            </span>

            <oiEdit slot="body"
                :project="project"
                :projectVal="toValue(project)"
            />
    <!--
            <oiEdit
                :project="project"
                :projectVal="projectVal"
                @onSearchItem="searchItem"
            />
    -->        
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
