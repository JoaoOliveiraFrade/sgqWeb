<script>
  import { mapActions } from 'vuex'
  import oiModal from '@/genComp/modal/Modal_.vue'
  import oiReport from '@/module/project/testProj/comp/showReport.vue'
  import { paths } from '@/environment'
  
  import Toastr from 'toastr'

  import oiGrid from './grid.vue'
  import oiEdit from './edit.vue'
  import oiView from '@/module/project/testProj/comp/view.vue'
  import services from '../services'
  import servicesDefect from '@/module/defect/services'
  import services2 from '@/module/project/testProj/services'
  
  import getStatusTrans from '@/lib/getStatusTrans'

  export default {
    name: 'cadProjectsMain',

    components: { oiModal, oiReport, oiGrid, oiEdit, oiView },

    data () {
      return {
        project: { },

        state: 'search',

        filterProperties: [
          {name: 'subDel'},
          {name: 'name'},
          {name: 'classification'},
          {name: 'release'},
          {name: 'state'},
          {name: 'trafficLight'}
        ],

        projectFilterTerm: '',

        projects: [],
        projectsFilteredByText: [],

        densityByProject: [],
        densityDefectTotal: {},

        averangeTimeByProject: [],
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
        iterationsSelected: [],

        email: {
          from: 'sgq@oi.net.br',
          to: '',
          subject: '',
          url: ''
        }
      }
    },

    created () {
      this.setFeatureName('Cadastro Entregas')
      this.loadData()
    },

    methods: {
      ...mapActions(['setFeatureName']),
      loadData () {
        /* getProjects().then(data => {
          this.projects = data
          this.projectsFilteredByText = data
        })
        services.getAll({}).then(resp => {
          this.projects = resp.data
          this.projectsFilteredByText = resp.data
        })
        */
        services.getProjects().then(resp => {
          this.projects = resp.data
          this.projectsFilteredByText = resp.data
        })
      },

      saveItem (project) {
        /* updateProject(project)
          .then(data => {
          }) */

        services.update(project).then(r => {
          Toastr.success('Dados gravados!')
        })

        this.state = 'search'
      },

      filterProjects (evento) {
        let _this = this
        if (this.projectFilterTerm !== '') {
          let words = this.projectFilterTerm.split('+')

          this.projectsFilteredByText = this.projects.filter(item => {
            return words.every(word => {
              return _this.filterProperties.some(filterProperty => {
                return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
              })
            })
          })
        } else {
          this.projectsFilteredByText = this.projects
        }
      },

      selectItem (project, state) {
        this.project = project
        this.state = state
        this.loadIterations(this.project)
        this.loadIterationsActive(this.project)
        this.loadIterationsSelected(this.project)
        this.loadDensityData(this.project)
        this.loadAverangeTimeData(this.project)
        this.loadReopenedData(this.project)
        this.loaddefectOfTSInTIData(this.project)
        this.loadStatus(this.project)
        this.loaddefectStatus(this.project)
        this.loaddefectGroupOrigin(this.project)
        this.loadCtImpactedXDefects(this.project)
        this.loadDefectsOpenInTestManuf(this.project)
        this.loadDefectsOpenInDevManuf(this.project)
        this.loadCtImpactedXDefects(this.project)
        this.loadProductivityXDefects(this.project)
        this.loadProductivityXDefectsGroupWeekly(this.project)

        let subDel = this.project.subDel.split(' ')
        this.email.subject = '[Status Entrega] SubPrj: ' + subDel[0] + ', Ent: ' + subDel[1] + ', Nome: ' + this.subDel.name
      },

      showItem () {
        this.state = 'show'
      },

      editItem () {
        this.state = 'edit'
      },

      searchItem () {
        this.state = 'search'
      },

      showReport () {
        this.state = 'showReport'
      },

      closeModalShowReport () {
        this.state = 'show'
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

      loadDensityData (project) {
        /*
        servicesDensity.getByProject(project).then(resp => {
          this.densityByProject = resp.data
          this.densityDefectTotal = getDensityDefectTotal(resp.data)
        })
        */
        services.getDensity(this.project).then(resp => {
          this.densityDefectTotal = resp.data
        })
      },

      loadAverangeTimeData (project) {
        /*
        servicesAverangeTime.getByProject(project).then(resp => {
          this.averangeTimeByProject = resp.data
          this.DefectAverangeTimeTotal = getDefectAverangeTimeTotal(resp.data, 'HIGH')
        })
        */
        services.getAverangeTimeBySeverity(this.project, '3-HIGH').then(resp => {
          this.DefectAverangeTimeTotal = resp.data
        })
      },

      loadReopenedData (project) {
        /*
        servicesReopened.getByProject(project).then(resp => {
          this.reopenedByProject = resp.data
          this.reopenedTotal = getReopenedTotal(resp.data, 5)
        })
        */
        services.getReopened(this.project).then(resp => {
          this.reopenedTotal = resp.data
        })
      },

      loaddefectOfTSInTIData (project) {
        /*
        servicesdefectOfTSInTI.getByProject(project).then(resp => {
          this.defectOfTSInTIByProject = resp.data
          this.defectOfTSInTITotal = getdefectOfTSInTITotal(resp.data, 5)
        })
        */
        services.getdefectOfTSInTI(this.project).then(resp => {
          this.defectOfTSInTITotal = resp.data
        })
      },

      loadStatus (project) {
        /*
        servicesStatusGroupDay.getByProject(project).then(resp => {
          this.statusByProjectGroupDayTop30 = getStatusTrans(resp.data.slice(0, 29).sort((a, b) => a.dateOrder > b.dateOrder ? 1 : (a.dateOrder < b.dateOrder ? -1 : 0)))
          this.statusByProjectGroupDayTop5 = getStatusTrans(resp.data.slice(0, 4))
        })
        servicesStatusGroupMonth.getByProject(project).then(resp => {
          this.statusByProjectGroupMonth = getStatusTrans(resp.data)
        })
        */
        services.getStatusLastDays(this.project).then(resp => {
          this.statusByProjectGroupDayTop5 = getStatusTrans(resp.data.last05Days)
          this.statusByProjectGroupDayTop30 = getStatusTrans(resp.data.last30Days)
        })
        services.getStatusGroupMonth(this.project).then(resp => {
          this.statusByProjectGroupMonth = getStatusTrans(resp.data)
        })
      },

      loaddefectStatus (project) {
        /*
        servicesdefectStatus.getByProject(project).then(resp => {
          this.defectStatus = resp.data
        })
        */
        servicesDefect.defectStatus(this.project).then(resp => {
          this.defectStatus = resp.data
        })
      },

      loaddefectGroupOrigin (project) {
        /*
        servicesdefectGroupOrigin.getByProject(project).then(resp => {
          this.defectGroupOrigin = resp.data
        })
        */
        servicesDefect.defectGroupOrigin(this.project).then(resp => {
          this.defectGroupOrigin = resp.data
        })
      },

      loadDefectsOpenInTestManuf (project) {
        /*
        servicesDefectsOpenInTestManuf.getByProject(project).then(resp => {
          this.defectsOpenInTestManuf = resp.data
        })
        */
        servicesDefect.defectsOpenInTestManuf(this.project).then(resp => {
          this.defectsOpenInTestManuf = resp.data
        })
      },

      loadDefectsOpenInDevManuf (project) {
        /*
        servicesDefectsOpenInDevManuf.getByProject(project).then(resp => {
          this.defectsOpenInDevManuf = resp.data
        })
        */
        servicesDefect.defectsOpenInDevManuf(this.project).then(resp => {
          this.defectsOpenInDevManuf = resp.data
        })
      },

      loadCtImpactedXDefects (project) {
        /*
        servicesCtImpactedXDefects.getByProject(project).then(resp => {
          this.ctImpactedXDefects = resp.data
        })
        */
        services.getCtImpactedXDefects(this.project).then(resp => {
          this.ctImpactedXDefects = resp.data
        })
      },

      loadProductivityXDefects (project) {
        /*
        servicesProductivityXDefects.getByProject(project).then(resp => {
          this.productivityXDefects = resp.data
        })
        */
        services.getProductivityXDefects(this.project).then(resp => {
          this.productivityXDefects = resp.data
        })
      },

      loadProductivityXDefectsGroupWeekly (project) {
        /*
        servicesProductivityXDefectsGroupWeekly.getByProject(project).then(resp => {
          this.productivityXDefectsGroupWeekly = resp.data
        })
        */
        services.getProductivityXDefectsGroupWeekly(this.project).then(resp => {
          this.productivityXDefectsGroupWeekly = resp.data
        })
      },

      loadIterations (project) {
        services2.getIterations(project).then(resp => {
          this.iterations = resp.data
        })
      },

      loadIterationsActive (project) {
        services2.getIterationsActive(project).then(resp => {
          this.iterationsActive = resp.data
          if (this.iterationsActive.length === 1) {
            if (this.iterationsActive[0] === '') {
              this.iterationsActive = []
            }
          }
        })
      },

      loadIterationsSelected (project) {
        services2.getIterationsSelected(project).then(resp => {
          this.iterationsSelected = resp.data
        })
      }

    }
  }
</script>

<template>
  <div id="cadProjectsMain" class="container">
    <div class="row">
      <div class="col-xs-6 text-left" style="padding:0px">
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
          title="Pesquisar">
          <span class="glyphicon glyphicon-search"></span>
        </a>

        <a class="btn btn-xs my-tool-tip oi-icon"
          v-show="this.state === 'show'" 
          @click="editItem"
          data-toggle="tooltip" 
          title="Editar">
          <span class="glyphicon glyphicon-pencil"></span>
        </a>                  
        <a class="btn btn-xs my-tool-tip oi-icon" 
          v-show="this.state === 'edit'" 
          @click="saveItem(project)"
          data-toggle="tooltip" 
          title="Gravar">
          <span class='glyphicon glyphicon-floppy-disk'></span>
        </a>

        <a class="btn btn-xs my-tool-tip oi-icon"
          v-show="this.state === 'edit'" 
          @click="showItem"
          data-toggle="tooltip" 
          title="Exibir">
          <span class='glyphicon glyphicon-list-alt'></span>
        </a>
      </div>
    </div>

    <div class="row" v-show="this.state=='search'" style="padding-bottom:5px;">
      <input type="text"
        class="form-control"
        style="margin: 0; padding-left: 3px; height: 30px"
        autofocus v-focus
        placeholder="Informe o filtro! Ex: multip+verde"
        v-model="projectFilterTerm"
        @keyup="filterProjects"/>
    </div>

    <div class="row" >
      <oiGrid
        v-show="this.state === 'search'"
        :dataSource="projectsFilteredByText"
        @onSelectItem="selectItem"
      />
      
      <oiEdit 
        v-show="this.state=='edit'"
        :project="project"
        :densityDefectTotal="densityDefectTotal"
        :DefectAverangeTimeTotal="DefectAverangeTimeTotal"
        :reopenedTotal="reopenedTotal"
        :defectOfTSInTITotal="defectOfTSInTITotal"
        :iterations="iterations"
        :iterationsActive="iterationsActive"
        :iterationsSelected="iterationsSelected"
      />

      <oiView
        v-show="this.state=='show'"
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
        :iterationsSelected="iterationsSelected"
      />    

      <!-- SEND REPORT -->
      <oiModal id="showReport" >
        <div class="text-center">
          <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="email de destino" v-model="email.to"></textarea>
          </div>

          <div class="form-group">
              <textarea class="form-control" rows="3" id="subject" placeholder="título da menssagem" v-model="email.subject"></textarea>
          </div>

          <a class="btn btn-primary btn-xs" id="alert-target"
            role="button"
            v-show="email.to != '' && email.subject != ''"
            @click="sendReportByEmail">
            Enviar
          </a>            

          <a class="btn btn-primary btn-xs" 
            role="button"
            data-dismiss="modal"
            @click="closeModalShowReport">
            Fechar
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
  </div>
</template>

<style scoped>
  input {
     min-width: 100%
  }
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    border: 0;
    padding: 0;
  }
  .oi-icon {
    font-size: medium;
  }
</style>
