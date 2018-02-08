<script>
  export default {
    name: 'EnvelopeButton',

    props: {
      label: { type: String, default: 'E-mail' }
    }
  }
</script>

<template>

  <button
    style="font-size: small; margin-top:2px" 
    class="btn btn-primary btn-xs"
    :title="label"
    @click="$emit('click')">

    <span class="glyphicon glyphicon-envelope"/>

    <span style="font-weight: bold;">
      {{label}}
    </span>
    
  </button>
  
</template>

<style scoped>
</style>
