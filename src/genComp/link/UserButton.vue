<script>
  import oiButton from './Button.vue'

  export default {
    name: 'UserButton',

    extends: oiButton,

    components: { oiButton }
  }
</script>

<template>

  <oiButton ico="user"/>
  
</template>
