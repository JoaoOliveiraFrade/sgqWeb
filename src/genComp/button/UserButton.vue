<script>
  export default {
    name: 'UserButton',

    props: {
      label: { type: String, default: '' }
    }
  }
</script>

<template>

  <button
    style="font-size: small; margin-top:2px" 
    class="btn btn-primary btn-xs"
    :title="label"
    @click="$emit('click')">

    <span class="glyphicon glyphicon-user"/>
    
    <span style="font-weight: bold;">
      {{label}}
    </span>

  </button>
  
</template>

<style scoped>
</style>
