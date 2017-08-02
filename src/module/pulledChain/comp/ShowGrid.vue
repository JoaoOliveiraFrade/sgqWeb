<script>
  import { mapGetters, mapActions } from 'vuex'

  import oiShowButton from './ShowButton.vue'
  import oiEditButton from './EditButton.vue'

  export default {
    name: 'ShowGrid',

    components: { oiShowButton, oiEditButton },

    computed: {
      ...mapGetters(['pulledChainProjectsFilteredByTerm'])
    },

    methods: {
      ...mapActions(['loadPulledChainProjects'])
    },

    mounted () {
      this.loadPulledChainProjects()
    }
  }
</script>

<template>
  <div>
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
        <thead>
            <tr>
                <th style="vertical-align: middle"></th>
                <th style="vertical-align: middle">Prior.</th>                                
                <th style="vertical-align: middle">Proj.</th>
                <th style="vertical-align: middle">Estado</th>
                <th style="vertical-align: middle">RT</th>
                <th style="vertical-align: middle">UN</th>
                <th style="vertical-align: middle">Tipif.</th>
                <th style="vertical-align: middle">Release<br>Clarity</th>
                <th style="vertical-align: middle">Próx.<br>Rel.</th>      
                <th style="vertical-align: middle">Status<br>ORL</th>
                <th style="vertical-align: middle">Atividade</th> 
                <th style="vertical-align: middle">Entrega<br>Plano</th>
                <th style="vertical-align: middle">Ready</th> 
                <th style="vertical-align: middle">Status</th> 
                <th style="vertical-align: middle">Atualiz.<br>Status</th> 
                <th style="vertical-align: middle">Início<br>(ready)</th>
                <th style="vertical-align: middle">Fim<br>(on going)</th>
                <th style="vertical-align: middle">Aging</th>
            </tr>
        </thead>
        <tbody v-for="item in pulledChainProjectsFilteredByTerm">
            <tr>
                <td rowspan=3 style="white-space: nowrap; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    <oiShowButton :project="item"/>
                    <oiEditButton :project="item"/>
                </td>
                <td rowspan=3 style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.priorityGlobal}}
                </td>

                <td rowspan=3 style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.subprojectDelivery}}
                </td>

                <td rowspan=3 style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.state}}
                </td>

                <td rowspan=3 style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.RT}}
                </td>

                <td rowspan=3 style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.UN}}
                </td>

                <td rowspan=3 style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.Typification}}
                </td>

                <td rowspan=3 style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.releaseClarity}}
                </td>

                <td rowspan=3 style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    <img class="img-large" alt="Atenção" src="../../../asset/image/attention.png" v-show="item.nextRelease === 'S'">
                    <img class="img-large" alt="Relax" src="../../../asset/image/relax1.png" v-show="item.nextRelease === 'N'">
                </td>

                <td rowspan=3 style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    <img class="img-large" alt="Lampada" src="../../../asset/image/lampOn.png" v-show="item.statusCategoryORL === 'S'">
                    <img class="img-large" alt="Lampada Apagada" src="../../../asset/image/lampOff.png" v-show="item.statusCategoryORL === 'N'">
                </td>

                <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    ESTRATÉGIA
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    N/A
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="item.readyStrategyTestingAndContracting === 'S' && item.statusStrategyTestingAndContracting !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                    <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="item.readyStrategyTestingAndContracting === 'N'" style="padding:0; margin:0; border:0">
                    <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="item.readyStrategyTestingAndContracting === 'S' && item.statusStrategyTestingAndContracting === 'REALIZADO'" style="padding:0; margin:0; border:0">
                </td>

                <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.statusStrategyTestingAndContracting}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtUpdateStrategyTestingAndContracting}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtStartStrategyTestingAndContracting}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtEndStrategyTestingAndContracting}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.agingStrategyTestingAndContractingFormated}}
                </td>
            </tr>

            <tr>
                <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    CRONOGRAMA
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    N/A
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="item.readyTimeline === 'S' && item.statusTimeline !== 'REALIZADO'">
                    <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="item.readyTimeline === 'N'">
                    <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="item.readyTimeline === 'S' && item.statusTimeline === 'REALIZADO'">
                </td>

                <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.statusTimeline}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtUpdateTimeline}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtStartTimeline}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtEndTimeline}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.agingTimelineFormated}}
                </td>
            </tr>

            <tr>
                <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                PLANO
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtDeliveryTestPlan}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="item.readyTestPlan === 'S' && item.statusTestPlan !== 'REALIZADO'">
                    <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="item.readyTestPlan === 'N'">
                    <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="item.readyTestPlan === 'S' && item.statusTestPlan === 'REALIZADO'">
                </td>

                <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.statusTestPlan}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtUpdateTestPlan}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtStartTestPlan}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.dtEndTestPlan}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                    {{item.agingTestPlanFormated}}
                </td>
            </tr>

            <tr><td colspan=18 style="padding:0"></td></tr>
        </tbody> 
    </table>
  </div>
</template>

<style scoped>
    .oi-icon {
        font-size: medium;
    }
    .img-large {
        height: 22px;
        width: 22px;
        margin: 0px; 
        border: 0px; 
        padding: 0px; 
    }  
    .img-small {
        height: 15px;
        width: 15px;
        margin: 0px; 
        border: 0px; 
        padding: 0px; 
    }  
    th, td {
        text-align: center;
        font-size: x-small;
    }
    table {
        border-collapse: separate;
        border-radius: 5px;
        border: 1px solid #d9d9d9;
    }
    .fd-label {
        margin: 0; 
        border: 0; 
        padding: 0; 
        color: gray;
    }
    hr {
        height: 4px;
       
        margin: 0px;
        border: 0px;
        padding: 0px;
        margin-top: 2px;
    } 

    th {
        padding: 1px; 
        margin: 0px; 
        border-top: 1px; 
        padding-left: 5px; 
        box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
    }
    
    .table-striped > tbody > tr:hover > td {
        background-color: #efefef;
    }

</style>
