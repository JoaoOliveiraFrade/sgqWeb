<script>
  export default {
    name: 'SendButton',

    props: {
      label: { type: String, default: 'Enviar' }
    }
  }
</script>

<template>

  <button
    style="font-size: small; margin-top:2px" 
    class="btn btn-primary btn-xs"
    :title="label">

    <span class="glyphicon glyphicon-search"/>

    <span style="font-weight: bold;">
      {{label}}
    </span>
    
  </button>
  
</template>
