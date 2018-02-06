<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  import oiModal from '@/genComp/modal/Modal2.vue'
  import oiEditData from '../EditData.vue'

  export default {
    name: 'EditionButton',

    components: { oiModal, oiEditData },

    computed: {
      ...mapState('testProj', ['selectedMonoselection', 'state']),
      ...mapGetters('auth', ['isLogged'])
    },

    methods: {
      ...mapActions('testProj', ['setState'])
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0" v-show="Object.keys(selectedMonoselection).length > 0">

      <!--v-show="isLogged && state !== 'edit'"-->
      <button style="margin-top:2px" class="btn btn-xs"
        v-show="isLogged"
        data-toggle="modal"
        data-target="#modalEditionProject"
        title="Editar"
        @click="setState('edit')">

        <span class="glyphicon glyphicon-pencil"></span> Editar
      </button>

      <oiModal id="modalEditionProject" 
        title="Edição de Entrega"
        size="l"
        @onClose="setState('show')">

        <oiEditData slot="body"/>
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
