<script>
  import { mapActions } from 'vuex'
  import oiGridShow from './comp/GridShow.vue'
  
  export default {
    name: 'pulledChainMain',

    components: { oiGridShow },

    data () {
      return {
        filterTerm: ''
      }
    },

    methods: {
      ...mapActions(['setFeatureName', 'setPulledChainFilterTerm'])
    },

    mounted () {
      this.setFeatureName('Cadeia Puxada')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
      <div class="row well well-sm oi-well" >
        <input type="text" id="Filter"
          autofocus
          class="form-control" 
          style="margin: 0; padding-left: 3px; height: 25px"
          placeholder="Informe os filtros! Exemplo: desenv+comit+nov/2017"
          v-model="filterTerm"
          @keyup="setPulledChainFilterTerm(filterTerm)"
        />        
      </div>

      <oiGridShow style="padding-top: 2px;"/>
  </div>
</template>

<style scoped>
  input {
     min-width: 100%
  }
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    border: 0;
    padding: 0;
  }
  .oi-icon {
    font-size: medium;
  }
</style>
