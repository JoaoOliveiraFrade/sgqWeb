<script>
  export default {
    name: 'ShowAnalyticGrid',

    props: {
      dataSource: {type: Array}
    }
  }

</script>

<template>
  <span>
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
    <thead>
        <tr>
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">Execução
                </font>
            </th>
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">Projeto
                </font>
            </th>
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">Fáb. Desenv
                </font>
            </th>
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">Sistema
                </font>
            </th>
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">Qte Defeitos
                </font>
            </th>
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">Qte Horas
                </font>
            </th>    
            <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center">
                <font size="2" class="text-nowrap">T.Médio
                </font>
            </th>    
        </tr>
    </thead>

    <tbody v-for="item in dataSource">
        <tr style="padding:0">
            <td style="padding:0px">
                <font size="1">{{item.date}}</font>
            </td>
            <td style="padding:0px">
                <font size="1">{{item.project}}</font>
            </td>
            <td style="padding:0px">
                <font size="1">{{item.devManufacturing}}</font>
            </td>
            <td style="padding:0px">
                <font size="1">{{item.system}}</font>
            </td>
            <td style="padding:0px">
                <font size="1">{{item.qtyDefects}}</font>
            </td>
            <td style="padding:0px">
                <font size="1">{{item.qtyHours}}</font>
            </td>
            <td style="padding:0px">
                <font size="1">{{item.Media}}</font>
            </td>
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
