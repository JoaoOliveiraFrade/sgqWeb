<script>
  import oiButton from '@/genComp/link/button.vue'
  import oiSendForm from './SendForm.vue'

  export default {
    name: 'Send',

    components: { oiButton },

    props: {
      url: { type: String },
      receiver: { type: String, default: '' },
      subject: { type: String, default: '' }
    },

    data () {
      return {
        format: ''
      }
    },

    methods: {
      closeModal () {
        console.log('closeModal')
        window.jQuery('#modalSelectionButton').modal('hide')
      },

      ...mapActions('auth', ['tryLogon']),

      send (user) {
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

    <oiSendForm 
      slot="body"
      @onSend="send"
    />    

  </oiModal>

</template>

<style scoped>
</style>
