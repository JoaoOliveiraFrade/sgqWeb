<script>
  export default {
    name: 'Button',

    props: {
      icon: { type: String },
      label: { type: String, default: '' },
      title: { type: String, default: '' }
    },

    computed: {
      title_ () {
        return this.title !== '' ? this.title : this.label
      }
    }
  }
</script>

<template>

  <button
    style="font-size: small; margin-top:2px" 
    class="btn btn-primary btn-xs"
    :title="title_"
    @click="$emit('click')">

    <span class="glyphicon" :class="'glyphicon-' + icon"/>
    
    <span style="font-weight: bold;">
      {{label}}
    </span>

  </button>
  
</template>

<style scoped>
</style>
