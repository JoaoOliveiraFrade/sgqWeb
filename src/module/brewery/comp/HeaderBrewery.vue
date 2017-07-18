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
  <div class="row card">

    <!--v-show="isShow(prop.name)"-->
    <div v-for="prop in properties" 
      :class="'col-xs-' + prop.columns" 
      :style="'font-size: 10px; margin: 0; padding: 0; border:0; text-align:' + prop.align">
      <a href="" @click.prevent="setOrder(prop.name)">
        <span class="glyphicon" :class="iconOrder(prop.name)"></span>
        {{prop.description}}
      </a>
    </div>

  </div>
</template>

<style lang="css" scoped>
  a {
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
  }

  .card {
    background-color: #f4f4f4;
    border: #ccc 0.5px solid;
    border-width: 0.1px;
    border-radius: 4px;
    padding: 2px;
    padding-left: 5px;
    margin: 0.7px;
  }

  .glyphicon {
    font-size: 0.8em;
  }
</style>
