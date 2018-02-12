<script>
  import { mapActions } from 'vuex'
  import oiModal from '@/genComp/modal/Modal2'
  import oiLoginForm from './LoginForm'

  // import Toastr from 'toastr'

  export default {
    name: 'LoginForm',

    components: { oiModal, oiLoginForm },

    methods: {
      closeModal () {
        console.log('closeModal')
        window.jQuery('#modalSelectionButton').modal('hide')
      },

      ...mapActions('auth', ['setTo', 'tryLogon']),

      logon (user) {
        console.log(user.cpf)
        this.tryLogon(user)
        window.jQuery('#modalSelectionButton').modal('hide')
      }
    },

    mounted () {
      this.setTo(this.$route.query.to)
      window.jQuery('#modalSelectionButton').modal('show')
    }
  }
</script>

<template>

  <oiModal id="modalSelectionButton" title="Autenticação" @onClose="closeModal">

    <oiLoginForm 
      slot="body"
      @onLogon="logon"
    />

  </oiModal>

</template>

<style scoped>
</style>
