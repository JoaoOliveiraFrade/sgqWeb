<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiLoginAuth from './comp/LoginAuth.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'MainAuth',

    components: { oiLoginAuth, oiModal },

    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['isLogged'])
    },
    methods: {
    }
  }
</script>

<template>
  <div class="container">
    <h3>Autenticação</h3><br>
    <oi-login-auth/>
  </div>
</template>

<style scoped>
</style>
