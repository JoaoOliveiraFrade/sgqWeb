<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiSelectedGrid from './SelectedGrid.vue'

  export default {
    name: 'SelectedButton',

    props: {
      selected: { type: Array }
    },

    components: { oiModal, oiSelectedGrid }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <button 
            type="button"
            class="btn btn-xs"
            data-toggle="modal" 
            data-target="#modalSelectedButton">Selecionado
        </button>
        <oiModal id="modalSelectedButton" title="Projeto Selecionado" size="l">
          <oiSelectedGrid :selected="selected" slot="body"/>
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
