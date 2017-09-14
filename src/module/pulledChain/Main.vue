<script>
  import { mapActions } from 'vuex'
  import oiShowGrid from './comp/ShowGrid.vue'
  import oiShowButtonChartCFD from './comp/ShowButtonChartCFD.vue'
  
  export default {
    name: 'pulledChainMain',

    components: { oiShowButtonChartCFD, oiShowGrid },

    data () {
      return {
        filterTerm: ''
      }
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('pulledChain', ['setFilterTerm'])
    },

    mounted () {
      this.setFeatureName('Cadeia Puxada')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
      <div class="row well well-sm oi-well">
        <div class="row">
          <div class="col-xs-7">
            <input type="text" id="Filter"
              autofocus v-focus
              class="form-control" 
              style="margin: 0; padding-left: 5px; height:25px;"
              placeholder="Informe os filtros! Exemplo: desenv+comit+nov/2017"
              v-model="filterTerm"
              @keyup="setFilterTerm(filterTerm)"
            />        
          </div>
          <div class="col-xs-1">
            <oiShowButtonChartCFD />
          </div>
        </div>
      </div>

      <oiShowGrid style="padding-top: 2px;"/>
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
