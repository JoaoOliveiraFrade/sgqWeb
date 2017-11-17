<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'SelectionGrid',

    computed: {
      ...mapState('projectBiti', ['filterTerm']),
      ...mapGetters('projectBiti', ['dataFilteredByTerm'])
    },

    methods: {
      ...mapActions('projectBiti', ['setFilterTerm', 'setSelected'])

    //   selectProject: function () {
    //     // this.$emit('onConfirm', this.selected_)
    //   }
    }
  }
</script>

<template>
  <span>
    <!--
    <div class="loader" v-show="loading" style="margin-top: 25px;margin-bottom: 25px"></div>    
    <div v-show="!loading">
    -->
    
    <div>
      
      <input type="text"
        autofocus v-focus
        class="form-control" 
        style="margin: 0; padding-left: 3px; height: 25px"
        placeholder="Informe os filtros! Na pesq. de farol, digite a cor 'verd', 'amar' ou 'verm'. Ex: verd+multip+2017."
        :value="filterTerm"
        @keyup="setFilterTerm($event.target.value)"          
      />    
      
      <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:5px; padding-bottom:0; margin-top:3px">
        <thead>
            <tr>
                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
                  <font size="2px"></font>
                </th>                                

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

                <th style="padding: 1px; margin: 0px; border-top: 1px">
                    <font size="2px">Estado</font>
                </th>
                
                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center">
                    <font size="2" class="text-nowrap">Clas.
                        <a href="#" @click.prevent="setOrder('classification')">
                        </a>
                    </font>
                </th style="padding:0">
            </tr>
        </thead>

        <tbody v-for="item in dataFilteredByTerm">
            <tr>
                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px; border-radius: 3px;">
                  <a class="btn"
                    style="padding: 0px; margin: 0px; border-top: 1px"
                    data-toggle="tooltip"
                    data-dismiss="modal"
                    title="Selecionar" 
                    @click="setSelected(item)"
                  >
                    <i class='glyphicon glyphicon-list-alt'></i>
                  </a>
                </td>                

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center">
                    <font size="2px">{{item.subprojectDelivery}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">{{item.name}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px;">
                    <font size="2px">{{item.state}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center">
                    <font size="2px">{{item.classification}}</font>
                </td>
            </tr>
        </tbody> 
      </table>
    </div>
    
  </span>            
</template>

<style scoped>
  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 18px;
    width: 18px;
  }  
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }
  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-bottom: 16px solid #3498db;
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
