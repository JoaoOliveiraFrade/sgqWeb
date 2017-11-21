<script>
  import { mapState } from 'vuex'
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiSelectionGrid from './SelectionGrid.vue'

  export default {
    name: 'SelectionButton',

    components: { oiModal, oiSelectionGrid },

    computed: {
      ...mapState('project', ['selectedMonoselection'])
    },

    mounted () {
      if (Object.keys(this.selectedMonoselection).length === 0) {
        this.$refs.buttonModal.click()
      }
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <button style="margin-top:2px"
            type="button"     
            ref="buttonModal"
            class="btn btn-xs"
            data-toggle="modal" 
            data-target="#modalSelectionProjectx">Seleção
        </button>
        <oiModal id="modalSelectionProjectx" ref="vuemodal" title="Seleção" size="l">
            <oiSelectionGrid slot="body"/>
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
