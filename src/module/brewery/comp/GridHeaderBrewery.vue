<script>
  export default {
    name: 'GridHeaderBrewery',

    props: {
      properties: { type: Array, required: true }
    },

    data () {
      return {
        propertiesToOrder: 'name',
        directionOrder: -1
      }
    },

    methods: {
      // isShow (property) {
      //   return this.properties.some(item => item.name === property)
      // },

      iconOrder (property) {
        if (this.propertiesToOrder !== property) {
          return 'glyphicon-sort'
        } else {
          if (this.directionOrder === -1) {
            return 'glyphicon-sort-by-attributes'
          } else {
            return 'glyphicon-sort-by-attributes-alt'
          }
        }
      },

      setOrder (property) {
        this.propertiesToOrder = property
        this.directionOrder = this.directionOrder * -1
        this.$emit('setOrder', this.propertiesToOrder, this.directionOrder)
      }
    }
  }
</script>

<template>
  <div class="card">
    <!--v-show="isShow(prop.name)"-->
    <div class="bordered"
      v-for="prop in properties" 
      :class="'col-xs-' + prop.columns" 
      :style="'text-align:' + prop.align">
      <a href=""
        @click.prevent="setOrder(prop.name)">
        <span class="glyphicon" :class="iconOrder(prop.name)"></span>
        {{prop.description}}
      </a>
    </div>

  </div>
</template>

<style scoped>
  a {
    font-weight: bold;
    text-decoration: none;
  }
  .card {
    font-size: 15px;
    background-color: #f4f4f4;
    border: #ccc 0.5px solid;
    margin-top: 4px;
    border-radius: 4px;
    height: 23px;
  }
  .bordered {
    border: 1px solid #ddd;
  }
</style>
