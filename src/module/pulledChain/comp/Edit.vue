<script>
  import Toastr from 'toastr'
  import services from '../services'

  export default {
    name: 'pulledChainGridEdit',

    props: {
      project: { type: Object },
      projectVal: { type: Object }
    },

    data () {
      return {
        dtDeliveryTestPlan: '20' + this.project.dtDeliveryTestPlan.substr(6, 2) + '-' + this.project.dtDeliveryTestPlan.substr(3, 2) + '-' + this.project.dtDeliveryTestPlan.substr(0, 2)
      }
    },

    methods: {
      getDateToday () {
        let d = new Date()
        return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('' + d.getFullYear()).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2)
      },
      formatDate (d) {
        let aux = d.substr(8, 2) + '-' + d.substr(5, 2) + '-' + d.substr(2, 2)
        return aux
      },
      searchItem (state) {
        this.$emit('onSearchItem', state)
      },
      setDtUpdateStrategyTestingAndContracting () {
        this.projectVal.dtUpdateStrategyTestingAndContracting = this.getDateToday()
      },
      setDtUpdateTimeLine () {
        this.projectVal.dtUpdateTimeLine = this.getDateToday()
      },
      setDtUpdateTestPlan () {
        this.projectVal.dtUpdateTestPlan = this.getDateToday()
        // this.calculatePlanReady()
      },
      save () {
        this.calculateDtEnd()

        this.project.statusStrategyTestingAndContracting = this.projectVal.statusStrategyTestingAndContracting
        this.project.dtUpdateStrategyTestingAndContracting = this.projectVal.dtUpdateStrategyTestingAndContracting
        this.project.dtEndStrategyTestingAndContracting = this.projectVal.dtEndStrategyTestingAndContracting

        this.project.statusTimeline = this.projectVal.statusTimeline
        this.project.dtUpdateTimeLine = this.projectVal.dtUpdateTimeLine
        this.project.dtEndTimeline = this.projectVal.dtEndTimeline

        this.project.statusTestPlan = this.projectVal.statusTestPlan
        this.project.dtUpdateTestPlan = this.projectVal.dtUpdateTestPlan
        this.project.dtEndTestPlan = this.projectVal.dtEndTestPlan

        this.project.dtDeliveryTestPlan = this.formatDate(this.dtDeliveryTestPlan)
        services.update(this.project)
        Toastr.success('Dados gravados!')
      },
      calculateDtEnd () {
        if (this.projectVal.statusStrategyTestingAndContracting !== 'BACKLOG' && this.projectVal.dtEndStrategyTestingAndContracting === '') {
          this.projectVal.dtEndStrategyTestingAndContracting = this.getDateToday()
        } else {
          if (this.projectVal.statusStrategyTestingAndContracting === 'BACKLOG' && this.projectVal.dtEndStrategyTestingAndContracting !== '') {
            this.projectVal.dtEndStrategyTestingAndContracting = ''
          }
        }

        if (this.projectVal.statusTimeline !== 'BACKLOG' && this.projectVal.dtEndTimeline === '') {
          this.projectVal.dtEndTimeline = this.getDateToday()
        } else {
          if (this.projectVal.statusTimeline === 'BACKLOG' && this.projectVal.dtEndTimeline !== '') {
            this.projectVal.dtEndTimeline = ''
          }
        }

        if (this.projectVal.statusTestPlan !== 'BACKLOG' && this.projectVal.dtEndTestPlan === '') {
          this.projectVal.dtEndTestPlan = this.getDateToday()
        } else {
          if (this.projectVal.statusTestPlan === 'BACKLOG' && this.projectVal.dtEndTestPlan !== '') {
            this.projectVal.dtEndTestPlan = ''
          }
        }
      }
    }
  }
</script>

<template>
    <div class="container-fluid">
        <div style="text-align: left; margin:0; border:0; padding:0px">
            <a class="oi-icon" href="#"
                @click.prevent="save()"
                title="Salvar">
                <span class='glyphicon glyphicon-save'></span>
            </a> 
        </div>
    
        <div class="row well well-sm oi-well" style="margin:2px; border:0px; padding:2px; padding-top: 5px">
            <div class="col-xs-10 col-md-6 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Nome:</label><br>
                    <label class="fd-content">{{project.name}}</label>
                </div>
            </div>

            <div class="col-xs-2 col-md-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Prioridade:</label><br>
                    <label class="fd-content" style="text-align: center">{{project.priorityGlobal}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Estado:</label><br>
                    <label class="fd-content">{{project.state}}</label>
                </div>
            </div>
            

            <div class="col-xs-6 col-md-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Release Clarity:</label><br>
                    <label class="fd-content">{{project.releaseClarity}}</label>
               
                </div>
            </div>

        </div>

        <div class="row well well-sm oi-well" style="margin:2px; border:0; padding:2px; padding-top: 5px">
            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Categoria:</label><br>
                    <label class="fd-content">{{project.category}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Cadeia Produtiva:</label><br>
                    <label class="fd-content">{{project.productiveChain}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">UN:</label><br>
                    <label class="fd-content">{{project.UN}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Tipificação:</label><br>
                    <label class="fd-content">{{project.Typification}}</label>
                </div>
            </div>
        </div>

        <div class="row well well-sm oi-well" style="margin:2px; border:0; padding:2px; padding-top: 5px">
            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Estado Frente:</label><br>
                    <label class="fd-content">{{project.workFrontState}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Área:</label><br>
                    <label class="fd-content">{{project.topic}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Responsável:</label><br>
                    <label class="fd-content">{{project.RT}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Estado Entrega:</label><br>
                    <label class="fd-content">{{project.deliveryState}}</label>
                </div>
            </div>
        </div>        

        <div class="row well well-sm oi-well" style="margin:2px; border:0; padding:7px; padding-top: 5px; margin-bottom:10px;">
            <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
                <thead>
                    <tr>
                        <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center; vertical-align: middle">
                            Atividade
                        </th>                                

                        <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center; vertical-align: middle">
                            Ready
                        </th>

                        <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center; vertical-align: middle">
                            Status
                        </th>

                        <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; text-align: center; vertical-align: middle">
                            Atualiz. Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Estratégia
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="project.readyStrategyTestingAndContracting === 'S' && projectVal.statusStrategyTestingAndContracting !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="project.readyStrategyTestingAndContracting === 'N'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="project.readyStrategyTestingAndContracting === 'S' && projectVal.statusStrategyTestingAndContracting === 'REALIZADO'" style="padding:0; margin:0; border:0">
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <select id="StrategyAct" 
                                @change="setDtUpdateStrategyTestingAndContracting()" 
                                v-model="projectVal.statusStrategyTestingAndContracting" 
                                :disabled="projectVal.statusStrategyTestingAndContracting === 'REALIZADO'">

                                <option value="BACKLOG">BACKLOG</option>
                                <option value="ON GOING">ON GOING</option>
                                <option value="REALIZADO">REALIZADO</option>
                            </select>
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{projectVal.dtUpdateStrategyTestingAndContracting}}
                        </td>
                    </tr>  

                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Cronograma
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="project.readyTimeline === 'S' && projectVal.statusTimeline !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="project.readyTimeline === 'N'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="project.readyTimeline === 'S' && projectVal.statusTimeline === 'REALIZADO'" style="padding:0; margin:0; border:0">
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <select id="TimelineAct"
                                @change="setDtUpdateTimeLine()"
                                v-model="projectVal.statusTimeline"  
                                :disabled="projectVal.statusTestPlan != 'BACKLOG' || projectVal.statusStrategyTestingAndContracting != 'REALIZADO' || projectVal.statusTimeline === 'REALIZADO'">

                                <option value="BACKLOG">BACKLOG</option>
                                <option value="ON GOING">ON GOING</option>
                                <option value="REALIZADO">REALIZADO</option>
                            </select>
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{projectVal.dtUpdateTimeLine}}
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Plano
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="project.readyTestPlan === 'S' && project.statusTestPlan !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="project.readyTestPlan === 'N'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="project.readyTestPlan === 'S' && project.statusTestPlan === 'REALIZADO'" style="padding:0; margin:0; border:0">
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <select id="PlanAct" 
                                @change="setDtUpdateTestPlan()"
                                v-model="projectVal.statusTestPlan" 
                                :disabled="projectVal.statusTimeline != 'REALIZADO' || projectVal.statusTestPlan === 'REALIZADO' ">

                                <option value="BACKLOG">BACKLOG</option>
                                <option value="ON GOING">ON GOING</option>
                                <option value="REALIZADO">REALIZADO</option>
                            </select>
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{projectVal.dtUpdateTestPlan}}
                        </td>
                    </tr>  

                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Entrega Plano
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle; width: 100px">
                            <input type="date" 
                                v-model="dtDeliveryTestPlan" 
                                style="padding-left: 45px"
                            />
                        </td>

                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                        </td>

                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
  .oi-icon {
    font-size: medium;
    margin-left: 5px;
  }

  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }

  img {
    border: 0; 
    padding-top: 15px; 
    height: 15px;
    width: 15px;
  }  

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    // color: gray;
    font-weight: bold;
    font-size: 13px;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding-top: 0px; 
    padding-bottom: 5px; 
    font-weight: normal;
    font-size: 10px;
  } 

  th, td {
    font-size: 12px;
    width: 25%;
  }

  input[type=date] {
    margin: 0;
    border: 0;
    padding: 0;
    width: 157px;
    font-size: 12px;
  }  
</style>
