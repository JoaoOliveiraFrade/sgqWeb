<script>
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiSelectionGrid from './SelectionGrid.vue'

  export default {
    name: 'SelectionButton',

    components: { oiModal, oiSelectionGrid },

    props: {
      projects: { type: Array },
      selected: { type: Array }
    },

    methods: {
      confirm (parameter) {
        this.$emit('onConfirm', parameter)
      }
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <!--
        <button v-show="isLogged"
            type="button"     
            class="btn btn-xs"
            @click="logOff"
        </button>
        -->
        <button 
            type="button"     
            class="btn btn-xs"
            data-toggle="modal" 
            data-target="#modalSelectionProject">Seleção
        </button>        
        <oiModal id="modalSelectionProject" ref="vuemodal" title="Seleção de Entrega" size="l">
            <oiSelectionGrid 
                slot="body"
                :projects="projects"
                :selected="selected"
                @onConfirm="confirm"
            />
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
    .oiModal { /* Width */
        max-width: 95%;
        width: auto !important;
    }  
</style>
