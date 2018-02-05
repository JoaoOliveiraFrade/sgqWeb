<script>
  import { mapState, mapActions } from 'vuex'
  import oiSelection from '@/genComp/selection/Main.vue'

  export default {
    name: 'ShowData',

    components: { oiSelection },

    computed: {
      ...mapState('testProj', ['selectedMonoselection', 'iterations', 'iterationsActive'])
    },

    data () {
      return {
        colors: [
          { portugues: 'VERMELHO', ingles: 'color:red' },
          { portugues: 'VERDE', ingles: 'color:green' },
          { portugues: 'AMARELO', ingles: 'color:gold ' }
        ]
      }
    },

    methods: {
      ...mapActions('testProj', ['setIterationsActive', 'setIterationsSelected']),

      ConfirmIterationsActive (iterationsActive) {
        if (this.iterationsActive !== iterationsActive) {
          this.setIterationsActive(iterationsActive)
          this.setIterationsSelected(iterationsActive)
        }
      },

      saveItem (project) {
        services.update(selectedMonoselection).then(r => {
          Toastr.success('Dados gravados!')
        })

        this.state = 'search'
      },     
    }

  }
</script>

<template>
    <div v-show="Object.keys(selectedMonoselection).length > 0" class="row well well-sm oi-well">

      <button style="margin-top:2px" class="btn btn-xs"
        data-toggle="modal"
        data-target="#modalEditionProject"
        title="Salvar"
        @click="save(project)"
        
        @click="setState('show')"
        >
        <span class="glyphicon glyphicon-floppy-disk"></span>
        Salvar
      </button>        
      
      <div class="row well-sm oi-well">
      
          <ul class="nav nav-tabs" style="margin-top:2px">
            <li class="active">
              
              <a data-toggle="tab" href="#trafficLight" style="padding: 3px 5px 3px 5px">Farol
                <!--
                <img alt="Farol Verde" src="../../../../asset/image/verde-sm.png"  v-show="selected.trafficLight === 'VERDE'">
                <img alt="Farol Amarelo" src="../../../../asset/image/amarelo-sm.png" height="17" width="17" v-show="selected.trafficLight === 'AMARELO'">
                <img alt="Farol Vermelho" src="../../../../asset/image/vermelho-sm.png" height="17" width="17" v-show="selected.trafficLight === 'VERMELHO'">
                -->
              </a>
            </li>
            <li><a data-toggle="tab" href="#informative" style="padding: 3px 5px 3px 5px">Resumo Executivo</a></li>
            <li><a data-toggle="tab" href="#attentionPoints" style="padding: 3px 5px 3px 5px">Pontos de Atenção</a></li>
            <li><a data-toggle="tab" href="#filters" style="padding: 3px 5px 3px 5px">Filtros</a></li>
          </ul>

          <div class="tab-content">
          
            <div id="trafficLight" class="tab-pane fade in active" style="padding:0; margin:0; text-align: center">
                <div class="col-xs-12 oi-col">
                    <!--
                    <input type="radio" id="green" value="VERDE" v-model="selected.trafficLight">
                    <label for="green">Verde</label>

                    <input type="radio" id="yellow" value="AMARELO" v-model="selected.trafficLight">
                    <label for="yellow">Amarelo</label>

                    <input type="radio" id="red" value="VERMELHO" v-model="selected.trafficLight">
                    <label for="red">Vermelho</label>
                    -->
                </div>

                <div class="col-xs-12 oi-col">
                    <label class="fd-label">Causa Raíz</label>
                    <froala v-model="selectedMonoselection.rootCause"/>
                </div>

                <div class="col-xs-12 oi-col">
                    <label class="fd-label">Plano de Ação</label>
                    <froala v-model="selectedMonoselection.actionPlan"/>
                </div>
                
            </div>

            <div id="informative" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              
              <div class="col-xs-12 oi-col">
                  <froala v-model="selectedMonoselection.informative"/>
              </div>
              
            </div>

            <div id="attentionPoints" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 oi-col">
                  <froala v-model="selectedMonoselection.attentionPoints"/>
              </div>
            </div>

            <div id="filters" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              
              <div class="col-xs-12 text-left" style="margin:5px; border:0; padding:0; padding-top:10px; height:500px;">

                <oiSelection
                  title="Iterations Ativos"
                  :data="iterations"
                  :selected="selectedMonoselection.iterationsActive"
                  :showButtonSelected="false"
                  gender="male"
                  @onConfirm="ConfirmIterationsActive"
                />

              </div>    

            </div>
                
          </div>

      </div>  

    </div>
</template>

<style scoped>
  .oi-well {
    margin: 2px; 
    padding: 0;
  }

  .oi-col {
    padding: 3px; 
    margin: 0; 
    border: 0;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding: 0; 
    font-weight: normal;
  }

  label[for="green"] {
    color: green;
  }

  label[for="yellow"] {
    color: yellow;
  }

  label[for="red"] {
    color: red;
  }

  textarea {
    min-width: 100%
  }

  img {
    margin-top: 4px;
    vertical-align: top;
    height: 12px;
    width: 12px;
  }  
</style>