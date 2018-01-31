<script>
  export default {
    name: 'ProjectsGrid',

    props: {
      dataSource: {type: Array}
    },

    data () {
      return {
        selected_: [],

        project: {},

        colors: [
          { portugues: 'VERMELHO', ingles: 'red' },
          { portugues: 'VERDE', ingles: 'green' },
          { portugues: 'AMARELO', ingles: 'gold' }
        ]
      }
    },

    methods: {
      onSelectItem (item, state) {
        this.$emit('onSelectItem', item, state)
      },

      color (item) {
        let index = this.colors.findIndex(i => i.portugues === item)
        return (index > -1) ? this.colors[index].ingles : ''
      }
    }
  }
</script>

<template>
  <div>
    <table class="table table-condensed table-striped table-hover table-bordered" >
        <thead>
            <tr>
                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
                </th>                                
           
                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
                </th>                                

                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">Sub/Ent</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">Nome</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">Estado</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">Clas.</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">Rel.</font>
                </th>

            </tr>
        </thead>
        <tbody v-for="item in dataSource">
            <tr>
                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px; border-radius: 3px;">
                  <a class="btn"
                    style="padding: 0px; margin: 0px; border-top: 1px"
                    data-toggle="tooltip"
                    title="Exibir" 
                    @click="onSelectItem(item, 'show')"
                  >
                    <i class='glyphicon glyphicon-list-alt'></i>
                  </a>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <div class="text-center" style="padding:0;">
                        <img alt="Farol Verde" src="../../../asset/image/verde.png" v-show="item.trafficLight === 'VERDE'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Amarelo" src="../../../asset/image/amarelo.png" v-show="item.trafficLight === 'AMARELO'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Vermelho" src="../../../asset/image/vermelho.png" v-show="item.trafficLight === 'VERMELHO'" style="padding:0; margin:0; border:0">
                    </div>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">{{item.project}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px;">
                    <font size="1.5px">{{item.name}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px;">
                    <font size="1.5px">{{item.state}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">{{item.classification ? item.classification.substring(0,3) : ''}}</font>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                    <font size="2px">{{item.release}}</font>
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
</style>
