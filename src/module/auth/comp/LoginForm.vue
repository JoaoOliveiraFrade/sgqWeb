<script>
  import { mapState, mapActions } from 'vuex'
  // import Toastr from 'toastr'

  export default {
    name: 'LoginForm',

    computed: {
      ...mapState('auth', ['user']),

      isUserValid () {
        return this.user.login !== '' && this.user.cpf !== ''
      }
    },

    methods: {
      ...mapActions('auth', ['setTo', 'tryLogon']),

      logon () {
        console.log('logon')
      }
    },

    mounted () {
      this.setTo(this.$route.query.to)
    }
  }
</script>

<template>

  <div class="container-fluid" style="margin-top:7px;">

    <div class="row">
        <div class="form-group">
            <label>Login</label>
            <input type="text" autofocus class="form-control input-sm" v-model="user.login">
        </div>
    </div>

    <div class="row">
        <div class="form-group">
            <label>CPF</label>
            <input type="text" class="form-control input-sm" v-model="user.cpf">
        </div>
    </div>

    <div class="row">
        <div class="form-group" style="text-align: center; margin-bottom:5px;">
            <button
            :disabled="!isUserValid"
            class="btn btn-default btn-xs" 
            @click.prevent="tryLogon(user)">Autenticar
            </button>
        </div>
    </div>

    <button id="exit" style="display: none;" data-dismiss="modal"/>

  </div>

</template>

<style scoped>
</style>
