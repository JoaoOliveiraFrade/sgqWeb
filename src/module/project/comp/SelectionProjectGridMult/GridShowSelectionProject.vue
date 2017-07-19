<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'projectSelectionGridMultEdit',

    data () {
      return {
        selected: []
      }
    },

    computed: {
      ...mapGetters(['projects', 'selectedProjects'])
    }
  }

</script>

<template>
  <span>
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
      <thead>
          <tr>
              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
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

      <tbody v-for="project in selectedProjects">
          <tr style="padding:0">
              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2">{{project.subprojectDelivery}}</font>
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
