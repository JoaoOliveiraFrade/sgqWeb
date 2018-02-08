<script>
  export default {
    name: 'SearchButton',

    props: {
      label: { type: String, default: 'Pesquisa' }
    }
  }
</script>

<template>

  <button
    style="font-size: small; margin-top:2px" 
    class="btn btn-primary btn-xs"
    :title="label"
    @click="$emit('click')">

    <span class="glyphicon glyphicon-search"/>

    <span style="font-weight: bold;">
      {{label}}
    </span>

  </button>
  
</template>

<style scoped>
</style>
