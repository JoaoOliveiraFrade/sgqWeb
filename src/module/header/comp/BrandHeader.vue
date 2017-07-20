<script>
  export default {
    name: 'BrandHeader'
  }
</script>

<template>
  <router-link :to="{ name: 'home' }">
    <img src="../../../asset/image/logoOrange.png" height="50" width="50"> 
    <img src="../../../asset/image/sgq.png" height="25" width="50" style="margin-top: 6px;">
  </router-link>  
</template>

<style scoped>
  a {
    white-space: nowrap;
    margin: 0;
    padding: 0;
    border: 0;
  }
  img {
    margin: 0;
    padding: 0;
    border: 0;
    margin-top: 0px;
    margin-left: 4px;
  }
</style>
