<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ShowSelected',

    computed: {
      ...mapState('testProj', ['selectedMonoselection'])
    }
  }
</script>

<template>
  <span v-show="Object.keys(selectedMonoselection).length > 0">
    <div class="col-xs-12	col-sm-2 col-md-2	col-lg-1">
      <div>
        <label class="fd-label">Projeto:</label>
        <label class="fd-content">{{selectedMonoselection.subprojectDelivery}}</label>
      </div>
    </div>

    <div class="col-xs-12	col-sm-10 col-md-10	col-lg-5">
      <div>
        <label class="fd-label">Nome:</label>
        <label class="fd-content">{{selectedMonoselection.name}}</label>
      </div>
    </div>

    <div class="col-xs-12	col-sm-6 col-md-6	col-lg-3">
      <div>
        <label class="fd-label">GP:</label>
        <label class="fd-content">{{selectedMonoselection.GP}}</label>
      </div>
    </div>

    <div class="col-xs-12	col-sm-6 col-md-6	col-lg-3">
      <div>
        <label class="fd-label">N3:</label>
        <label class="fd-content">{{selectedMonoselection.N3}}</label>
      </div>
    </div>

    <div class="col-xs-12">
      <div>
        <label class="fd-label">Objetivos (Clarity):</label>
        <label class="fd-content">{{selectedMonoselection.objective}}</label>
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
