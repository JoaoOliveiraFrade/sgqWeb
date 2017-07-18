<script>
  export default {
    name: 'GridDetailBrewery',

    props: {
      properties: { type: Array, required: true },
      item: { type: Object, required: true }
    }

    // methods: {
    //   isShow (property) {
    //     return this.properties.some(item => item.name === property)
    //   }
    // }
  }
</script>

<template>
  <div class="row card">
    <!--v-show="isShow(prop.name)"-->
    <div v-for="prop in properties"
      class="item"
      :class="'col-xs-' + prop.columns" 
      :style="'text-align:' + prop.align">
      {{item[prop.format]}}
    </div>

  </div>
</template>

<style lang="css" scoped>
  .card {
    margin: 0px;
    padding: 2px;
    background-color: #f4f4f4;
    border: #ccc solid;
    border-width: 1px;
    border-radius: 4px;
  }
  .item {
    font-size: 11px; 
    padding: 0px; 
    margin: 0px; 
    border: 0px; 
    padding-left: 3px;
  }
</style>
