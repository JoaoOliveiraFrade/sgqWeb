<script>
  import oiReport from './showReport.vue'
  import services from '../services'
  import servicesDefect from '@/module/defect/services'
  import getStatusTrans from '@/lib/getStatusTrans'

  export default {
    name: 'ProjectReport',

    components: { oiReport },

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
        iterationsSelected: [],
        iterationsFiltered: []
      }
    },

    created () {
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

    methods: {
      loadProject () {
        services.getProjectBySubEnt(this.project.subproject, this.project.delivery).then(resp => {
          this.project = resp.data

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

        services.getIterations(this.project).then(resp => {
          this.iterations = resp.data
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

        servicesDefect.DefectsOpenInDevManufIterations(this.project, this.iterationsFiltered).then(resp => {
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
      }
    }
  }
</script>

<template>
    <div class="container well well-sm">
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
      {{ iterationsFiltered }}
    </div>
</template>


<style scoped>
  .oi-icon {
    font-size: medium;
  }
</style>
