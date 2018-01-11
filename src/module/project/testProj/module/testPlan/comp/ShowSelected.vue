<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ShowSelected',

    computed: {
      ...mapState('testPlan', ['selected'])
    }
  }
</script>

<template>
  <span v-show="Object.keys(selected).length > 0">

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">Ciclo:</label>
        <label class="fd-content">{{selected.cycle}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">Cenário:</label>
        <label class="fd-content">{{selected.scenario}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">CT:</label>
        <label class="fd-content">{{selected.testCase}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">Iteration:</label>
        <label class="fd-content">{{selected.Iteration}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">Macrocenário:</label>
        <label class="fd-content">{{selected.macrocenary}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">Sistema:</label>
        <label class="fd-content">{{selected.system}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">UAT:</label>
        <label class="fd-content">{{selected.uat}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">Pré Requisito:</label>
        <label class="fd-content">{{selected.prerequisite}}</label>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-1">
      <div>
        <label class="fd-label">CT Sucessor:</label>
        <label class="fd-content">{{selected.successorTestCase}}</label>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div>
        <label class="fd-label">Nome:</label>
        <label class="fd-content">{{selected.name}}</label>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div>
        <label class="fd-label">Descrição:</label>
        <label class="fd-content" v-html="selected.description"></label>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div>
        <label class="fd-label">Detalhamento Funcional:</label>
        <label class="fd-content">{{selected.functionalDetailing}}</label>
      </div>
    </div>

  </span>    
</template> 

<style scoped>
  div {
    margin:0; 
    border:0; 
    padding:0;
    padding-left:3px
  }
  .oi-well {
    margin: 2px; 
    padding: 0;
  }

  .oi-col {
    padding: 5px; 
    margin: 0; 
    border: 0;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding: 3px; 
    text-align: left;
    font-weight: normal;
  }

  img {
    margin: 0; 
    border: 0; 
    padding: 0;
    vertical-align: top;
    height: 35px;
    width: 35px;
  }
</style>
