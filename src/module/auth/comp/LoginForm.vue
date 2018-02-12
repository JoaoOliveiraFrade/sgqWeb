<script>
  import { mapState } from 'vuex'
  import oiButton from '@/genComp/link/button'

  // import Toastr from 'toastr'

  export default {
    name: 'LoginForm',

    components: { oiButton },

    computed: {
      ...mapState('auth', ['user']),

      isUserValid () {
        return this.user.login !== '' && this.user.cpf !== ''
      }
    }
  }
</script>

<template>

  <div class="container-fluid" style="margin-top:15px;">

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

        <oiButton
          icon="log-in"
          label="Logon"
          title="Autenticar"
          :disabled="!isUserValid"
          @click="$emit('onLogon', user)"
        />

      </div>
    </div>

  </div>

</template>

<style scoped>
</style>
