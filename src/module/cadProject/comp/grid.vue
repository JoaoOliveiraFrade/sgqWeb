<script>
  export default {
    name: 'cadProjectsGrid',

    props: {
      dataSource: {type: Array}
    },

    data () {
      return {
        project: {},

        colors: [
          { portugues: 'VERMELHO', ingles: 'red' },
          { portugues: 'VERDE', ingles: 'green' },
          { portugues: 'AZUL', ingles: 'blue' }
        ]
      }
    },

    methods: {
      onSelectItem (project, state) {
        this.$emit('onSelectItem', project, state)
      },

      color (item) {
        // return this.colors.filter(function (obj) {
        //   return obj.portugues === item
        // })[0].ingles
        return ''
      }
    }
  }
</script>

<template>
  <div id="cadProjectsGrid">
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
        <thead>
            <tr>
                <th style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; width:26px;">
                </th>                                
           
                <th style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; width:26px;">
                    <font size="2px">Farol</font>
                </th>                                

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Clas.</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Rel.</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Sub/Ent</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Nome</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; width:130px">
                    <font size="2px">Estado</font>
                </th>              
            </tr>
        </thead>
        <tbody v-for="item in dataSource">
            <tr>
                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 1px; white-space: nowrap">
                  <a class='btn btn-xs my-tool-tip' 
                    data-toggle="tooltip" 
                    title="Editar" 
                    style="padding:0;margin:0; text-right"
                    @click="onSelectItem(item, 'edit')">
                    <span class="glyphicon glyphicon glyphicon-pencil"></span>
                  </a>                  
                  <a class='btn btn-xs my-tool-tip' 
                    data-toggle="tooltip" 
                    title="Exibir" 
                    style="padding:0;margin:0; text-right"
                    @click="onSelectItem(item, 'show')">
                    <i class='glyphicon glyphicon-list-alt'></i>
                  </a>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <div class="text-center" style="padding:0;">
                        <img alt="Farol Verde" src="../../../asset/image/verde-sm.png" v-show="item.trafficLight === 'VERDE'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="item.trafficLight === 'AMARELO'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="item.trafficLight === 'VERMELHO'" style="padding:0; margin:0; border:0">
                    </div>
                </td>
                

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">{{item.classification ? item.classification.substring(0,3) : ''}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">{{item.release}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">{{item.subDel}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="1.5px">{{item.name}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="1.5px">{{item.state}}</font>
                </td>

            </tr>
        </tbody> 
    </table>
  </div>
</template>

<style scoped>
  .oi-icon {
    font-size: medium;
  }
  img {
    border: 0; 
    padding-top: 15px; 
    height: 15px;
    width: 15px;
  }  
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }    
</style>
