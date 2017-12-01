<script>
  import { mapActions, mapState } from 'vuex'
  import oiShowGrid from './ShowGrid.vue'
  import oiShowButtonChartCFD from './ShowButtonChartCFD.vue'
  
  export default {
    name: 'pulledChainMain',

    components: { oiShowButtonChartCFD, oiShowGrid },

    computed: {
      ...mapState('pulledChain', ['loading', 'filterTerm'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('pulledChain', ['load', 'setFilterTerm'])
    },

    mounted () {
      this.setFeatureName('Cadeia Puxada')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="loader" v-show="loading" style="margin-top: 25px;margin-bottom: 25px"></div>
    
    <div v-show="!loading" >

      <div class="row">

        <div class="col-xs-7">
          <input type="text" id="Filter"
            autofocus v-focus
            class="form-control" 
            style="margin: 0; padding-left: 5px; height:25px;"
            placeholder="Informe os filtros! Exemplo: desenv+comit+nov/2017"
            :value="filterTerm"
            @keyup="setFilterTerm($event.target.value)"
          />
        </div>

        <div class="col-xs-1 oi-well" v-show="filterTerm !== ''">
          <button style="height:21px;"
              type="button"     
              class="btn btn-xs"
              @click="setFilterTerm('')">
              Limpar Filtros
          </button>
        </div>

        <div class="col-xs-1 oi-well">
          <button style="height:21px;"
              type="button"     
              class="btn btn-xs"
              @click="load">
              Refresh
          </button>
        </div>


        <div class="col-xs-1  oi-well">
          <oiShowButtonChartCFD/>
        </div>
    </div>

      <oiShowGrid style="margin-top: 3px"/>

    </div>

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

  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #e95420; /* Blue */
      border-bottom: 16px solid #e95420;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }  
</style>
