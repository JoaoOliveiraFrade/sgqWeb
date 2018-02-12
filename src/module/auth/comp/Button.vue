<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  // import oiUserButton from '@/genComp/button/UserButton'
  import oiButton from '@/genComp/link/Button'

  export default {
    name: 'Button',

    components: { oiButton },

    computed: {
      ...mapState('auth', ['user']),
      ...mapGetters('auth', ['isLogged'])
    },

    methods: {
      ...mapActions('auth', ['logoff']),

      logOnOff () {
        if (this.isLogged) {
          this.logoff()
        } else {
          this.$router.push({ name: 'login' })
        }
      }
    }
  }
</script>

<template>

    <span style="margin:0; border:0; padding:0">

      <oiButton
        icon="user"
        :label="isLogged ? user.name : 'Login'"
        :title="isLogged ? 'Sair' : 'Entrar'"
        @click="logOnOff"
      />

    </span>

</template>
