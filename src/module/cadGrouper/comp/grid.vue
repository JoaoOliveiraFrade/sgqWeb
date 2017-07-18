<script>
  export default {
    name: 'grouperGrid',

    props: {
      items: {type: Array}
    },

    methods: {
      selectItem (item, state) {
        this.$emit('onSelectItem', item, state)
      },
      deleteItem (item) {
        this.$emit('onDeleteItem', item)
      }
    }
  }
</script>

<template>
  <div>
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
        <thead>
            <tr>
                <th style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; width:26px;">
                </th>                                
                <!--
                <th class="text-center">
                    <font size="2px">Farol</font>
                </th>                                
                -->
                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Nome</font>
                </th>                                
            </tr>
        </thead>
        <tbody v-for="item in items">
            <tr>
                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 1px; white-space: nowrap">
                  <a class='btn' 
                    data-toggle="tooltip" 
                    title="Alterar" 
                    style="padding:0;margin:0; text-right"
                    @click="selectItem(item, 'edit')">
                    <span class="glyphicon glyphicon glyphicon-pencil"></span>
                  </a>                  
                  <a class='btn' 
                    data-toggle="tooltip" 
                    title="Exibir" 
                    style="padding:0;margin:0; text-right"
                    @click="selectItem(item, 'show')">
                    <i class='glyphicon glyphicon-list-alt'></i>
                  </a>
                  <a class='btn' 
                    data-toggle="tooltip" 
                    title="Apagar" 
                    style="padding:0;margin:0; text-right"
                    @click="deleteItem(item)">
                    <i class='glyphicon glyphicon-trash'></i>
                  </a>
                </td>
                <!--
                <td class="text-center" style="padding:0;">
                    <div class="text-center" style="padding:0;">
                        <img alt="Farol Verde" src="../../assets/images/verde.png" v-show="item.trafficLight === 'VERDE'" class="img">
                        <img alt="Farol Amarelo" src="../../assets/images/amarelo.png" v-show="item.trafficLight === 'AMARELO'" class="img">
                        <img alt="Farol Vermelho" src="../../assets/images/vermelho.png" v-show="item.trafficLight === 'VERMELHO'"class="img">
                    </div>
                </td>
                -->
                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px" v-text="item.name"></font>
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
