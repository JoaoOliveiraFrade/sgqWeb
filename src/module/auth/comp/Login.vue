<script>
  import Toastr from 'toastr'

  import { mapGetters, mapActions } from 'vuex'

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
      ...mapActions(['tryLogon', 'tryLoadProfiles']),

      logon () {
        this.tryLogon({...this.user})
          .then(() => {
            this.tryLoadProfiles(this.currentUser.id)

            document.getElementById('exit').click()

            if (this.to !== undefined) {
              this.$router.push('/' + this.to)
            } else {
              this.$router.push('/Home')
            }
          },
          e => {
            Toastr.error('Usuário não encontrado!', '', { timeOut: 1000 })
          })
      }
    },

    computed: {
      ...mapGetters(['currentUser']),

      isUserValid () {
        return this.user.login !== '' && this.user.cpf !== ''
      }
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
            @click.prevent="logon">Autenticar
          </button>
        </div>
      </div>

      <button id="exit" style="display: none;" data-dismiss="modal"/>
  </div>
</template>
