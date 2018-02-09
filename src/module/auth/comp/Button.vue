<script>
  import { mapGetters, mapActions } from 'vuex'

  import oiUserButton from '@/genComp/button/UserButton'

  export default {
    name: 'Button',

    components: { oiUserButton },

    computed: {
      ...mapGetters('auth', ['isLogged', 'buttonTexts'])
    },

    methods: {
      ...mapActions('auth', ['logoff']),

      logOnOff () {
        if (this.isLogged) {
          this.logoff()
        } else {
          this.$router.push({ name: 'LoginForm' })
        }
      }
    }
  }
</script>

<template>

    <span style="margin:0; border:0; padding:0">

      <oiUserButton
        :texts="buttonTexts"
        @click="logOnOff"
      />

    </span>

</template>
