<script>
  import oiView from './view.vue'
  import oiReport from './showReport.vue'
  import oiModal from '@/genComp/modal/Modalx.vue'
  
  import { paths } from '@/environment'
  // import oiShowReport from 'components/project/showReport.vue'
  // import { paths } from '@/environment'
  // import webAppPath from '@/http/webAppPath'

  import Toastr from 'toastr'
  import 'babel-polyfill'

  import services from '../services'
  import servicesDefect from '@/module/defect/services'

  // import getDensityDefectTotal from '@/lib/getDensityDefectTotal'
  // import getDefectAverangeTimeTotal from '@/lib/getDefectAverangeTimeTotal'
  // import getReopenedTotal from '@/lib/getReopenedTotal'
  // import getdefectOfTSInTITotal from '@/lib/getdefectOfTSInTITotal'

  import getStatusTrans from '@/lib/getStatusTrans'

  export default {
    name: 'ProjectReport',

    components: { oiView, oiModal, oiReport },

    data () {
      return {
        project: {},

        state: '',

        density: [],
        densityDefectTotal: {},

        averangeTime: [],
        DefectAverangeTimeTotal: {},

        reopenedByProject: [],
        reopenedTotal: {},

        defectOfTSInTIByProject: [],
        defectOfTSInTITotal: {},

        statusByProjectGroupDayTop5: {},
        statusByProjectGroupDayTop30: {},
        statusByProjectGroupMonth: {},

        defectStatus: [],
        defectGroupOrigin: [],
        defectsOpenInTestManuf: [],
        defectsOpenInDevManuf: [],
        ctImpactedXDefects: [],
        productivityXDefects: [],
        productivityXDefectsGroupWeekly: [],

        iterations: [],
        iterationsActive: [],
        iterationsActiveFull: [],
        iterationsSelected: [],
        iterationsFiltered: [],

        email: {
          from: 'sgq@oi.net.br',
          to: '',
          subject: '',
          url: ''
        }
      }
    },

    mounted () {
      this.project.subproject = this.$route.params.subproject
      this.project.delivery = this.$route.params.delivery
      this.loadProject()
    },

    watch: {
      '$route' (to, from) {
        this.project.subproject = this.$route.params.subproject
        this.project.delivery = this.$route.params.delivery
        this.loadProject()
      }
    },

    computed: {
      /*
      iterationsActiveFull () {
        return this.iterations.filter(i => this.iterationsActive.indexOf(i.name) !== -1)
      },
      */
      emailValid () {
        var re = /\S+@\S+\.\S+/
        return re.test(this.email.to)
      }
    },

    methods: {
      loadProject () {
        services.getProjectBySubEnt(this.project.subproject, this.project.delivery).then(resp => {
          this.project = resp.data

          let project = this.project.subDel.split(' ')
          this.email.subject = '[Status Entrega] SubPrj: ' + project[0] + ', Ent: ' + project[1] + ', Nome: ' + this.project.name

          if (this.project.IterationsActive !== null) {
            this.iterationsActive = this.project.IterationsActive.split("','")
            if (this.iterationsActive.length === 1) {
              if (this.iterationsActive[0] === '') {
                this.iterationsActive = []
              }
            }
            this.iterationsActiveFull = this.iterationsActive.map(i => ({ id: i, name: i }))
          }

          if (this.project.IterationsSelected !== null) {
            this.iterationsSelected = this.project.IterationsSelected.split("','")
            if (this.iterationsSelected.length === 1) {
              if (this.iterationsSelected[0] === '') {
                this.iterationsSelected = []
              }
            }
            this.iterationsFiltered = this.iterationsSelected
          } else {
            if (this.iterationsActive.length) {
              this.iterationsFiltered = this.iterationsActive
            }
          }

          if (this.iterationsFiltered.length === 1) {
            if (this.iterationsFiltered[0] === '') {
              this.iterationsFiltered = []
            }
          }

          if (this.iterationsFiltered.length) {
            this.loadDataIterations()
          } else {
            this.loadData()
          }
        })
      },

      loadData () {
        services.getDensity(this.project).then(resp => {
          this.densityDefectTotal = resp.data
        })

        services.getAverangeTimeBySeverity(this.project, '3-HIGH').then(resp => {
          this.DefectAverangeTimeTotal = resp.data
        })

        services.getReopened(this.project).then(resp => {
          this.reopenedTotal = resp.data
        })

        services.getdefectOfTSInTI(this.project).then(resp => {
          this.defectOfTSInTITotal = resp.data
        })

        services.getStatusLastDays(this.project).then(resp => {
          this.statusByProjectGroupDayTop5 = getStatusTrans(resp.data.last05Days)
          this.statusByProjectGroupDayTop30 = getStatusTrans(resp.data.last30Days)
        })

        services.getStatusGroupMonth(this.project).then(resp => {
          this.statusByProjectGroupMonth = getStatusTrans(resp.data)
        })

        servicesDefect.defectStatus(this.project).then(resp => {
          this.defectStatus = resp.data
        })

        servicesDefect.defectGroupOrigin(this.project).then(resp => {
          this.defectGroupOrigin = resp.data
        })

        services.getCtImpactedXDefects(this.project).then(resp => {
          this.ctImpactedXDefects = resp.data
        })

        servicesDefect.defectsOpenInDevManuf(this.project).then(resp => {
          this.defectsOpenInDevManuf = resp.data
        })

        servicesDefect.defectsOpenInTestManuf(this.project).then(resp => {
          this.defectsOpenInTestManuf = resp.data
        })

        services.getProductivityXDefects(this.project).then(resp => {
          this.productivityXDefects = resp.data
        })

        services.getProductivityXDefectsGroupWeekly(this.project).then(resp => {
          this.productivityXDefectsGroupWeekly = resp.data
        })
      },

      loadDataIterations () {
        services.getDensityByIterations(this.project).then(resp => {
          this.densityDefectTotal = resp.data
        })

        services.getAverangeTimeBySeverityIterations(this.project, '3-HIGH').then(resp => {
          this.DefectAverangeTimeTotal = resp.data
        })

        services.getReopenedIterations(this.project, this.iterationsFiltered).then(resp => {
          this.reopenedTotal = resp.data
        })

        services.getdefectOfTSInTIIterations(this.project, this.iterationsFiltered).then(resp => {
          this.defectOfTSInTITotal = resp.data
        })

        services.getStatusLastDaysIterations(this.project, this.iterationsFiltered).then(resp => {
          this.statusByProjectGroupDayTop5 = getStatusTrans(resp.data.last05Days)
          this.statusByProjectGroupDayTop30 = getStatusTrans(resp.data.last30Days)
        })

        services.getStatusGroupMonthIterations(this.project, this.iterationsFiltered).then(resp => {
          this.statusByProjectGroupMonth = getStatusTrans(resp.data)
        })

        servicesDefect.defectStatusIterations(this.project, this.iterationsFiltered).then(resp => {
          this.defectStatus = resp.data
        })

        servicesDefect.defectGroupOriginIterations(this.project, this.iterationsFiltered).then(resp => {
          this.defectGroupOrigin = resp.data
        })

        services.getCtImpactedXDefectsIterations(this.project, this.iterationsFiltered).then(resp => {
          this.ctImpactedXDefects = resp.data
        })

        servicesDefect.defectsOpenInDevManufIterations(this.project, this.iterationsFiltered).then(resp => {
          this.defectsOpenInDevManuf = resp.data
        })

        servicesDefect.defectsOpenInTestManufIterations(this.project, this.iterationsFiltered).then(resp => {
          this.defectsOpenInTestManuf = resp.data
        })

        services.getProductivityXDefectsIterations(this.project, this.iterationsFiltered).then(resp => {
          this.productivityXDefects = resp.data
        })

        services.getProductivityXDefectsGroupWeeklyIterations(this.project, this.iterationsFiltered).then(resp => {
          this.productivityXDefectsGroupWeekly = resp.data
        })
      },

      ConfirmIterations (iterationsSelected) {
        if (this.iterationsSelected !== iterationsSelected) {
          if (iterationsSelected.length > 0) {
            this.iterationsSelected = iterationsSelected
            this.iterationsFiltered = iterationsSelected
          } else {
            this.iterationsSelected = this.iterationsActive
            this.iterationsFiltered = this.iterationsActive
          }

          services.updateIterationsSelected({ projectId: this.project.id, iterations: this.iterationsSelected }).then(resp => {
            if (this.iterationsFiltered.length > 0) {
              this.loadDataIterations()
            } else {
              this.loadData()
            }
          })
        }
      },

      showReport () {
        this.state = 'showReport'
      },

      searchItem () {
        this.$router.push('/projectConsult')
      },

      sendReportByEmail () {
        this.email.url = paths.app + '/projectConsult/report/' + this.project.subproject + '/' + this.project.delivery
        Toastr.info('E-mail solicitado! Pode continuar a usar a aplicação...', '', { timeOut: 20000 })
        this.$http.post(paths.api + '/SendEmail', this.email).then(r => {
          Toastr.success('E-mail enviado!', '', { timeOut: 15000 })
        }, e => {
          Toastr.error('Não foi possível enviar o e-mail. Tente novamente!', '', { timeOut: 15000 })
        })
      },

      closeModalShowReport () {
        this.state = 'show'
      }
    }
  }
</script>

<template>
  <div class="container-fluid">
    <div class="col-xs-12 text-left" style="padding: 0px; padding-top: 5px">
      <a class="btn btn-xs my-tool-tip oi-icon"
        v-show="state !== 'search'" 
        @click="showReport"
        data-toggle="modal"
        data-target="#showReport"
        title="Report Por Email">
        <span class="glyphicon glyphicon-envelope"></span>
      </a>
      <a class="btn btn-xs my-tool-tip oi-icon"
        v-show="this.state !== 'search'" 
        @click="searchItem"
        data-toggle="tooltip"
        title="Pesquisa">
        <span class="glyphicon glyphicon-search"></span>
      </a>
    </div>
    <oiView style="margin-top:30px"
      :project="project"
      :densityDefectTotal="densityDefectTotal"
      :DefectAverangeTimeTotal="DefectAverangeTimeTotal"
      :reopenedTotal="reopenedTotal"
      :defectOfTSInTITotal="defectOfTSInTITotal"
      :statusByProjectGroupDayTop5="statusByProjectGroupDayTop5"
      :statusByProjectGroupDayTop30="statusByProjectGroupDayTop30"
      :statusByProjectGroupMonth="statusByProjectGroupMonth"
      :defectStatus="defectStatus"
      :defectGroupOrigin="defectGroupOrigin"
      :defectsOpenInTestManuf="defectsOpenInTestManuf"
      :defectsOpenInDevManuf="defectsOpenInDevManuf"
      :ctImpactedXDefects="ctImpactedXDefects"
      :productivityXDefects="productivityXDefects"
      :productivityXDefectsGroupWeekly="productivityXDefectsGroupWeekly"
      :iterations="iterations"
      :iterationsActive="iterationsActive"
      :iterationsActiveFull="iterationsActiveFull"
      :iterationsSelected="iterationsSelected"
      :iterationsFiltered="iterationsFiltered"
      @onConfirmIterations="ConfirmIterations"
    />

    <!-- SEND REPORT -->
    <oiModal id="showReport" >
      <div style="margin:0; border:0; padding:0" slot="header">
        <div class="col-xs-1" style="padding:0; margin:0; border:0">
          <a class="btn btn-primary btn-xs"   
            role="button"
            data-dismiss="modal">
            Fechar
          </a> 
        </div>
      
        <div class="col-xs-10" style="text-align: center">
          <label class="fd-label">{{email.subject}}</label>
        </div>
        
        <hr class="col-xs-12" >
      </div>

      <div class="text-center" style="padding: 0; padding-left: 15px; padding-right: 15px" slot="body">
        <div class="form-group" style="text-align: left">
            E-mail de destino:
            <input type="email" class="form-control" id="email" autofocus v-focus placeholder="email de destino" v-model="email.to"></textarea>
        </div>

        <div class="form-group" style="text-align: left; margin-bottom: 3px;">
            Assunto do e-mail:
            <textarea class="form-control" rows="2" id="subject" placeholder="título da menssagem" v-model="email.subject"></textarea>
        </div>

        <a class="btn btn-primary btn-xs" id="alert-target"
          role="button"
          :disabled="email.to === '' || email.subject === ''"
          @click="sendReportByEmail">
          Enviar
        </a>            
      </div>

      <div class="text-left">
        <a class="btn btn-primary btn-xs" 
          role="button" 
          data-toggle="collapse" 
          href="#xpto52" 
          aria-expanded="false" 
          aria-controls="collapseExample">
          Exibir Report
        </a>            

        <div id="xpto52" class="collapse" >
            <oiReport
              :project="project"
              :densityDefectTotal="densityDefectTotal"
              :DefectAverangeTimeTotal="DefectAverangeTimeTotal"
              :reopenedTotal="reopenedTotal"
              :defectOfTSInTITotal="defectOfTSInTITotal"
              :statusByProjectGroupDayTop5="statusByProjectGroupDayTop5"
              :statusByProjectGroupDayTop30="statusByProjectGroupDayTop30"
              :statusByProjectGroupMonth="statusByProjectGroupMonth"
              :defectStatus="defectStatus"
              :defectGroupOrigin="defectGroupOrigin"
              :defectsOpenInTestManuf="defectsOpenInTestManuf"
              :defectsOpenInDevManuf="defectsOpenInDevManuf"
              :ctImpactedXDefects="ctImpactedXDefects"
              :productivityXDefects="productivityXDefects"
              :productivityXDefectsGroupWeekly="productivityXDefectsGroupWeekly"
            />
        </div>
      </div>
    </oiModal>  
  </div>
</template>


<style scoped>
  .oi-icon {
    font-size: medium;
  }
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  }
</style>
