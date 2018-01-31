<script>
  export default {
    name: 'ProjectGridShow',

    props: {
      items: {type: Array}
    },

    methods: {
      selectItem (item) {
        this.$router.push('/project/show/' + item.subproject + '/' + item.delivery)
      }
    }
  }
</script>

<template>
  <div style="width:100%">
    <table class="table table-condensed table-striped table-hover table-bordered" style="padding-bottom:0; margin-bottom:0; border-bottom:1; width:100%">
        <thead style="width:100%">
            <tr>
                <th class="text-center" style="padding:1px; width:26px;">
                    Farol
                </th>                                

                <th class="text-center" style="padding:1px">
                    Sub/Ent
                </th>

                <th class="text-center" style="padding:1px">
                    Nome
                </th>

                <th class="text-center" style="padding:1px">
                    UN
                </th>

                <th class="text-center" style="padding:1px">
                    N4
                </th>

                <th class="text-center" style="padding:1px">
                    GP
                </th>

                <th class="text-center" style="padding:1px">
                    GAP
                </th>

                <th class="text-center" style="padding:0; white-space: nowrap">
                    Resumo Executivo
                </th>
            </tr>
        </thead>
        <tbody v-for="item in items" style="width:100%">
            <tr>
                <td class="text-center" style="padding:0;">
                    <div class="text-center" style="padding:0;">
                        <img alt="Farol Verde" src="../../asset/images/verde.png" v-show="item.trafficLight === 'VERDE'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Amarelo" src="../../asset/images/amarelo.png" v-show="item.trafficLight === 'AMARELO'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Vermelho" src="../../asset/images/vermelho.png" v-show="item.trafficLight === 'VERMELHO'" style="padding:0; margin:0; border:0">
                    </div>
                </td>

                <td class="text-center" style="padding:1px">
                    {{item.project}}
                </td>

                <td class="text-left" style="padding:1px">
                    {{item.name}}
                </td>

                <td class="text-left" style="padding:1px">
                    {{item.UN}}
                </td>

                <td class="text-left" style="padding:1px">
                    {{item.N3}}
                </td>

                <td class="text-left" style="padding:1px">
                    {{item.GP}}
                </td>

                <td class="text-center" style="padding:1px">
                    {{item.gap}}
                </td>
                <td class="text-left" style="padding:1px">
                    <span v-html="item.informative"/>
                </td>
            </tr>
        </tbody> 
    </table>
  </div>
</template>

<style scoped>
  td th {
    font-family: "Arial";
    font-weight: normal;
  }
  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 11px;
    width: 11px;
  }  
</style>
