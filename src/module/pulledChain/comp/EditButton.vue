<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  
  import oiEdit from './Edit.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'EditButton',

    components: { oiModal, oiEdit },

    props: {
      project: {type: Object}
    },

    methods: {
      ...mapActions('pulledChain', ['setSelected'])
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <a class='btn btn-xs my-tool-tip'
            title="Editar"
            style="padding:0;margin:0; text-right"
            @click="setSelected(project)"
            data-toggle="modal"
            :data-target="'#modalEdit' + project.id">
            <span class="glyphicon glyphicon glyphicon-pencil icon"></span>
        </a>
        <oiModal :id="'modalEdit' + project.id" :title="'[Projeto] ' + project.subprojectDelivery + ' - ' + project.name" size="l">
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
