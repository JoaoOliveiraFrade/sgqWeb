<script>
  export default {
    name: 'SelectedGrid',

    props: {
      selected: { type: Array }
    }
  }

</script>

<template>
  <span>
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-top:8px; margin-bottom:10px">
      <thead>
          <tr>
              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center">
                  <font size="2" class="text-nowrap">Proj.
                      <a href="#" @click.prevent="setOrder('project')">
                      </a>
                  </font>
              </th>
              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2" class="text-nowrap">Nome
                      <a href="#" @click.prevent="setOrder('name')">
                      </a>
                  </font>
              </th>
          </tr>
      </thead>

      <tbody v-for="project in selected">
          <tr style="padding:0">
              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center">
                  <font size="2">{{project.subDel}}</font>
              </td style="padding:0">

              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2">{{project.name}}</font>
              </td style="padding:0">
          </tr>
      </tbody> 
    </table>
 </span>            
</template>

<style scoped>
  .oi-well {
    margin: 0;
    border: 0;
    padding: 0px;
  }
  .oi-col {
    padding: 3px; 
    margin: 0; 
    border: 0;
  }  
  .oi-message {
    margin: 0; 
    margin-left: 10px; 
    vertical-align: middle;
    font-size: 12px;
    font-weight: normal;
  }
  label { list-style-type: decimal; }  

  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }  
</style>
