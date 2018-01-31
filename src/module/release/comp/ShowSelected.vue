<script>
  import { mapState } from 'vuex'
  export default {
    name: 'releaseShowSelected',

    computed: {
      ...mapState('release', ['monoSelected'])
    }
  }
</script>

<template>
  <span v-show="Object.keys(monoSelected).length > 0">

    <div class="col-xs-12	col-sm-2 col-md-2	col-lg-1">
      <div>
        <label class="fd-label">Id:</label>
        <label class="fd-content">{{monoSelected.id}}</label>
      </div>
    </div>

    <div class="col-xs-12	col-sm-10 col-md-10	col-lg-5">
      <div>
        <label class="fd-label">Nome:</label>
        <label class="fd-content">{{monoSelected.name}}</label>
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
