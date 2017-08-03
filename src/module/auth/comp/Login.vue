<script>
  import Toastr from 'toastr'

  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        user: {
          login: '',
          password: '',
          email: '',
          cpf: ''
        },
        to: ''
      }
    },

    mounted () {
      this.to = this.$route.query.to
    },
    methods: {
      ...mapActions(['tryLogon']),

      logon () {
        this.tryLogon({...this.user})
          .then(() => {
            Toastr.success('Logon realizado!', '', { timeOut: 3000 })
            if (this.to !== undefined) {
              this.$router.push('/' + this.to)
            } else {
              this.$router.push('/Home')
            }
          },
          e => {
            Toastr.error('Usuário não encontrado!', '', { timeOut: 3000 })
          })
      }
    },
    computed: {
      isUserValid () {
        return this.user.login !== '' && this.user.cpf !== ''
      }
    }
  }
</script>

<template>
  <div class="container">
      <div class="row">
        <div class="form-group">
          <label>Login</label>
          <input type="text" 
            class="form-control input-sm" 
            v-model="user.login"
            autofocus>
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label>CPF</label>
          <input type="text" 
            class="form-control input-sm" 
            v-model="user.cpf">
        </div>
      </div>

      <div class="row">
        <div class="form-group col-xs-12">
          <button
            :disabled="!isUserValid"
            class="btn btn-default btn-sm" 
            @click="logon">Autenticar
          </button>
        </div>
      </div>

  </div>
</template>
