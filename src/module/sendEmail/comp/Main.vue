<script>
  import oiLoginAuth from './Login.vue'

  export default {
    name: 'Main',

    components: { oiLoginAuth }
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
