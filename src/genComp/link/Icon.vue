<script>
  export default {
    name: 'Icon',

    props: {
      icon: { type: String },
      title: { type: String, default: '' }
    }

  }
</script>

<template>
  
  <a :title="title" 
    @click="$emit('click')">
    <span class="glyphicon" :class="'glyphicon-' + icon"/>
  </a>                        

</template>

<style scoped>
  a {
    cursor: pointer;
    border: 0px;
    margin: 0px;
    padding: 0px;
  }
</style>
