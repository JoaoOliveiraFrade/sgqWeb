<script>
  import { mapState } from 'vuex'
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiShowSelected from '../ShowSelected.vue'

  export default {
    name: 'SelectedButton',

    components: { oiModal, oiShowSelected },

    computed: {
      ...mapState('bitiProj', ['selected'])
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0" v-show="Object.keys(selected).length > 0">
      <button style="margin-top:2px"
          type="button"
          class="btn btn-xs"
          data-toggle="modal" 
          data-target="#modalSelectedButton">Selecionada
      </button>

      <oiModal id="modalSelectedButton" title="Entrega Selecionada" size="l">
        <oiShowSelected slot="body"/>
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
