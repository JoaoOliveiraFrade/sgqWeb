<script>
  export default {
    name: 'AccumulatedGrid',

    props: {
      dataSource: {type: Object}
    }
  }
</script>

<template>
  <div id="projectsGrid">
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; border:0; padding-bottom:0">
        <thead>
            <tr>
                <th class="oi-col" style="width:105px">
                </th>
                <th class="oi-col text-right" v-for="item in dataSource.columns" style="color:#6b6b47">
                    {{item}}
                </th>
            </tr>
        </thead>
        <tbody v-for="r in dataSource.rows">
            <tr>
                <td class="oi-col text-left">
                    {{r.name}}
                </td>
                <td class="oi-col text-right" v-for="c in r.valuesAcum">
                    {{c.value}} <font v-show="r.name != 'Produtividade' && r.name != 'Ativo'" size=1> ({{c.percent}}%)</font>
                </td>
            </tr>
        </tbody> 
    </table>
  </div>
</template>

<style scoped>
  .oi-col {
    padding: 0; 
    margin: 0; 
    border: 0;
  }
</style>
