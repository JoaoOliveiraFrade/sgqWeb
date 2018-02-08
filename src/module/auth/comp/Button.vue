<script>
  import { mapGetters, mapActions } from 'vuex'

  import oiUserButton from '@/genComp/button/UserButton'

  export default {
    name: 'Button',

    components: { oiUserButton },

    computed: {
      ...mapGetters('auth', ['isLogged', 'buttonLabel'])
    },

    methods: {
      ...mapActions['logOff']
    }
  }
</script>

<template>

    <span style="margin:0; border:0; padding:0">

      <oiUserButton
        :label="buttonLabel"
        @click=""
      />

    </span>

</template>
