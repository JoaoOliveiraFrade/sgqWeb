<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Show',

    computed: {
      ...mapState('pulledChain', ['selected'])
    },

    data () {
      return {
        selected_: {},
        dtDeliveryTestPlan: ''
      }
    },

    watch: {
      'selected': {
        handler () {
          this.selected_ = { ...this.selected }

          // muda o formato dd-mm-yy para yyyy-mm-dd (uso do componente visual)
          if (this.selected_.dtDeliveryTestPlan !== '') {
            this.dtDeliveryTestPlan = this.selected_.dtDeliveryTestPlan ? '20' + this.selected_.dtDeliveryTestPlan.substr(6, 2) + '-' + this.selected_.dtDeliveryTestPlan.substr(3, 2) + '-' + this.selected_.dtDeliveryTestPlan.substr(0, 2) : ''
          } else {
            this.dtDeliveryTestPlan = ''
          }
        }
      }
    },

    methods: {
      getDateToday () {
        let d = new Date()
        return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('' + d.getFullYear()).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2)
      },

      formatDate (d) {
        if (d !== '') {
          return d.substr(8, 2) + '-' + d.substr(5, 2) + '-' + d.substr(2, 2)
        } else {
          return ''
        }
      },

      /**
      * Calcula data fim, na alteração do status
      **********************************************/
      changeStatusStrategyTestingAndContracting () {
        this.selected_.dtUpdateStrategyTestingAndContracting = this.getDateToday()
        if (this.selected_.statusStrategyTestingAndContracting !== 'BACKLOG' && this.selected_.dtEndStrategyTestingAndContracting === '') {
          this.selected_.dtEndStrategyTestingAndContracting = this.getDateToday()
        } else {
          if (this.selected_.statusStrategyTestingAndContracting === 'BACKLOG' && this.selected_.dtEndStrategyTestingAndContracting !== '') {
            this.selected_.dtEndStrategyTestingAndContracting = ''
          }
        }
      },
      changeStatusTimeline () {
        this.selected_.dtUpdateTimeline = this.getDateToday()
        if (this.selected_.statusTimeline !== 'BACKLOG' && this.selected_.dtEndTimeline === '') {
          this.selected_.dtEndTimeline = this.getDateToday()
        } else {
          if (this.selected_.statusTimeline === 'BACKLOG' && this.selected_.dtEndTimeline !== '') {
            this.selected_.dtEndTimeline = ''
          }
        }
      },
      changeStatusTestPlan () {
        this.selected_.dtUpdateTestPlan = this.getDateToday()
        if (this.selected_.statusTestPlan !== 'BACKLOG' && this.selected_.dtEndTestPlan === '') {
          this.selected_.dtEndTestPlan = this.getDateToday()
        } else {
          if (this.selected_.statusTestPlan === 'BACKLOG' && this.selected_.dtEndTestPlan !== '') {
            this.selected_.dtEndTestPlan = ''
          }
        }
      },

      setDtDeliveryTestPlan () {
        this.selected_.dtDeliveryTestPlan = this.formatDate(this.dtDeliveryTestPlan)

        if (this.dtDeliveryTestPlan === '') {
          this.selected_.readyTestPlan = 'N'
        } else {
          let dtDeliveryTestPlanYYMMDD = this.selected_.dtDeliveryTestPlan.substr(6, 2) + this.selected_.dtDeliveryTestPlan.substr(3, 2) + this.selected_.dtDeliveryTestPlan.substr(0, 2)

          let d = new Date()
          let NowYYMMDD = ('' + d.getFullYear()).slice(-2) + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2)

          if (dtDeliveryTestPlanYYMMDD <= NowYYMMDD) {
            this.selected_.readyTestPlan = 'S'
          } else {
            this.selected_.readyTestPlan = 'N'
          }
        }

        this.selected_.dtStartTestPlan = this.dtDeliveryTestPlan !== '' ? this.getDateToday() : ''
      }
    }
  }
</script>

<template>
    <div class="container-fluid">
   
        <div class="row well well-sm oi-well" style="margin:2px; border:0px; padding:2px; padding-top: 5px">
            <div class="col-xs-10 col-md-6 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Nome:</label><br>
                    <label class="fd-content">{{selected.name}}</label>
                </div>
            </div>

            <div class="col-xs-2 col-md-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Prioridade:</label><br>
                    <label class="fd-content" style="text-align: center">{{selected.priorityGlobal}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Estado:</label><br>
                    <label class="fd-content">{{selected.state}}</label>
                </div>
            </div>
            

            <div class="col-xs-6 col-md-2 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Release Clarity:</label><br>
                    <label class="fd-content">{{selected.releaseClarity}}</label>
               
                </div>
            </div>

        </div>

        <div class="row well well-sm oi-well" style="margin:2px; border:0; padding:2px; padding-top: 5px">
            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Categoria:</label><br>
                    <label class="fd-content">{{selected.category}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Cadeia Produtiva:</label><br>
                    <label class="fd-content">{{selected.productiveChain}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">UN:</label><br>
                    <label class="fd-content">{{selected.UN}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Tipificação:</label><br>
                    <label class="fd-content">{{selected.Typification}}</label>
                </div>
            </div>
        </div>

        <div class="row well well-sm oi-well" style="margin:2px; border:0; padding:2px; padding-top: 5px">
            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Estado Frente:</label><br>
                    <label class="fd-content">{{selected.workFrontState}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Área:</label><br>
                    <label class="fd-content">{{selected.topic}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Responsável:</label><br>
                    <label class="fd-content">{{selected.RT}}</label>
                </div>
            </div>

            <div class="col-xs-6 col-md-3 text-left" style="margin:0; border:0; padding:0; padding-left:5px">
                <div>
                    <label class="fd-label">Estado Sub/Ent:</label><br>
                    <label class="fd-content">{{selected.deliveryState}}</label>
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
                            <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="selected.readyStrategyTestingAndContracting === 'S' && selected.statusStrategyTestingAndContracting !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="selected.readyStrategyTestingAndContracting === 'N'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="selected.readyStrategyTestingAndContracting === 'S' && selected.statusStrategyTestingAndContracting === 'REALIZADO'" style="padding:0; margin:0; border:0">
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{selected.statusStrategyTestingAndContracting}}
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{selected.dtUpdateStrategyTestingAndContracting}}
                        </td>
                    </tr>  

                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Cronograma
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="selected.readyTimeline === 'S' && selected.statusTimeline !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="selected.readyTimeline === 'N'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="selected.readyTimeline === 'S' && selected.statusTimeline === 'REALIZADO'" style="padding:0; margin:0; border:0">
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{selected.statusTimeline}}
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{selected.dtUpdateTimeline}}
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Plano
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            <img class="img-small" alt="Check Verde" src="../../../asset/image/checkYes.png" v-show="selected.readyTestPlan === 'S' && selected.statusTestPlan !== 'REALIZADO'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Vermelho" src="../../../asset/image/checkNo.png" v-show="selected.readyTestPlan === 'N'" style="padding:0; margin:0; border:0">
                            <img class="img-small" alt="Check Cinza" src="../../../asset/image/checkGrey.png" v-show="selected.readyTestPlan === 'S' && selected.statusTestPlan === 'REALIZADO'" style="padding:0; margin:0; border:0">
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{selected.statusTestPlan}}
                        </td>

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            {{selected.dtUpdateTestPlan}}
                        </td>
                    </tr>  

                    <tr>
                        <td style="text-align: left; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle">
                            Entrega Plano
                        </td>                                

                        <td style="text-align: center; padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; vertical-align: middle; width: 100px">
                            {{dtDeliveryTestPlan}}
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
