<script>
  import oiButton from './Button.vue'

  export default {
    name: 'SearchButton',

    extends: oiButton,

    components: { oiButton }
  }
</script>

<template>

  <oiButton
    ico="search"
  />
  
</template>
