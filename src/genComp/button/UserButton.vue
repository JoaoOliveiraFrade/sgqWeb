<script>
  export default {
    name: 'UserButton',

    props: {
      texts: { type: Object, default: { label: '', title: '' } }
    }
  }
</script>

<template>

  <button
    style="font-size: small; margin-top:2px" 
    class="btn btn-primary btn-xs"
    :title="texts.title"
    @click="$emit('click')">

    <span class="glyphicon glyphicon-user"/>
    
    <span style="font-weight: bold;">
      {{texts.label}}
    </span>

  </button>
  
</template>

<style scoped>
</style>
