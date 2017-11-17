<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiLoginAuth from './Login.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'SelectionLogonLogoff',

    components: { oiModal, oiLoginAuth },

    data () {
      return {
        showModal: true
      }
    },

    computed: {
      ...mapGetters('auth', ['isLogged'])
    },

    methods: {
      ...mapActions['logOff'],

      exit () {
        console.log('sair')
        // document.getElemnetById('#modalSelectionButton').on('hidden.bs.modal')
        document.getElemnetById(this.$refs.vuemodal).modal().hide()
        // window.getElemnetById('#modalSelectionButton')
        //   .find('.btn-primary')
        //   .addClass('disabled').text('')
        //   .append('<i class="fa fa-spinner fa-spin"></i> Aguarde!')
      }
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <button v-show="!isLogged"
            type="button"     
            class="btn btn-xs"
            data-toggle="modal" 
            data-dismiss="modal"
            data-target="#modalSelectionButton"><span class="glyphicon glyphicon-user"/> Logon
        </button>

        <button v-show="isLogged"
            type="button"     
            class="btn btn-xs"
            @click="logOff"
        </button>

        <oiModal id="modalSelectionButton" ref="vuemodal" title="Autenticação">
          <oiLoginAuth slot="body"/>
        </oiModal>
    </span>
</template>

<style scoped>
  .icon {
    font-size: medium;
  }
</style>
