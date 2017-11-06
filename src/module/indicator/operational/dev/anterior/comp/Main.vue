chartDensityDevManuf<script>
  import { mapActions } from 'vuex'
  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  // const highcharts3d = require('highcharts-3d')
  // highcharts3d(Highcharts)

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsDrilldown = require('highcharts-drilldown')
  highchartsDrilldown(Highcharts)

  const highchartsNoData = require('highcharts-no-data-to-display')
  highchartsNoData(Highcharts)

  import oiSelection from '@/module/selection/comp/selections.vue'
  import oiSelectionProjects from './comp/selectionProjects.vue'
  
  import OptionsDrillDown from '@/comp/chart/types/drillDown'
  import OptionsTimeline from '@/comp/chart/types/timeline'
  import OptionsTotal from '@/comp/chart/types/Total'

  import oiDensityShowRule from './comp/rules/DensityShowRule.vue'
  import oiDensityShowAnalytic from './comp/analytics/DensityShowAnalytic.vue'

  import oiAverageTimeShowRule from './comp/rules/AverageTimeShowRule.vue'
  import oiAverageTimeShowAnalytical from './comp/analytics/AverageTimeShowAnalytical.vue'
  import oiShowAnalytical from './comp/analytics/showAnalytical.vue'
  // import oiModal from '@/comp/modal/Modalx.vue'
  import oiModal from '@/comp/modal/Modal2.vue'

  import { paths } from '@/environment'

  export default {
    name: 'indicatorOfDevelopment',

    components: {
      oiSelection,
      oiSelectionProjects,
      // oiRulesDensity,
      oiDensityShowRule,
      oiDensityShowAnalytic,
      oiModal,
      oiAverageTimeShowRule,
      oiAverageTimeShowAnalytical,
      oiShowAnalytical
    },

    data () {
      return {
        pingCounter: 0,
        messageTimeline: false,

        devManufacturers: [],
        devManufacturersSelected: [],
        selectDevManufConfirmed: false,

        systems: [],
        systemsFiltered: [],
        systemsSelected: [],
        systemsConfirmed: false,

        projects: [],
        projectsFiltered: [],
        projectsSelected: [],
        projectFilterTerm: '',
        projectsConfirmed: false,
        inEdit: false,

        density: [],
        // densityDay: [],
        // densityLastDay: [],
        densityTimeline: [],
        densityFiltered: [],
        densityOptionsDrillDown: OptionsDrillDown(),
        densityOptionsTimeline: OptionsTimeline(),
        densityOptionsTotal: OptionsTotal(),
        densityDevManufSelected: '',
        densitySystemSelected: '',

        averageTime: [],
        // averageTimeDay: [],
        // averageTimeLastDay: [],
        averageTimeline: [],
        averageTimeFiltered: [],
        averageTimeOptionsDrillDown: OptionsDrillDown(),
        averageTimeOptionsTimeline: OptionsTimeline(),
        averageTimeOptionsTotal: OptionsTotal(),
        averageTimeDevManufSelected: '',
        averageTimeSystemSelected: '',
        severitys: [ { name: 'LOW', hours: 16 }, { name: 'MEDIUM', hours: 8 }, { name: 'HIGH', hours: 4 } ],
        severitySelected: 'HIGH',

        wrongClassif: [],
        // wrongClassifDay: [],
        // wrongClassifLastDay: [],
        wrongClassifTimeline: [],
        wrongClassifFiltered: [],
        wrongClassifOptionsDrillDown: OptionsDrillDown(),
        wrongClassifOptionsTimeline: OptionsTimeline(),
        wrongClassifOptionsTotal: OptionsTotal(),
        wrongClassifDevManufSelected: '',
        wrongClassifSystemSelected: '',

        defectOfTSInTI: [],
        // defectOfTSInTIDay: [],
        // defectOfTSInTILastDay: [],
        defectOfTSInTITimeline: [],
        defectOfTSInTIFiltered: [],
        defectOfTSInTIOptionsDrillDown: OptionsDrillDown(),
        defectOfTSInTIOptionsTimeline: OptionsTimeline(),
        defectOfTSInTIOptionsTotal: OptionsTotal(),
        defectOfTSInTIDevManufSelected: '',
        defectOfTSInTISystemSelected: '',

        reopened: [],
        // reopenedDay: [],
        // reopenedLastDay: [],
        reopenedTimeline: [],
        reopenedFiltered: [],
        reopenedOptionsDrillDown: OptionsDrillDown(),
        reopenedOptionsTimeline: OptionsTimeline(),
        reopenedOptionsTotal: OptionsTotal(),
        reopenedDevManufSelected: '',
        reopenedSystemSelected: '',

        noPrediction: [],
        // noPredictionDay: [],
        // noPredictionLastDay: [],
        noPredictionTimeline: [],
        noPredictionFiltered: [],
        noPredictionOptionsDrillDown: OptionsDrillDown(),
        noPredictionOptionsTimeline: OptionsTimeline(),
        noPredictionOptionsTotal: OptionsTotal(),
        noPredictionDevManufSelected: '',
        noPredictionSystemSelected: ''
      }
    },

    computed: {

      // DADOS QUE CONTROLAM A RESPONSIVIDADE DOS FILTROS //

      isShowFiltersSystems () { return this.selectDevManufConfirmed === true && this.devManufacturersSelected.length > 0 },
      isShowFiltersProjects () { return this.systemsConfirmed === true && this.systemsSelected.length > 0 },
      isShowindicator () { return this.projectsConfirmed === true && this.projectsSelected.length > 0 && !this.inEdit },

      filterData () {
        let _this = this
        return function (dataSource) {
          let out = []
          dataSource.forEach(i => {
            if (_this.devManufacturersSelected.indexOf(i.devManufacturing) > -1 && _this.systemsSelected.indexOf(i.system) > -1 && _this.projectsSelected.indexOf(i.project) > -1) {
              out.push(i)
            }
          })
          return out
        }
      },

      // DADOS COMPUTADOS DE DENSIDADE

      densityByDevManuf () {
        let out = []
        this.densityFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)
          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyCTs = out[index].qtyCTs + i.qtyCTs
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyDefects: i.qtyDefects,
              qtyCTs: i.qtyCTs,
              density: 0.0
            })
          }
        })
        out.forEach(o => {
          o.density = parseFloat((o.qtyDefects / ((o.qtyCTs !== 0) ? o.qtyCTs : 1)) * 100)
        })
        out = out.filter(i => i.density > 0)
        out = out.sort((a, b) => a.density > b.density ? 1 : (a.density < b.density ? -1 : 0))

        return out
      },
      densityByTimeline () {
        let out = []
        this.densityFiltered.forEach(i => {
          let index = out.findIndex(o => o.date === i.date)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyCTs = out[index].qtyCTs + i.qtyCTs
          } else {
            out.push({
              date: i.date,
              qtyDefects: i.qtyDefects,
              qtyCTs: i.qtyCTs,
              density: 0
            })
          }
        })
        out.forEach(o => {
          o.density = parseFloat(parseFloat(o.qtyDefects / (o.qtyCTs ? o.qtyCTs : 1) * 100).toFixed(2))
        })
        return out
      },
      densityDefectTotal () {
        let qtyTotalDefects = 0
        let qtyTotalCTs = 0
        this.densityFiltered.forEach(i => {
          qtyTotalDefects = qtyTotalDefects + i.qtyDefects
          qtyTotalCTs = qtyTotalCTs + i.qtyCTs
        })
        let out = parseFloat(parseFloat(qtyTotalDefects / ((qtyTotalCTs !== 0) ? qtyTotalCTs : 1) * 100).toFixed(2))
        return out
      },

      densityByDevManufAndTimeline () {
        let out = []

        this.densityFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.date === i.date)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyCTs = out[index].qtyCTs + i.qtyCTs
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              date: i.date,
              qtyDefects: i.qtyDefects,
              qtyCTs: i.qtyCTs,
              density: 0
            })
          }
        })
        out.forEach(o => {
          o.density = parseFloat(parseFloat(o.qtyDefects / (o.qtyCTs ? o.qtyCTs : 1) * 100).toFixed(2))
          o.density = (o.density < 100) ? o.density : 100
        })

        return out
      },
      densityByDevManufAndSystemAndTimeline () {
        let out = []

        this.densityFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.system === i.system && o.date === i.date)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyCTs = out[index].qtyCTs + i.qtyCTs
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              date: i.date,
              qtyDefects: i.qtyDefects,
              qtyCTs: i.qtyCTs,
              density: 0
            })
          }
        })
        out.forEach(o => {
          o.density = parseFloat(parseFloat(o.qtyDefects / (o.qtyCTs ? o.qtyCTs : 1) * 100).toFixed(2))
        })

        return out
      },

      densityByDevManufAndTotal () {
        let out = []

        this.densityFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyCTs = out[index].qtyCTs + i.qtyCTs
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyDefects: i.qtyDefects,
              qtyCTs: i.qtyCTs,
              density: 0
            })
          }
        })
        out.forEach(o => {
          o.density = parseFloat(parseFloat(o.qtyDefects / (o.qtyCTs ? o.qtyCTs : 1) * 100).toFixed(2))
        })

        return out
      },
      densityByDevManufAndSystemAndTotal () {
        let out = []

        this.densityFiltered.forEach(i => {
          let index = out.findIndex(o =>
            o.devManufacturing === i.devManufacturing &&
            o.system === i.system)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyCTs = out[index].qtyCTs + i.qtyCTs
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              qtyDefects: i.qtyDefects,
              qtyCTs: i.qtyCTs,
              density: 0
            })
          }
        })
        out.forEach(o => {
          o.density = parseFloat(parseFloat(o.qtyDefects / (o.qtyCTs ? o.qtyCTs : 1) * 100).toFixed(2))
        })
        return out
      },

      densitySeries () {
        return [ {
          name: 'densidade',
          colorByPoint: true,
          data: this.densityByDevManuf.map(i => ({ name: i.devManufacturing, y: i.density, drilldown: i.devManufacturing }))
        } ]
      },
      densityDrilldownSeries () {
        let _this = this
        let out = []
        this.densityByDevManuf.forEach(fab => {
          out.push({
            name: fab.devManufacturing,
            id: fab.devManufacturing,
            data: _this.densityByOneSystem(fab.devManufacturing).map(i => [i.system, i.density])
          })
        })
        return out
      },
      densityByOneSystem () {
        return function (devManufacturing) {
          let dataTarget = []
          let dataSourceLocal = []

          if (devManufacturing !== '') {
            dataSourceLocal = this.densityFiltered.filter(i => i.devManufacturing === devManufacturing)
          }
          dataSourceLocal.forEach(i => {
            let index = dataTarget.findIndex(target => target.system === i.system)
            if (index > -1) {
              dataTarget[index].qtyDefects = dataTarget[index].qtyDefects + i.qtyDefects
              dataTarget[index].qtyCTs = dataTarget[index].qtyCTs + i.qtyCTs
            } else {
              dataTarget.push({
                system: i.system,
                qtyDefects: i.qtyDefects,
                qtyCTs: i.qtyCTs,
                density: 0
              })
            }
          })

          dataTarget.forEach(target => {
            target.density = parseFloat(parseFloat(target.qtyDefects / (target.qtyCTs ? target.qtyCTs : 1) * 100).toFixed(2))
          })

          dataTarget = dataTarget.filter(i => i.density > 0)
          dataTarget = dataTarget.sort((a, b) => a.density > b.density ? 1 : (a.density < b.density ? -1 : 0))
          return dataTarget
        }
      },

      // DADOS COMPUTADOS DE TEMPO MÉDIO //

      averageTimeByDevManuf () {
        let _this = this
        let out = []
        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)
          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyHours = out[index].qtyHours + i.qtyHours
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyDefects: i.qtyDefects,
              qtyHours: i.qtyHours,
              Media: 0
            })
          }
        })
        out.forEach(o => {
          o.Media = parseFloat(o.qtyHours / (o.qtyDefects ? o.qtyDefects : 1))
        })
        out = out.filter(i => i.Media > 0)
        out = out.sort((a, b) => a.Media > b.Media ? 1 : (a.Media < b.Media ? -1 : 0))

        return out
      },
      averageTimeByTimeline () {
        let _this = this
        let out = []
        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          let index = out.findIndex(o => o.date === i.date)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyHours = out[index].qtyHours + i.qtyHours
          } else {
            out.push({
              date: i.date,
              qtyDefects: i.qtyDefects,
              qtyHours: i.qtyHours,
              Media: 0
            })
          }
        })
        out.forEach(o => {
          o.Media = parseFloat(parseFloat((o.qtyHours / (o.qtyDefects ? o.qtyDefects : 1))).toFixed(2))
        })
        return out
      },
      averageTimeTotal () {
        let _this = this
        let qtyTotalDefects = 0
        let qtyTotalHours = 0
        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          qtyTotalDefects = qtyTotalDefects + i.qtyDefects
          qtyTotalHours = qtyTotalHours + i.qtyHours
        })
        let out = parseFloat(parseFloat(qtyTotalHours / ((qtyTotalDefects !== 0) ? qtyTotalDefects : 1)).toFixed(2))
        return out
      },

      averageTimeByDevManufAndTimeline () {
        let _this = this
        let out = []

        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.date === i.date)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyHours = out[index].qtyHours + i.qtyHours
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              date: i.date,
              qtyDefects: i.qtyDefects,
              qtyHours: i.qtyHours,
              Media: 0
            })
          }
        })
        out.forEach(o => {
          o.Media = parseFloat(parseFloat(o.qtyHours / (o.qtyDefects ? o.qtyDefects : 1)).toFixed(2))
        })

        return out
      },
      averageTimeByDevManufAndSystemAndTimeline () {
        let _this = this
        let out = []

        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.system === i.system && o.date === i.date)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyHours = out[index].qtyHours + i.qtyHours
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              date: i.date,
              qtyDefects: i.qtyDefects,
              qtyHours: i.qtyHours,
              Media: 0
            })
          }
        })
        out.forEach(o => {
          o.Media = parseFloat(parseFloat(o.qtyHours / (o.qtyDefects ? o.qtyDefects : 1)).toFixed(2))
        })

        return out
      },

      averageTimeByDevManufAndTotal () {
        let _this = this
        let out = []

        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyHours = out[index].qtyHours + i.qtyHours
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyDefects: i.qtyDefects,
              qtyHours: i.qtyHours,
              Media: 0
            })
          }
        })
        out.forEach(o => {
          o.Media = parseFloat(parseFloat(o.qtyHours / (o.qtyDefects ? o.qtyDefects : 1)).toFixed(2))
        })

        return out
      },
      averageTimeByDevManufAndSystemAndTotal () {
        let _this = this
        let out = []

        this.averageTimeFiltered.filter(f => f.severity === _this.severitySelected).forEach(i => {
          let index = out.findIndex(o =>
            o.devManufacturing === i.devManufacturing &&
            o.system === i.system)

          if (index > -1) {
            out[index].qtyDefects = out[index].qtyDefects + i.qtyDefects
            out[index].qtyHours = out[index].qtyHours + i.qtyHours
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              qtyDefects: i.qtyDefects,
              qtyHours: i.qtyHours,
              Media: 0
            })
          }
        })
        out.forEach(o => {
          o.Media = parseFloat(parseFloat(o.qtyHours / (o.qtyDefects ? o.qtyDefects : 1)).toFixed(2))
        })
        return out
      },

      averageTimeSeries () {
        return [ {
          name: 'horas',
          colorByPoint: true,
          data: this.averageTimeByDevManuf.map(i => ({ name: i.devManufacturing, y: i.Media, drilldown: i.devManufacturing }))
        } ]
      },
      averageTimeDrilldownSeries () {
        let _this = this
        let out = []

        this.averageTimeByDevManuf.forEach(fab => {
          out.push({
            name: fab.devManufacturing,
            id: fab.devManufacturing,
            data: _this.averageTimeByOneSystem(fab.devManufacturing).map(i => [i.system, i.Media])
          })
        })
        return out
      },
      averageTimeByOneSystem () {
        return function (devManufacturing) {
          let dataTarget = []
          let dataSourceLocal = []

          if (devManufacturing !== '') {
            dataSourceLocal = this.averageTimeFiltered.filter(i => i.devManufacturing === devManufacturing)
          }
          dataSourceLocal.forEach(i => {
            let index = dataTarget.findIndex(target => target.system === i.system)
            if (index > -1) {
              dataTarget[index].qtyDefects = dataTarget[index].qtyDefects + i.qtyDefects
              dataTarget[index].qtyHours = dataTarget[index].qtyHours + i.qtyHours
            } else {
              dataTarget.push({
                system: i.system,
                qtyDefects: i.qtyDefects,
                qtyHours: i.qtyHours,
                Media: 0
              })
            }
          })

          dataTarget.forEach(target => {
            target.Media = parseFloat(parseFloat(target.qtyHours / (target.qtyDefects ? target.qtyDefects : 1)).toFixed(2))
          })

          dataTarget = dataTarget.filter(i => i.Media > 0)
          dataTarget = dataTarget.sort((a, b) => a.Media > b.Media ? 1 : (a.Media < b.Media ? -1 : 0))
          return dataTarget
        }
      },

      // DADOS COMPUTADOS DE CLASSIFICAÇÃO ERRADA //

      wrongClassifByDevManuf () {
        let out = []
        this.wrongClassifFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)
          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        out = out.filter(i => i.qty > 0)
        out = out.sort((a, b) => a.qty > b.qty ? 1 : (a.qty < b.qty ? -1 : 0))

        return out
      },
      wrongClassifByTimeline () {
        let out = []
        this.wrongClassifFiltered.forEach(i => {
          let index = out.findIndex(o => o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },
      wrongClassifTotal () {
        let qtyTotal = 0
        let qty = 0
        let percentReference = 0
        this.wrongClassifFiltered.forEach(i => {
          qtyTotal = qtyTotal + i.qtyTotal
          qty = qty + i.qty
          percentReference = i.percentReference
        })
        let percent = parseFloat(parseFloat(qty / ((qtyTotal !== 0) ? qtyTotal : 1) * 100).toFixed(2))
        let qtyReference = parseFloat(parseFloat(qtyTotal * (percentReference / 100)).toFixed(2))

        return {
          qtyTotal: qtyTotal,
          qty: qty,
          percent: percent,
          percentReference: percentReference,
          qtyReference: qtyReference
        }
      },

      wrongClassifByDevManufAndTimeline () {
        let out = []

        this.wrongClassifFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      wrongClassifByDevManufAndSystemAndTimeline () {
        let out = []

        this.wrongClassifFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.system === i.system && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },

      wrongClassifByDevManufAndTotal () {
        let out = []

        this.wrongClassifFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      wrongClassifByDevManufAndSystemAndTotal () {
        let out = []

        this.wrongClassifFiltered.forEach(i => {
          let index = out.findIndex(o =>
            o.devManufacturing === i.devManufacturing &&
            o.system === i.system)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },

      wrongClassifSeries () {
        return [ {
          name: 'defeitos',
          colorByPoint: true,
          data: this.wrongClassifByDevManuf.map(i => ({ name: i.devManufacturing, y: i.qty, drilldown: i.devManufacturing, qtyTotal: i.qtyTotal, percent: i.percent }))
        } ]
      },
      wrongClassifDrilldownSeries () {
        let _this = this
        let out = []

        this.wrongClassifByDevManuf.forEach(fab => {
          out.push({
            name: fab.devManufacturing,
            id: fab.devManufacturing,
            data: _this.wrongClassifByOneSystem(fab.devManufacturing).map(i => ({ name: i.system, percent: i.percent, y: i.qty, qtyTotal: i.qtyTotal }))
          })
        })
        return out
      },
      wrongClassifByOneSystem () {
        return function (devManufacturing) {
          let dataTarget = []
          let dataSourceLocal = []

          if (devManufacturing !== '') {
            dataSourceLocal = this.wrongClassifFiltered.filter(i => i.devManufacturing === devManufacturing)
          }
          dataSourceLocal.forEach(i => {
            let index = dataTarget.findIndex(target => target.system === i.system)
            if (index > -1) {
              dataTarget[index].qtyTotal = dataTarget[index].qtyTotal + i.qtyTotal
              dataTarget[index].qty = dataTarget[index].qty + i.qty
            } else {
              dataTarget.push({
                system: i.system,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percent: 0.0,
                percentReference: i.percentReference,
                qtyReference: 0.0
              })
            }
          })

          dataTarget.forEach(target => {
            target.percent = parseFloat(parseFloat(target.qty / (target.qtyTotal ? target.qtyTotal : 1) * 100).toFixed(2))
          })

          dataTarget = dataTarget.filter(i => i.qty > 0)
          dataTarget = dataTarget.sort((a, b) => a.qty > b.qty ? 1 : (a.qty < b.qty ? -1 : 0))
          return dataTarget
        }
      },

      // DADOS COMPUTADOS DE DEF. DETECTÁVEIS EM DES. //

      defectOfTSInTIByDevManuf () {
        let out = []
        this.defectOfTSInTIFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)
          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        out = out.filter(i => i.qty > 0)
        out = out.sort((a, b) => a.qty > b.qty ? 1 : (a.qty < b.qty ? -1 : 0))

        return out
      },
      defectOfTSInTIByTimeline () {
        let out = []
        this.defectOfTSInTIFiltered.forEach(i => {
          let index = out.findIndex(o => o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },
      defectOfTSInTITotal () {
        let qtyTotal = 0
        let qty = 0
        let percentReference = 0
        this.defectOfTSInTIFiltered.forEach(i => {
          qtyTotal = qtyTotal + i.qtyTotal
          qty = qty + i.qty
          percentReference = i.percentReference
        })
        let percent = parseFloat(parseFloat(qty / ((qtyTotal !== 0) ? qtyTotal : 1) * 100).toFixed(2))
        let qtyReference = parseFloat(parseFloat(qtyTotal * (percentReference / 100)).toFixed(2))

        return {
          qtyTotal: qtyTotal,
          qty: qty,
          percent: percent,
          percentReference: percentReference,
          qtyReference: qtyReference
        }
      },

      defectOfTSInTIByDevManufAndTimeline () {
        let out = []

        this.defectOfTSInTIFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      defectOfTSInTIByDevManufAndSystemAndTimeline () {
        let out = []

        this.defectOfTSInTIFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.system === i.system && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },

      defectOfTSInTIByDevManufAndTotal () {
        let out = []

        this.defectOfTSInTIFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      defectOfTSInTIByDevManufAndSystemAndTotal () {
        let out = []

        this.defectOfTSInTIFiltered.forEach(i => {
          let index = out.findIndex(o =>
            o.devManufacturing === i.devManufacturing &&
            o.system === i.system)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },

      defectOfTSInTISeries () {
        return [ {
          name: 'defeitos',
          colorByPoint: true,
          data: this.defectOfTSInTIByDevManuf.map(i => ({ name: i.devManufacturing, y: i.qty, drilldown: i.devManufacturing, qtyTotal: i.qtyTotal, percent: i.percent }))
        } ]
      },
      defectOfTSInTIDrilldownSeries () {
        let _this = this
        let out = []

        this.defectOfTSInTIByDevManuf.forEach(fab => {
          out.push({
            name: fab.devManufacturing,
            id: fab.devManufacturing,
            data: _this.defectOfTSInTIByOneSystem(fab.devManufacturing).map(i => ({ name: i.system, percent: i.percent, y: i.qty, qtyTotal: i.qtyTotal }))
          })
        })
        return out
      },
      defectOfTSInTIByOneSystem () {
        return function (devManufacturing) {
          let dataTarget = []
          let dataSourceLocal = []

          if (devManufacturing !== '') {
            dataSourceLocal = this.defectOfTSInTIFiltered.filter(i => i.devManufacturing === devManufacturing)
          }
          dataSourceLocal.forEach(i => {
            let index = dataTarget.findIndex(target => target.system === i.system)
            if (index > -1) {
              dataTarget[index].qtyTotal = dataTarget[index].qtyTotal + i.qtyTotal
              dataTarget[index].qty = dataTarget[index].qty + i.qty
            } else {
              dataTarget.push({
                system: i.system,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percent: 0.0,
                percentReference: i.percentReference,
                qtyReference: 0.0
              })
            }
          })

          dataTarget.forEach(target => {
            target.percent = parseFloat(parseFloat(target.qty / (target.qtyTotal ? target.qtyTotal : 1) * 100).toFixed(2))
          })

          dataTarget = dataTarget.filter(i => i.qty > 0)
          dataTarget = dataTarget.sort((a, b) => a.qty > b.qty ? 1 : (a.qty < b.qty ? -1 : 0))
          return dataTarget
        }
      },

      // DADOS COMPUTADOS DE DEF. REABERTOS //

      reopenedByDevManuf () {
        let out = []
        this.reopenedFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)
          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        out = out.filter(i => i.qty > 0)
        out = out.sort((a, b) => a.percent > b.percent ? 1 : (a.percent < b.percent ? -1 : 0))

        return out
      },
      reopenedByTimeline () {
        let out = []
        this.reopenedFiltered.forEach(i => {
          let index = out.findIndex(o => o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },
      reopenedTotal () {
        let qtyTotal = 0
        let qty = 0
        let percentReference = 0
        this.reopenedFiltered.forEach(i => {
          qtyTotal = qtyTotal + i.qtyTotal
          qty = qty + i.qty
          percentReference = i.percentReference
        })
        let percent = parseFloat(parseFloat(qty / ((qtyTotal !== 0) ? qtyTotal : 1) * 100).toFixed(2))
        let qtyReference = parseFloat(parseFloat(qtyTotal * (percentReference / 100)).toFixed(2))

        return {
          qtyTotal: qtyTotal,
          qty: qty,
          percent: percent,
          percentReference: percentReference,
          qtyReference: qtyReference
        }
      },

      reopenedByDevManufAndTimeline () {
        let out = []

        this.reopenedFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      reopenedByDevManufAndSystemAndTimeline () {
        let out = []

        this.reopenedFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.system === i.system && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },

      reopenedByDevManufAndTotal () {
        let out = []

        this.reopenedFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      reopenedByDevManufAndSystemAndTotal () {
        let out = []

        this.reopenedFiltered.forEach(i => {
          let index = out.findIndex(o =>
            o.devManufacturing === i.devManufacturing &&
            o.system === i.system)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },

      reopenedSeries () {
        return [ {
          name: 'defeitos',
          colorByPoint: true,
          data: this.reopenedByDevManuf.map(i => ({ name: i.devManufacturing, y: i.percent, drilldown: i.devManufacturing, qtyTotal: i.qtyTotal, qty: i.qty }))
        } ]
      },
      reopenedDrilldownSeries () {
        let _this = this
        let out = []

        this.reopenedByDevManuf.forEach(fab => {
          out.push({
            name: fab.devManufacturing,
            id: fab.devManufacturing,
            data: _this.reopenedByOneSystem(fab.devManufacturing).map(i => ({ name: i.system, y: i.percent, qtyTotal: i.qtyTotal, qty: i.qty }))
          })
        })
        return out
      },
      reopenedByOneSystem () {
        return function (devManufacturing) {
          let dataTarget = []
          let dataSourceLocal = []

          if (devManufacturing !== '') {
            dataSourceLocal = this.reopenedFiltered.filter(i => i.devManufacturing === devManufacturing)
          }
          dataSourceLocal.forEach(i => {
            let index = dataTarget.findIndex(target => target.system === i.system)
            if (index > -1) {
              dataTarget[index].qtyTotal = dataTarget[index].qtyTotal + i.qtyTotal
              dataTarget[index].qty = dataTarget[index].qty + i.qty
            } else {
              dataTarget.push({
                system: i.system,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percent: 0.0,
                percentReference: i.percentReference,
                qtyReference: 0.0
              })
            }
          })

          dataTarget.forEach(target => {
            target.percent = parseFloat(parseFloat(target.qty / (target.qtyTotal ? target.qtyTotal : 1) * 100).toFixed(2))
          })

          dataTarget = dataTarget.filter(i => i.qty > 0)
          dataTarget = dataTarget.sort((a, b) => a.qty > b.qty ? 1 : (a.qty < b.qty ? -1 : 0))
          return dataTarget
        }
      },

       // DADOS COMPUTADOS DE DEF. SEM PREVISÃO //

      noPredictionByDevManuf () {
        let out = []
        this.noPredictionFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)
          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        out = out.filter(i => i.qty > 0)
        out = out.sort((a, b) => a.percent > b.percent ? 1 : (a.percent < b.percent ? -1 : 0))

        return out
      },
      noPredictionByTimeline () {
        let out = []
        this.noPredictionFiltered.forEach(i => {
          let index = out.findIndex(o => o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat((o.qty / ((o.qtyTotal !== 0) ? o.qtyTotal : 1)) * 100)
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },
      noPredictionTotal () {
        let qtyTotal = 0
        let qty = 0
        let percentReference = 0
        this.noPredictionFiltered.forEach(i => {
          qtyTotal = qtyTotal + i.qtyTotal
          qty = qty + i.qty
          percentReference = i.percentReference
        })
        let percent = parseFloat(parseFloat(qty / ((qtyTotal !== 0) ? qtyTotal : 1) * 100).toFixed(2))
        let qtyReference = parseFloat(parseFloat(qtyTotal * (percentReference / 100)).toFixed(2))

        return {
          qtyTotal: qtyTotal,
          qty: qty,
          percent: percent,
          percentReference: percentReference,
          qtyReference: qtyReference
        }
      },

      noPredictionByDevManufAndTimeline () {
        let out = []

        this.noPredictionFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      noPredictionByDevManufAndSystemAndTimeline () {
        let out = []

        this.noPredictionFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing && o.system === i.system && o.date === i.date)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              date: i.date,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },

      noPredictionByDevManufAndTotal () {
        let out = []

        this.noPredictionFiltered.forEach(i => {
          let index = out.findIndex(o => o.devManufacturing === i.devManufacturing)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })

        return out
      },
      noPredictionByDevManufAndSystemAndTotal () {
        let out = []

        this.noPredictionFiltered.forEach(i => {
          let index = out.findIndex(o =>
            o.devManufacturing === i.devManufacturing &&
            o.system === i.system)

          if (index > -1) {
            out[index].qtyTotal = out[index].qtyTotal + i.qtyTotal
            out[index].qty = out[index].qty + i.qty
          } else {
            out.push({
              devManufacturing: i.devManufacturing,
              system: i.system,
              qtyTotal: i.qtyTotal,
              qty: i.qty,
              percent: 0.0,
              percentReference: i.percentReference,
              qtyReference: 0.0
            })
          }
        })
        out.forEach(o => {
          o.percent = parseFloat(parseFloat(o.qty / (o.qtyTotal ? o.qtyTotal : 1) * 100).toFixed(2))
          o.qtyReference = parseFloat(parseFloat(o.qtyTotal * (o.percentReference / 100)).toFixed(2))
        })
        return out
      },

      noPredictionSeries () {
        return [ {
          name: 'defeitos',
          colorByPoint: true,
          data: this.noPredictionByDevManuf.map(i => ({ name: i.devManufacturing, y: i.percent, drilldown: i.devManufacturing, qtyTotal: i.qtyTotal, qty: i.qty }))
        } ]
      },
      noPredictionDrilldownSeries () {
        let _this = this
        let out = []

        this.noPredictionByDevManuf.forEach(fab => {
          out.push({
            name: fab.devManufacturing,
            id: fab.devManufacturing,
            data: _this.noPredictionByOneSystem(fab.devManufacturing).map(i => ({ name: i.system, y: i.percent, qtyTotal: i.qtyTotal, qty: i.qty }))
          })
        })
        return out
      },
      noPredictionByOneSystem () {
        return function (devManufacturing) {
          let dataTarget = []
          let dataSourceLocal = []

          if (devManufacturing !== '') {
            dataSourceLocal = this.noPredictionFiltered.filter(i => i.devManufacturing === devManufacturing)
          }
          dataSourceLocal.forEach(i => {
            let index = dataTarget.findIndex(target => target.system === i.system)
            if (index > -1) {
              dataTarget[index].qtyTotal = dataTarget[index].qtyTotal + i.qtyTotal
              dataTarget[index].qty = dataTarget[index].qty + i.qty
            } else {
              dataTarget.push({
                system: i.system,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percent: 0.0,
                percentReference: i.percentReference,
                qtyReference: 0.0
              })
            }
          })

          dataTarget.forEach(target => {
            target.percent = parseFloat(parseFloat(target.qty / (target.qtyTotal ? target.qtyTotal : 1) * 100).toFixed(2))
          })

          dataTarget = dataTarget.filter(i => i.qty > 0)
          dataTarget = dataTarget.sort((a, b) => a.qty > b.qty ? 1 : (a.qty < b.qty ? -1 : 0))
          return dataTarget
        }
      }
    },

    mounted () {
      this.setFeatureName('Indicadores de Desenvolvimento')

      // CARREGAMENTO DE DADOS P. FILTRO

      this.loadJsonDevManufacturers()
      this.loadJsonSystems()
      this.loadJsonProjects()

      // CARREGAMENTO DE DADOS P. INDICADORES

      this.loadJsonDensity()
      this.loadJsonAverageTime()
      this.loadJsonWrongClassif()
      this.loadJsondefectOfTSInTI()
      this.loadJsonReopened()
      this.loadJsonNoPrediction()

      setInterval(function () {
        this.ping()
      }.bind(this), 20000)
    },

    methods: {
      ...mapActions(['setFeatureName']),

      loadJsonDevManufacturers () {
        let _this = this
        _this.$http.get(paths.api + '/devManufacturers')
          .then(
              r => {
                _this.devManufacturers = r.data
              },
              e => { console.log(e) }
          )
      },
      loadJsonSystems () {
        let _this = this
        _this.$http.get(paths.api + '/systems')
          .then(
            r => { _this.systems = r.data },
            e => { console.log(e) }
          )
      },
      loadJsonProjects () {
        let _this = this
        _this.$http.get(paths.api + '/projects')
          .then(
              r => {
                _this.projects = r.data
              },
              e => { console.log(e) }
          )
      },
      loadJsonDensity () {
        let _this = this
        _this.$http.get(paths.api + '/defectsDensity')
        .then(
            r => {
              _this.density = r.data
            },
            e => {
              console.log(e)
            }
        )
      },
      loadJsonAverageTime () {
        let _this = this
        _this.$http.get(paths.api + '/DefectsMiddleAges')
        .then(
            r => {
              _this.averageTime = r.data
            },
            e => {
              console.log(e)
            }
        )
      },
      loadJsonWrongClassif () {
        let _this = this
        _this.$http.get(paths.api + '/defectsWrongClassif')
        .then(
            r => { _this.wrongClassif = r.data },
            e => { console.log(e) }
        )
      },
      loadJsondefectOfTSInTI () {
        let _this = this
        _this.$http.get(paths.api + '/defectsdefectOfTSInTI')
        .then(
            r => {
              _this.defectOfTSInTI = r.data
            },
            e => {
              console.log(e)
            }
        )
      },
      loadJsonReopened () {
        let _this = this
        _this.$http.get(paths.api + '/defectsReopened')
        .then(
            r => {
              _this.reopened = r.data
            },
            e => {
              console.log(e)
            }
        )
      },
      loadJsonNoPrediction () {
        let _this = this
        _this.$http.get(paths.api + '/defectsNoPrediction')
        .then(
            r => {
              _this.noPrediction = r.data
            },
            e => {
              console.log(e)
            }
        )
      },

      newSelectedProject () {
        this.projectsConfirmed = false
      },
      enterInEdit () {
        this.inEdit = true
      },

      confirmDevManuf (itemsSelected) {
        this.devManufacturersSelected = itemsSelected

        const _this = this
        this.systemsFiltered = this.systems.filter(e => _this.devManufacturersSelected.indexOf(e.devManufacturing) > -1)
        this.systemsSelected = []

        this.projectsFiltered = []
        this.projectsSelected = []

        this.selectDevManufConfirmed = true
      },
      confirmSystems (itemsSelected) {
        this.systemsSelected = itemsSelected
        this.systemsConfirmed = true
        this.projectsConfirmed = false

        let _this = this
        _this.projectsFiltered = []
        _this.projects.forEach(proj => {
          if (_this.devManufacturersSelected.indexOf(proj.devManufacturing) > -1 &&
              _this.systemsSelected.indexOf(proj.system) > -1 &&
              _this.projectsFiltered.findIndex(projectFiltered => projectFiltered.id === proj.id) === -1) {
            _this.projectsFiltered.push(proj)
          }
        })

        this.projectsSelected = []
        this.projectFilterTerm = ''
        this.inEdit = false
      },
      confirmProjects (itemsSelected) {
        this.projectsSelected = itemsSelected
        this.projectsConfirmed = true
        this.messageTimeline = false
        this.inEdit = false

        // FILTRAR DADOS COM BASE NOS FILTROS INFORMADOS
        this.densityFiltered = this.filterData(this.density)
        this.averageTimeFiltered = this.filterData(this.averageTime)
        this.wrongClassifFiltered = this.filterData(this.wrongClassif)
        this.defectOfTSInTIFiltered = this.filterData(this.defectOfTSInTI)
        this.reopenedFiltered = this.filterData(this.reopened)
        this.noPredictionFiltered = this.filterData(this.noPrediction)

        // ATUALIZAR GRÁFICOS - DENSIDADE
        this.loadDensityChartDevManuf()
        this.loadDensityChartTimeline()
        this.loadDensityChartTotal()

        // ATUALIZAR GRÁFICOS - TEMPO MÉDIO
        this.loadAverageTimeChartDevManuf()
        this.loadAverageTimeChartTimeline()
        this.loadAverageTimeChartTotal()

        // ATUALIZAR GRÁFICOS - CLASSICAÇÃO ERRADA
        this.loadWrongClassifChartDevManuf()
        this.loadWrongClassifChartTimeline()
        this.loadWrongClassifChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. DETECTÁVEIS EM DES.
        this.loaddefectOfTSInTIChartDevManuf()
        this.loaddefectOfTSInTIChartTimeline()
        this.loaddefectOfTSInTIChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. REABERTOS
        this.loadReopenedChartDevManuf()
        this.loadReopenedChartTimeline()
        this.loadReopenedChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. SEM PREVISÃO
        this.loadNoPredictionChartDevManuf()
        this.loadNoPredictionChartTimeline()
        this.loadNoPredictionChartTotal()
      },
      confirmProjectsTimeline (itemsSelected, dataDens, dataAg, dataWr, dataDet, dataReop, dataPred) {
        this.projectsSelected = itemsSelected
        this.projectsConfirmed = true
        this.messageTimeline = true
        this.inEdit = false
        this.densityTimeline = dataDens
        this.averageTimeline = dataAg
        this.wrongClassifTimeline = dataWr
        this.defectOfTSInTITimeline = dataDet
        this.reopenedTimeline = dataReop
        this.noPredictionTimeline = dataPred

        // FILTRAR DADOS COM BASE NOS FILTROS INFORMADOS
        this.densityFiltered = this.filterData(this.densityTimeline)
        this.averageTimeFiltered = this.filterData(this.averageTimeline)
        this.wrongClassifFiltered = this.filterData(this.wrongClassifTimeline)
        this.defectOfTSInTIFiltered = this.filterData(this.defectOfTSInTITimeline)
        this.reopenedFiltered = this.filterData(this.reopenedTimeline)
        this.noPredictionFiltered = this.filterData(this.noPredictionTimeline)

        // ATUALIZAR GRÁFICOS - DENSIDADE
        this.loadDensityChartDevManuf()
        this.loadDensityChartTimeline()
        this.loadDensityChartTotal()

        // ATUALIZAR GRÁFICOS - TEMPO MÉDIO
        this.loadAverageTimeChartDevManuf()
        this.loadAverageTimeChartTimeline()
        this.loadAverageTimeChartTotal()

        // ATUALIZAR GRÁFICOS - CLASSICAÇÃO ERRADA
        this.loadWrongClassifChartDevManuf()
        this.loadWrongClassifChartTimeline()
        this.loadWrongClassifChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. DETECTÁVEIS EM DES.
        this.loaddefectOfTSInTIChartDevManuf()
        this.loaddefectOfTSInTIChartTimeline()
        this.loaddefectOfTSInTIChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. REABERTOS
        this.loadReopenedChartDevManuf()
        this.loadReopenedChartTimeline()
        this.loadReopenedChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. SEM PREVISÃO
        this.loadNoPredictionChartDevManuf()
        this.loadNoPredictionChartTimeline()
        this.loadNoPredictionChartTotal()
      },
      /*
      confirmProjectsDay (itemsSelected) {
        this.projectsSelected = itemsSelected
        this.projectsConfirmed = true
        this.inEdit = false

        // FILTRAR DADOS COM BASE NOS FILTROS INFORMADOS
        this.densityFiltered = this.filterData(this.densityDay)
        this.averageTimeFiltered = this.filterData(this.averageTimeDay)
        this.wrongClassifFiltered = this.filterData(this.wrongClassifDay)
        this.defectOfTSInTIFiltered = this.filterData(this.defectOfTSInTIDay)
        this.reopenedFiltered = this.filterData(this.reopenedDay)
        this.noPredictionFiltered = this.filterData(this.noPredictionDay)

        // ATUALIZAR GRÁFICOS - DENSIDADE
        this.loadDensityChartDevManuf()
        this.loadDensityChartTimeline()
        this.loadDensityChartTotal()

        // ATUALIZAR GRÁFICOS - TEMPO MÉDIO
        this.loadAverageTimeChartDevManuf()
        this.loadAverageTimeChartTimeline()
        this.loadAverageTimeChartTotal()

        // ATUALIZAR GRÁFICOS - CLASSICAÇÃO ERRADA
        this.loadWrongClassifChartDevManuf()
        this.loadWrongClassifChartTimeline()
        this.loadWrongClassifChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. DETECTÁVEIS EM DES.
        this.loaddefectOfTSInTIChartDevManuf()
        this.loaddefectOfTSInTIChartTimeline()
        this.loaddefectOfTSInTIChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. REABERTOS
        this.loadReopenedChartDevManuf()
        this.loadReopenedChartTimeline()
        this.loadReopenedChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. SEM PREVISÃO
        this.loadNoPredictionChartDevManuf()
        this.loadNoPredictionChartTimeline()
        this.loadNoPredictionChartTotal()
      },

      confirmProjectsLastDay (itemsSelected) {
        this.projectsSelected = itemsSelected
        this.projectsConfirmed = true
        this.inEdit = false

        // FILTRAR DADOS COM BASE NOS FILTROS INFORMADOS
        this.densityFiltered = this.filterData(this.densityLastDay)
        this.averageTimeFiltered = this.filterData(this.averageTimeLastDay)
        this.wrongClassifFiltered = this.filterData(this.wrongClassifLastDay)
        this.defectOfTSInTIFiltered = this.filterData(this.defectOfTSInTILastDay)
        this.reopenedFiltered = this.filterData(this.reopenedLastDay)
        this.noPredictionFiltered = this.filterData(this.noPredictionLastDay)

        // ATUALIZAR GRÁFICOS - DENSIDADE
        this.loadDensityChartDevManuf()
        this.loadDensityChartTimeline()
        this.loadDensityChartTotal()

        // ATUALIZAR GRÁFICOS - TEMPO MÉDIO
        this.loadAverageTimeChartDevManuf()
        this.loadAverageTimeChartTimeline()
        this.loadAverageTimeChartTotal()

        // ATUALIZAR GRÁFICOS - CLASSICAÇÃO ERRADA
        this.loadWrongClassifChartDevManuf()
        this.loadWrongClassifChartTimeline()
        this.loadWrongClassifChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. DETECTÁVEIS EM DES.
        this.loaddefectOfTSInTIChartDevManuf()
        this.loaddefectOfTSInTIChartTimeline()
        this.loaddefectOfTSInTIChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. REABERTOS
        this.loadReopenedChartDevManuf()
        this.loadReopenedChartTimeline()
        this.loadReopenedChartTotal()

        // ATUALIZAR GRÁFICOS - DEF. SEM PREVISÃO
        this.loadNoPredictionChartDevManuf()
        this.loadNoPredictionChartTimeline()
        this.loadNoPredictionChartTotal()
      },
      */
      // GRÁFICOS DE DENSIDADE
      loadDensityChartDevManuf () {
        let _this = this
        this.densityOptionsDrillDown.title.text = 'Por Fáb. Des. / Sistema'
        this.densityOptionsDrillDown.yAxis.title.text = '% Densidade'
        this.densityOptionsDrillDown.tooltip.pointFormat = '{point.y:.2f}%'
        this.densityOptionsDrillDown.series.name = 'Densidade'
        this.densityOptionsDrillDown.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.densityOptionsDrillDown.series = this.densitySeries
        this.densityOptionsDrillDown.drilldown.series = this.densityDrilldownSeries

        this.densityOptionsDrillDown.chart.events = {
          drillup: function (e) {
            _this.densityDevManufSelected = ''
            _this.densitySystemSelected = ''
            _this.loadDensityChartTimeline()
            _this.loadDensityChartTotal()
          }
        }

        this.densityOptionsDrillDown.plotOptions.bar.events = {
          click: function (event) {
            if (_this.densityDevManufSelected === '') {
              _this.densityDevManufSelected = event.point.name
            } else {
              _this.densitySystemSelected = event.point.name
            }
            _this.loadDensityChartTimeline()
            _this.loadDensityChartTotal()
          }
        }
        this.densityOptionsDrillDown.chart.renderTo = 'chartDensityDevManuf'
        /* eslint-disable no-unused-vars */
        let chartDensityDevManuf = new Highcharts.Chart(this.densityOptionsDrillDown)
        /* eslint-enable no-unused-vars */
      },
      loadDensityChartTimeline () {
        let dataSource = []

        if (this.densityDevManufSelected === '') {
          dataSource = this.densityByTimeline
        } else {
          if (this.densitySystemSelected === '') {
            dataSource = this.densityByDevManufAndTimeline.filter(i => i.devManufacturing === this.densityDevManufSelected)
          } else {
            dataSource = this.densityByDevManufAndSystemAndTimeline.filter(i => i.devManufacturing === this.densityDevManufSelected && i.system === this.densitySystemSelected)
          }
        }

        this.densityOptionsTimeline.title.text = 'Temporal'
        this.densityOptionsTimeline.yAxis.title.text = '% Densidade'
        this.densityOptionsTimeline.xAxis.categories = dataSource.map(i => i.date)
        this.densityOptionsTimeline.tooltip.pointFormat = '{point.y:.2f}%'
        this.densityOptionsTimeline.series.name = 'Densidade'
        this.densityOptionsTimeline.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.densityOptionsTimeline.series = [
          { name: 'Real', data: dataSource.map(i => i.density) },
          { name: 'Aceitável', color: '#00CC00', data: dataSource.map(i => 10) },
          { name: 'Moderada', color: '#FFFF0D', data: dataSource.map(i => 20) },
          { name: 'Alta', color: '#FF9E0D', data: dataSource.map(i => 30) }
        ]
        this.densityOptionsTimeline.chart.renderTo = 'chartDensityTimeline'
        /* eslint-disable no-unused-vars */
        let chartDensityTimeline = new Highcharts.Chart(this.densityOptionsTimeline)
        /* eslint-enable no-unused-vars */
      },
      loadDensityChartTotal () {
        let _this = this
        let result = []

        if (_this.densityDevManufSelected === '') {
          result = _this.densityDefectTotal
        } else {
          if (_this.densitySystemSelected === '') {
            result = _this.densityByDevManufAndTotal.filter(i => i.devManufacturing === _this.densityDevManufSelected).map(i => i.density)
          } else {
            result = _this.densityByDevManufAndSystemAndTotal.filter(i => i.devManufacturing === _this.densityDevManufSelected && i.system === _this.densitySystemSelected
            ).map(i => i.density)
          }
        }

        _this.densityOptionsTotal.title.text = 'Total'
        _this.densityOptionsTotal.yAxis.title.text = '% Dens'
        _this.densityOptionsTotal.yAxis.max = (result <= 100) ? 100 : result
        _this.densityOptionsTotal.yAxis.tickPixelInterval = 30
        _this.densityOptionsTotal.yAxis.plotBands = [
          {from: 0, to: 10, color: '#00CC00'},
          {from: 10, to: 20, color: '#FFFF0D'},
          {from: 20, to: 30, color: '#FF9E0D'},
          {from: 30, to: _this.densityOptionsTotal.yAxis.max, color: '#FF3300'}
        ]
        _this.densityOptionsTotal.plotOptions.gauge.dataLabels.format = '{point.y:.0f}%'
        _this.densityOptionsTotal.tooltip.pointFormat = '{point.y:.2f}%'
        _this.densityOptionsTotal.series.name = 'Densidade'
        _this.densityOptionsTotal.series = [ { name: 'densidade', colorByPoint: true, data: [ result ] } ]

        _this.densityOptionsTotal.chart.renderTo = 'chartdensityDefectTotal'
        /* eslint-disable no-unused-vars */
        let chartDensityDefectTotal = new Highcharts.Chart(_this.densityOptionsTotal)
        /* eslint-enable no-unused-vars */
      },

      // GRÁFICOS DE TEMPO MÉDIO //

      loadAverageTimeChartDevManuf () {
        let _this = this

        _this.averageTimeOptionsDrillDown.title.text = 'Por Fáb. Des. / Sistema'
        _this.averageTimeOptionsDrillDown.yAxis.title.text = 'Horas'
        _this.averageTimeOptionsDrillDown.tooltip.pointFormat = '{point.y:.2f}'
        _this.averageTimeOptionsDrillDown.series.name = 'Tempo Médio'
        _this.averageTimeOptionsDrillDown.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        _this.averageTimeOptionsDrillDown.series = this.averageTimeSeries
        _this.averageTimeOptionsDrillDown.drilldown.series = this.averageTimeDrilldownSeries
        _this.averageTimeOptionsDrillDown.chart.events = {
          drillup: function (e) {
            _this.averageTimeDevManufSelected = ''
            _this.averageTimeSystemSelected = ''
            _this.loadAverageTimeChartTimeline()
            _this.loadAverageTimeChartTotal()
          }
        }

        _this.averageTimeOptionsDrillDown.plotOptions.bar.events = {
          click: function (event) {
            if (_this.averageTimeDevManufSelected === '') {
              _this.averageTimeDevManufSelected = event.point.name
            } else {
              _this.averageTimeSystemSelected = event.point.name
            }
            _this.loadAverageTimeChartTimeline()
            _this.loadAverageTimeChartTotal()
          }
        }
        this.averageTimeOptionsDrillDown.chart.renderTo = 'chartAverageTimeDevManuf'
        /* eslint-disable no-unused-vars */
        let chartAverageTimeDevManuf = new Highcharts.Chart(this.averageTimeOptionsDrillDown)
        /* eslint-enable no-unused-vars */
      },
      loadAverageTimeChartTimeline () {
        let dataSource = []
        let referenceHours = this.severitys.filter(i => {
          return (i.name === this.severitySelected)
        })[0].hours

        if (this.averageTimeDevManufSelected === '') {
          dataSource = this.averageTimeByTimeline
        } else {
          if (this.averageTimeSystemSelected === '') {
            dataSource = this.averageTimeByDevManufAndTimeline.filter(i =>
              i.devManufacturing === this.averageTimeDevManufSelected
            )
          } else {
            dataSource = this.averageTimeByDevManufAndSystemAndTimeline.filter(i =>
              i.devManufacturing === this.averageTimeDevManufSelected &&
              i.system === this.averageTimeSystemSelected
            )
          }
        }

        // this.averageTimeByTimeline.map(i => ({ name: i.date, y: i.Media, drilldown: i.date }))

        this.averageTimeOptionsTimeline.title.text = 'Temporal'
        this.averageTimeOptionsTimeline.yAxis.title.text = 'Horas'
        this.averageTimeOptionsTimeline.xAxis.categories = dataSource.map(i => i.date)
        this.averageTimeOptionsTimeline.tooltip.pointFormat = '{point.y:.2f}'
        this.averageTimeOptionsTimeline.series.name = 'Horas'
        this.averageTimeOptionsTimeline.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.averageTimeOptionsTimeline.series = [
          { name: 'Real', data: dataSource.map(i => i.Media) },
          { name: 'Referência', color: '#00CC00', data: dataSource.map(i => referenceHours) }
        ]
        this.averageTimeOptionsTimeline.chart.renderTo = 'chartAverageTimeTimeline'
        /* eslint-disable no-unused-vars */
        let chartAverageTimeTimeline = new Highcharts.Chart(this.averageTimeOptionsTimeline)
        /* eslint-enable no-unused-vars */
      },
      loadAverageTimeChartTotal () {
        let _this = this
        let result = []
        let aPlotBands = []
        let limitSupRed = 0

        if (_this.averageTimeDevManufSelected === '') {
          result = _this.averageTimeTotal
        } else {
          if (_this.averageTimeSystemSelected === '') {
            result = _this.averageTimeByDevManufAndTotal.filter(i => i.devManufacturing === _this.averageTimeDevManufSelected).map(i => i.Media)
          } else {
            result = _this.averageTimeByDevManufAndSystemAndTotal.filter(i => i.devManufacturing === _this.averageTimeDevManufSelected && i.system === _this.averageTimeSystemSelected).map(i => i.Media)
          }
        }

        if (result > 0) {
          if (this.severitySelected === 'LOW') {
            limitSupRed = (result > 80 ? result : 80)
            aPlotBands.push(
                {from: 0, to: 16, color: '#00CC00'},
                {from: 16, to: limitSupRed, color: '#FF3300'}
            )
          } else if (this.severitySelected === 'MEDIUM') {
            limitSupRed = (result > 50 ? result : 50)
            aPlotBands.push(
                {from: 0, to: 8, color: '#00CC00'},
                {from: 8, to: limitSupRed, color: '#FF3300'}
            )
          } else if (this.severitySelected === 'HIGH') {
            limitSupRed = (result > 30 ? result : 30)
            aPlotBands.push(
                {from: 0, to: 4, color: '#00CC00'},
                {from: 4, to: limitSupRed, color: '#FF3300'}
            )
          }
        } else {
          aPlotBands.push({from: 0, to: 0, color: '#00CC00'})
        }

        _this.averageTimeOptionsTotal.title.text = 'Total'
        _this.averageTimeOptionsTotal.yAxis.title.text = 'Horas'
        _this.averageTimeOptionsTotal.yAxis.max = limitSupRed
        _this.averageTimeOptionsTotal.yAxis.tickPixelInterval = 30
        _this.averageTimeOptionsTotal.yAxis.plotBands = aPlotBands
        _this.averageTimeOptionsTotal.tooltip.pointFormat = '{point.y:.2f} hrs'
        _this.averageTimeOptionsTotal.series.name = 'Horas'
        _this.averageTimeOptionsTotal.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        _this.averageTimeOptionsTotal.series = [ { name: 'horas', colorByPoint: true, data: [ result ] } ]
        _this.averageTimeOptionsTotal.chart.renderTo = 'chartAverageTimeTotal'
        /* eslint-disable no-unused-vars */
        let chartAverageTimeTotal = new Highcharts.Chart(_this.averageTimeOptionsTotal)
        /* eslint-enable no-unused-vars */
      },

      // GRÁFICOS DE CLASSIFICAÇÃO ERRADA //

      loadWrongClassifChartDevManuf () {
        let _this = this

        this.wrongClassifOptionsDrillDown.title.text = 'Por Fáb. Des. / Sistema'
        this.wrongClassifOptionsDrillDown.yAxis.title.text = 'Defeitos'
        this.wrongClassifOptionsDrillDown.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Class Errada: {point.y:.0f} <br>{point.percent:.2f}%'
        this.wrongClassifOptionsDrillDown.series.name = 'Defeitos'
        this.wrongClassifOptionsDrillDown.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.wrongClassifOptionsDrillDown.series = this.wrongClassifSeries
        this.wrongClassifOptionsDrillDown.drilldown.series = this.wrongClassifDrilldownSeries

        this.wrongClassifOptionsDrillDown.chart.events = {
          drillup: function (e) {
            _this.wrongClassifDevManufSelected = ''
            _this.wrongClassifSystemSelected = ''
            _this.loadWrongClassifChartTimeline()
            _this.loadWrongClassifChartTotal()
          }
        }

        _this.wrongClassifOptionsDrillDown.plotOptions.bar.events = {
          click: function (event) {
            if (_this.wrongClassifDevManufSelected === '') {
              _this.wrongClassifDevManufSelected = event.point.name
            } else {
              _this.wrongClassifSystemSelected = event.point.name
            }
            _this.loadWrongClassifChartTimeline()
            _this.loadWrongClassifChartTotal()
          }
        }
        this.wrongClassifOptionsDrillDown.chart.renderTo = 'chartWrongClassifDevManuf'
        /* eslint-disable no-unused-vars */
        let chartWrongClassifDevManuf = new Highcharts.Chart(this.wrongClassifOptionsDrillDown)
        /* eslint-enable no-unused-vars */
      },
      loadWrongClassifChartTimeline () {
        let dataSource = []

        if (this.wrongClassifDevManufSelected === '') {
          dataSource = this.wrongClassifByTimeline
        } else {
          if (this.wrongClassifSystemSelected === '') {
            dataSource = this.wrongClassifByDevManufAndTimeline.filter(i => i.devManufacturing === this.wrongClassifDevManufSelected)
          } else {
            dataSource = this.wrongClassifByDevManufAndSystemAndTimeline.filter(i => i.devManufacturing === this.wrongClassifDevManufSelected && i.system === this.wrongClassifSystemSelected)
          }
        }

        this.wrongClassifOptionsTimeline.title.text = 'Temporal'
        this.wrongClassifOptionsTimeline.yAxis.title.text = 'Defeitos'
        this.wrongClassifOptionsTimeline.xAxis.categories = dataSource.map(i => i.date)
        this.wrongClassifOptionsTimeline.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Class.Errada: {point.y:.0f}<br>{point.percent:.2f}%'
        this.wrongClassifOptionsTimeline.series.name = 'Defeitos'
        this.wrongClassifOptionsTimeline.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.wrongClassifOptionsTimeline.series = [
          {
            name: 'Real',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.qty,
                qtyTotal: i.qtyTotal,
                percent: i.percent
              }
              ))
          },
          {
            name: 'Referência',
            color: '#00e600',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.qtyReference,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percentReference: i.percentReference
              }
              )),
            tooltip: {
              pointFormat: 'Total: {point.qtyTotal:.0f}<br>{point.percentReference:.0f}% Total: {point.y:.2f} Def'
            }
          }
        ]
        /* eslint-disable no-unused-vars */
        this.wrongClassifOptionsTimeline.chart.renderTo = 'chartWrongClassifTimeline'
        let chartWrongClassifTimeline = new Highcharts.Chart(this.wrongClassifOptionsTimeline)
        /* eslint-enable no-unused-vars */
      },
      loadWrongClassifChartTotal () {
        let _this = this
        let result = []
        if (_this.wrongClassifDevManufSelected === '') {
          result = _this.wrongClassifTotal
        } else {
          if (_this.wrongClassifSystemSelected === '') {
            result = _this.wrongClassifByDevManufAndTotal.filter(i => i.devManufacturing === _this.wrongClassifDevManufSelected)[0]
          } else {
            result = _this.wrongClassifByDevManufAndSystemAndTotal.filter(i => i.devManufacturing === _this.wrongClassifDevManufSelected && i.system === _this.wrongClassifSystemSelected
            )[0]
          }
        }

        let limitSupGreen = result.qtyReference
        let limitSupRed = limitSupGreen > result.qtyTotal ? limitSupGreen : result.qtyTotal

        _this.wrongClassifOptionsTotal.title.text = 'Total'
        _this.wrongClassifOptionsTotal.yAxis.title.text = 'Def.'
        _this.wrongClassifOptionsTotal.yAxis.tickPixelInterval = 30
        _this.wrongClassifOptionsTotal.yAxis.max = limitSupRed
        _this.wrongClassifOptionsTotal.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: _this.wrongClassifOptionsTotal.yAxis.max, color: '#FF3300'}
        ]
        _this.wrongClassifOptionsTotal.tooltip.pointFormat = 'Total: ' + result.qtyTotal + '<br>' +
                                                                        'Class.Errada: ' + result.qty + '<br>' +
                                                                        result.percentReference + '% Total: ' + result.qtyReference + ' Def<br>' +
                                                                        result.percent + '%'
        _this.wrongClassifOptionsTotal.series.name = 'Defeitos'
        _this.wrongClassifOptionsTotal.series = [ { name: 'defeitos', colorByPoint: true, data: [ result.qty ] } ]
        /* eslint-disable no-unused-vars */
        _this.wrongClassifOptionsTotal.chart.renderTo = 'chartWrongClassifTotal'
        let chartWrongClassifTotal = new Highcharts.Chart(_this.wrongClassifOptionsTotal)
        /* eslint-enable no-unused-vars */
      },

      // GRÁFICOS DE DEF. DETECTÁVEIS EM DES. //

      loaddefectOfTSInTIChartDevManuf () {
        let _this = this

        this.defectOfTSInTIOptionsDrillDown.title.text = 'Por Fáb. Des. / Sistema'
        this.defectOfTSInTIOptionsDrillDown.yAxis.title.text = 'Defeitos'
        this.defectOfTSInTIOptionsDrillDown.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Detec.Dev: {point.y:.0f} <br>{point.percent:.2f}%'
        this.defectOfTSInTIOptionsDrillDown.series.name = 'Defeitos'
        this.defectOfTSInTIOptionsDrillDown.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.defectOfTSInTIOptionsDrillDown.series = this.defectOfTSInTISeries
        this.defectOfTSInTIOptionsDrillDown.drilldown.series = this.defectOfTSInTIDrilldownSeries

        this.defectOfTSInTIOptionsDrillDown.chart.events = {
          drillup: function (e) {
            _this.defectOfTSInTIDevManufSelected = ''
            _this.defectOfTSInTISystemSelected = ''
            _this.loaddefectOfTSInTIChartTimeline()
            _this.loaddefectOfTSInTIChartTotal()
          }
        }

        _this.defectOfTSInTIOptionsDrillDown.plotOptions.bar.events = {
          click: function (event) {
            if (_this.defectOfTSInTIDevManufSelected === '') {
              _this.defectOfTSInTIDevManufSelected = event.point.name
            } else {
              _this.defectOfTSInTISystemSelected = event.point.name
            }
            _this.loaddefectOfTSInTIChartTimeline()
            _this.loaddefectOfTSInTIChartTotal()
          }
        }
        /* eslint-disable no-unused-vars */
        this.defectOfTSInTIOptionsDrillDown.chart.renderTo = 'chartdefectOfTSInTIDevManuf'
        let chartdefectOfTSInTIDevManuf = new Highcharts.Chart(this.defectOfTSInTIOptionsDrillDown)
        /* eslint-enable no-unused-vars */
      },
      loaddefectOfTSInTIChartTimeline () {
        let dataSource = []

        if (this.defectOfTSInTIDevManufSelected === '') {
          dataSource = this.defectOfTSInTIByTimeline
        } else {
          if (this.defectOfTSInTISystemSelected === '') {
            dataSource = this.defectOfTSInTIByDevManufAndTimeline.filter(i => i.devManufacturing === this.defectOfTSInTIDevManufSelected)
          } else {
            dataSource = this.defectOfTSInTIByDevManufAndSystemAndTimeline.filter(i => i.devManufacturing === this.defectOfTSInTIDevManufSelected && i.system === this.defectOfTSInTISystemSelected)
          }
        }

        this.defectOfTSInTIOptionsTimeline.title.text = 'Temporal'
        this.defectOfTSInTIOptionsTimeline.yAxis.title.text = 'Defeitos'
        this.defectOfTSInTIOptionsTimeline.xAxis.categories = dataSource.map(i => i.date)
        this.defectOfTSInTIOptionsTimeline.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Def.Detect.em Desenv: {point.y:.0f}<br>{point.percent:.2f}%'
        this.defectOfTSInTIOptionsTimeline.series.name = 'Defeitos'
        this.defectOfTSInTIOptionsTimeline.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.defectOfTSInTIOptionsTimeline.series = [
          {
            name: 'Real',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.qty,
                qtyTotal: i.qtyTotal,
                percent: i.percent
              }
              ))
          },
          {
            name: 'Referência',
            color: '#00e600',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.qtyReference,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percentReference: i.percentReference
              }
              )),
            tooltip: {
              pointFormat: 'Total: {point.qtyTotal:.0f}<br>{point.percentReference:.0f}% Total: {point.y:.2f} Def'
            }
          }
        ]
        /* eslint-disable no-unused-vars */
        this.defectOfTSInTIOptionsTimeline.chart.renderTo = 'chartdefectOfTSInTITimeline'
        let chartdefectOfTSInTITimeline = new Highcharts.Chart(this.defectOfTSInTIOptionsTimeline)
        /* eslint-enable no-unused-vars */
      },
      loaddefectOfTSInTIChartTotal () {
        let _this = this
        let result = []
        if (_this.defectOfTSInTIDevManufSelected === '') {
          result = _this.defectOfTSInTITotal
        } else {
          if (_this.defectOfTSInTISystemSelected === '') {
            result = _this.defectOfTSInTIByDevManufAndTotal.filter(i => i.devManufacturing === _this.defectOfTSInTIDevManufSelected)[0]
          } else {
            result = _this.defectOfTSInTIByDevManufAndSystemAndTotal.filter(i => i.devManufacturing === _this.defectOfTSInTIDevManufSelected && i.system === _this.defectOfTSInTISystemSelected
            )[0]
          }
        }

        let limitSupGreen = result.qtyReference
        let limitSupRed = limitSupGreen > result.qtyTotal ? limitSupGreen : result.qtyTotal

        _this.defectOfTSInTIOptionsTotal.title.text = 'Total'
        _this.defectOfTSInTIOptionsTotal.yAxis.title.text = 'Def.'
        _this.defectOfTSInTIOptionsTotal.yAxis.tickPixelInterval = 30
        _this.defectOfTSInTIOptionsTotal.yAxis.max = limitSupRed
        _this.defectOfTSInTIOptionsTotal.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: _this.defectOfTSInTIOptionsTotal.yAxis.max, color: '#FF3300'}
        ]
        _this.defectOfTSInTIOptionsTotal.tooltip.pointFormat = 'Total: ' + result.qtyTotal + '<br>' +
                                                                        'Def.Dect.em Desenv: ' + result.qty + '<br>' +
                                                                        result.percentReference + '% Total: ' + result.qtyReference + ' Def<br>' +
                                                                        result.percent + '%'
        _this.defectOfTSInTIOptionsTotal.series.name = 'Defeitos'
        _this.defectOfTSInTIOptionsTotal.series = [ { name: 'defeitos', colorByPoint: true, data: [ result.qty ] } ]

        /* eslint-disable no-unused-vars */
        _this.defectOfTSInTIOptionsTotal.chart.renderTo = 'chartdefectOfTSInTITotal'
        let chartdefectOfTSInTITotal = new Highcharts.Chart(_this.defectOfTSInTIOptionsTotal)
        /* eslint-enable no-unused-vars */
      },

      // GRÁFICOS DE DEF. REABERTOS //

      loadReopenedChartDevManuf () {
        let _this = this

        this.reopenedOptionsDrillDown.title.text = 'Por Fáb. Des. / Sistema'
        this.reopenedOptionsDrillDown.yAxis.title.text = '% Defeitos'
        this.reopenedOptionsDrillDown.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Reaberturas: {point.qty:.0f}<br>{point.y:.2f}%'
        this.reopenedOptionsDrillDown.series.name = 'Defeitos'
        this.reopenedOptionsDrillDown.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.reopenedOptionsDrillDown.series = this.reopenedSeries
        this.reopenedOptionsDrillDown.drilldown.series = this.reopenedDrilldownSeries

        this.reopenedOptionsDrillDown.chart.events = {
          drillup: function (e) {
            _this.reopenedDevManufSelected = ''
            _this.reopenedSystemSelected = ''
            _this.loadReopenedChartTimeline()
            _this.loadReopenedChartTotal()
          }
        }

        _this.reopenedOptionsDrillDown.plotOptions.bar.events = {
          click: function (event) {
            if (_this.reopenedDevManufSelected === '') {
              _this.reopenedDevManufSelected = event.point.name
            } else {
              _this.reopenedSystemSelected = event.point.name
            }
            _this.loadReopenedChartTimeline()
            _this.loadReopenedChartTotal()
          }
        }
        /* eslint-disable no-unused-vars */
        this.reopenedOptionsDrillDown.chart.renderTo = 'chartReopenedDevManuf'
        let chartReopenedDevManuf = new Highcharts.Chart(this.reopenedOptionsDrillDown)
        /* eslint-enable no-unused-vars */
      },
      loadReopenedChartTimeline () {
        let dataSource = []

        if (this.reopenedDevManufSelected === '') {
          dataSource = this.reopenedByTimeline
        } else {
          if (this.reopenedSystemSelected === '') {
            dataSource = this.reopenedByDevManufAndTimeline.filter(i => i.devManufacturing === this.reopenedDevManufSelected)
          } else {
            dataSource = this.reopenedByDevManufAndSystemAndTimeline.filter(i => i.devManufacturing === this.reopenedDevManufSelected && i.system === this.reopenedSystemSelected)
          }
        }

        this.reopenedOptionsTimeline.title.text = 'Temporal'
        this.reopenedOptionsTimeline.yAxis.title.text = '% Defeitos'
        this.reopenedOptionsTimeline.xAxis.categories = dataSource.map(i => i.date)
        this.reopenedOptionsTimeline.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Def.Reabertos: {point.percent:.0f}<br>{point.y:.2f}%'
        this.reopenedOptionsTimeline.series.name = 'Defeitos'
        this.reopenedOptionsTimeline.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.reopenedOptionsTimeline.series = [
          {
            name: 'Real',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.percent,
                qtyTotal: i.qtyTotal,
                percent: i.qty
              }
              ))
          },
          {
            name: 'Referência',
            color: '#00e600',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.qtyReference,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percentReference: i.percentReference
              }
              )),
            tooltip: {
              pointFormat: 'Total: {point.qtyTotal:.0f}<br>{point.percentReference:.0f}% Total: {point.y:.2f} Def'
            }
          }
        ]
        /* eslint-disable no-unused-vars */
        this.reopenedOptionsTimeline.chart.renderTo = 'chartReopenedTimeline'
        let chartReopenedTimeline = new Highcharts.Chart(this.reopenedOptionsTimeline)
        /* eslint-enable no-unused-vars */
      },
      loadReopenedChartTotal () {
        let _this = this
        let result = []
        if (_this.reopenedDevManufSelected === '') {
          result = _this.reopenedTotal
        } else {
          if (_this.reopenedSystemSelected === '') {
            result = _this.reopenedByDevManufAndTotal.filter(i => i.devManufacturing === _this.reopenedDevManufSelected)[0]
          } else {
            result = _this.reopenedByDevManufAndSystemAndTotal.filter(i => i.devManufacturing === _this.reopenedDevManufSelected && i.system === _this.reopenedSystemSelected
            )[0]
          }
        }

        let limitSupGreen = 5
        let limitSupRed = result.percent > 100 ? result.percent : 100

        _this.reopenedOptionsTotal.title.text = 'Total'
        _this.reopenedOptionsTotal.yAxis.title.text = 'Def.'
        _this.reopenedOptionsTotal.yAxis.tickPixelInterval = 30
        _this.reopenedOptionsTotal.yAxis.max = limitSupRed
        _this.reopenedOptionsTotal.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: _this.reopenedOptionsTotal.yAxis.max, color: '#FF3300'}
        ]
        _this.reopenedOptionsTotal.plotOptions.gauge.dataLabels.format = '{point.y:.0f}%'
        _this.reopenedOptionsTotal.tooltip.pointFormat = 'Total: ' + result.qtyTotal + '<br>' +
                                                                        'Def.Reabertos: ' + result.qty + '<br>' +
                                                                        result.percentReference + '% Total: ' + result.qtyReference + ' Def<br>' +
                                                                        result.percent + '%'
        _this.reopenedOptionsTotal.series.name = 'Defeitos'
        _this.reopenedOptionsTotal.series = [ { name: 'defeitos', colorByPoint: true, data: [ result.percent ] } ]
        _this.reopenedOptionsTotal.chart.renderTo = 'chartDefectReopenedTotal'
        /* eslint-disable no-unused-vars */
        let chartDefectReopenedTotal = new Highcharts.Chart(_this.reopenedOptionsTotal)
        /* eslint-enable no-unused-vars */
      },

      // GRÁFICOS DE DEF. SEM PREVISÃO //

      loadNoPredictionChartDevManuf () {
        let _this = this

        this.noPredictionOptionsDrillDown.title.text = 'Por Fáb. Des. / Sistema'
        this.noPredictionOptionsDrillDown.yAxis.title.text = '% Defeitos'
        this.noPredictionOptionsDrillDown.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>S/Prev.Sol: {point.qty:.0f}<br>{point.y:.2f}%'
        this.noPredictionOptionsDrillDown.series.name = 'Defeitos'
        this.noPredictionOptionsDrillDown.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.noPredictionOptionsDrillDown.series = this.noPredictionSeries
        this.noPredictionOptionsDrillDown.drilldown.series = this.noPredictionDrilldownSeries

        this.noPredictionOptionsDrillDown.chart.events = {
          drillup: function (e) {
            _this.noPredictionDevManufSelected = ''
            _this.noPredictionSystemSelected = ''
            _this.loadNoPredictionChartTimeline()
            _this.loadNoPredictionChartTotal()
          }
        }

        _this.noPredictionOptionsDrillDown.plotOptions.bar.events = {
          click: function (event) {
            if (_this.noPredictionDevManufSelected === '') {
              _this.noPredictionDevManufSelected = event.point.name
            } else {
              _this.noPredictionSystemSelected = event.point.name
            }
            _this.loadNoPredictionChartTimeline()
            _this.loadNoPredictionChartTotal()
          }
        }
        this.noPredictionOptionsDrillDown.chart.renderTo = 'chartNoPredictionDevManuf'
        /* eslint-disable no-unused-vars */
        let chartNoPredictionDevManuf = new Highcharts.Chart(this.noPredictionOptionsDrillDown)
        /* eslint-enable no-unused-vars */
      },
      loadNoPredictionChartTimeline () {
        let dataSource = []

        if (this.noPredictionDevManufSelected === '') {
          dataSource = this.noPredictionByTimeline
        } else {
          if (this.noPredictionSystemSelected === '') {
            dataSource = this.noPredictionByDevManufAndTimeline.filter(i => i.devManufacturing === this.noPredictionDevManufSelected)
          } else {
            dataSource = this.noPredictionByDevManufAndSystemAndTimeline.filter(i => i.devManufacturing === this.noPredictionDevManufSelected && i.system === this.noPredictionSystemSelected)
          }
        }

        this.noPredictionOptionsTimeline.title.text = 'Temporal'
        this.noPredictionOptionsTimeline.yAxis.title.text = '% Defeitos'
        this.noPredictionOptionsTimeline.xAxis.categories = dataSource.map(i => i.date)
        this.noPredictionOptionsTimeline.tooltip.pointFormat = 'Total: {point.qtyTotal:.0f}<br>Def.Sem Previsão: {point.percent:.0f}<br>{point.y:.2f}%'
        this.noPredictionOptionsTimeline.series.name = 'Defeitos'
        this.noPredictionOptionsTimeline.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.noPredictionOptionsTimeline.series = [
          {
            name: 'Real',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.percent,
                qtyTotal: i.qtyTotal,
                percent: i.qty
              }
              ))
          },
          {
            name: 'Referência',
            color: '#00e600',
            data: dataSource.map(i => (
              {
                name: i.date,
                y: i.qtyReference,
                qtyTotal: i.qtyTotal,
                qty: i.qty,
                percentReference: i.percentReference
              }
              )),
            tooltip: {
              pointFormat: 'Total: {point.qtyTotal:.0f}<br>{point.percentReference:.0f}% Total: {point.y:.2f} Def'
            }
          }
        ]
        this.noPredictionOptionsTimeline.chart.renderTo = 'chartNoPredictionTimeline'
        /* eslint-disable no-unused-vars */
        let chartNoPredictionTimeline = new Highcharts.Chart(this.noPredictionOptionsTimeline)
        /* eslint-enable no-unused-vars */
      },
      loadNoPredictionChartTotal () {
        let _this = this
        let result = []
        if (_this.noPredictionDevManufSelected === '') {
          result = _this.noPredictionTotal
        } else {
          if (_this.noPredictionSystemSelected === '') {
            result = _this.noPredictionByDevManufAndTotal.filter(i => i.devManufacturing === _this.noPredictionDevManufSelected)[0]
          } else {
            result = _this.noPredictionByDevManufAndSystemAndTotal.filter(i => i.devManufacturing === _this.noPredictionDevManufSelected && i.system === _this.noPredictionSystemSelected
            )[0]
          }
        }

        let limitSupGreen = 5
        let limitSupRed = result.percent > 100 ? result.percent : 100

        _this.noPredictionOptionsTotal.title.text = 'Total'
        _this.noPredictionOptionsTotal.yAxis.title.text = 'Def.'
        _this.noPredictionOptionsTotal.yAxis.tickPixelInterval = 30
        _this.noPredictionOptionsTotal.yAxis.max = limitSupRed
        _this.noPredictionOptionsTotal.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: _this.noPredictionOptionsTotal.yAxis.max, color: '#FF3300'}
        ]
        _this.noPredictionOptionsTotal.plotOptions.gauge.dataLabels.format = '{point.y:.0f}%'
        _this.noPredictionOptionsTotal.tooltip.pointFormat = 'Total: ' + result.qtyTotal + '<br>' +
                                                                        'Def.Sem Previsão: ' + result.qty + '<br>' +
                                                                        result.percentReference + '% Total: ' + result.qtyReference + ' Def<br>' +
                                                                        result.percent + '%'
        _this.noPredictionOptionsTotal.series.name = 'Defeitos'
        _this.noPredictionOptionsTotal.series = [ { name: 'defeitos', colorByPoint: true, data: [ result.percent ] } ]
        _this.noPredictionOptionsTotal.chart.renderTo = 'chartNoPredictionTotal'
        /* eslint-disable no-unused-vars */
        let chartNoPredictionTotal = new Highcharts.Chart(_this.noPredictionOptionsTotal)
        /* eslint-enable no-unused-vars */
      },

      selectSeverity (severitySelected) {
        this.severitySelected = severitySelected
        // ATUALIZAR GRÁFICOS - TEMPO MÉDIO
        this.loadAverageTimeChartDevManuf()
        this.loadAverageTimeChartTimeline()
        this.loadAverageTimeChartTotal()
      },

      ping () {
        /*
        let _this = this

        _this.$http.get(paths.api + '/ping')
        .then(
          r => {
            // if(_this.pingCounter % 2 === 0) {
                // console.clear();
            // }

            let d = new Date()
            _this.pingCounter += 1
            console.log('Contador de ping: ' + _this.pingCounter + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
          },
          e => {
            console.log(e)
          }
        )
        */
      }
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
    <div id="devManufacturers" 
      class="row well well-sm oi-well" 
      style="margin-bottom:3px">
      
      <oiSelection
        idChild="devManufacturers"
        title="Fáb. Desenv"               
        :dataSource="devManufacturers"
        :itemsSelected="devManufacturersSelected"
        :isShowButtonSelected="true"
        @onChangeSelected="confirmDevManuf"
      />
    </div>

    <!-- FILTRO DE SISTEMAS -->
    <div id="systems" 
      class="row well well-sm oi-well" 
      style="margin-bottom:3px" 
      v-show="isShowFiltersSystems">
      
      <oiSelection
        idChild="systems"
        title="Sistemas"               
        :dataSource="systemsFiltered"
        :itemsSelected="systemsSelected"
        :isShowButtonSelected="true"
        @onChangeSelected="confirmSystems"
      />
    </div>

    <!-- FILTRO DE PROJETOS -->
    <div id="projects"
      class="row well well-sm oi-well" 
      style="margin-bottom:3px" 
      v-show="isShowFiltersProjects">

      <oiSelectionProjects
        :dataSource="projectsFiltered"
        :selected="projectsSelected"
        :confirmed="projectsConfirmed"
        :messageTimeline="messageTimeline"
        @onConfirmData="confirmProjects"
        @onConfirmDataTimeline="confirmProjectsTimeline"
        @onNewSelected="newSelectedProject"
        @onEnterInEdit="enterInEdit">
      </oiSelectionProjects>
    </div>    

    <div id="indicadores" class="row well well-sm oi-well" v-show="isShowindicator">
      <div class="row well-sm oi-well">
        <ul class="nav nav-tabs" style="margin-top:3px">
          <li class="active"><a data-toggle="tab" href="#density" style="padding:4px">Densidade</a></li>
          <li><a data-toggle="tab" href="#averageTime" style="padding:4px">Tempo Médio</a></li>
          <li><a data-toggle="tab" href="#wrongClassif" style="padding:4px">Clas.Errada</a></li>
          <li><a data-toggle="tab" href="#defectOfTSInTI" style="padding:4px">Detect.Em Des.</a></li>
          <li><a data-toggle="tab" href="#reopened" style="padding:4px">Reabertos</a></li>
          <li><a data-toggle="tab" href="#noPrediction" style="padding:4px">Sem Prev.Solução</a></li> 
        </ul>
        <div class="tab-content">
          <div id="density" class="tab-pane fade in active" style="padding:0; margin:0">
            <center>
                <h4 v-show="densityDevManufSelected != ''" style="margin:3px"><b>{{densityDevManufSelected}}</b></h4>
                <hr style="margin:0; height: 7px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartDensityDevManuf" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartDensityTimeline" style="width:300px; height:300px; margin:0 auto"></div>
                </div>
                
                <div class="col-xs-12 col-md-6 col-lg-4">  
                    <div id="chartdensityDefectTotal" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <!--
                    <button 
                        type="button" 
                        style="margin-top:3px"
                        class="btn btn-xs"
                        data-toggle="modal" 
                        data-target="#densityShowRule">Regras
                    </button>
                    <oiRulesDensity></oiRulesDensity>-->
                    
                    <oiDensityShowRule/>
                    <!--
                    <button 
                        type="button" 
                        style="margin-top:3px"
                        class="btn btn-xs"
                        data-toggle="modal" 
                        data-target="#densityAnalyticalModal">Analítico
                    </button>
                    -->
                    <oiDensityShowAnalytic
                        title="Densidade Defeito - Analítico" 
                        :dataSource="densityFiltered"
                    ></oiDensityShowAnalytic>
                  </div>
                </div>
            </center>
          </div>
          <div id="averageTime" class="tab-pane fade">
            <center>
                <h4 v-show="averageTimeSystemSelected != ''" style="margin:3px"><b>{{averageTimeSystemSelected}}</b>
                    <span id="labelSeverity" v-show="averageTimeSystemSelected != ''">
                        {{severitySelected}}
                    </span>
                </h4>
                <hr style="margin:0; height: 7px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">
                
                <div class="col-xs-12 text-center" style="margin-top:0px">
                  <div id="buttonsSeveritys" v-show="averageTimeSystemSelected === ''">
                      <template v-for="i in severitys" v-show="averageTimeSystemSelected == ''">
                          <button 
                              type="button" 
                              id="severity"
                              :class="(severitySelected === i.name) ? 'active btn btn-xs btn-default' : 'btn btn-xs'" 
                              style="margin-top:0; margin-right:2px; margin-bottom:3px"
                              @click="selectSeverity(i.name)">{{i.name}}
                          </button>
                      </template>

                      <hr style="margin:0; height: 5px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">
                  </div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartAverageTimeDevManuf" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartAverageTimeTimeline" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartAverageTimeTotal" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="row">
                  <div class="col-sm-12">

                      <oiAverageTimeShowRule/>

                      <oiAverageTimeShowAnalytical
                          title="Tempo Médio - Analítico" 
                          :dataSource="averageTimeFiltered"
                      />
                      
                  </div>
                </div>
            </center>
          </div>  

          <div id="wrongClassif" class="tab-pane fade">
            <center class="text-top">
                <h4 v-show="wrongClassifDevManufSelected != ''" style="margin:3px"><b>{{wrongClassifDevManufSelected}}</b></h4>
                <hr style="margin:0; height: 7px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartWrongClassifDevManuf" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartWrongClassifTimeline" style= "width:300px; height:300px; margin:0"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartWrongClassifTotal" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="row">
                  <div class="col-sm-12">

                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#wrongClassifRegrasModal">Regras
                      </button>
                      <oiModal id="wrongClassifRegrasModal" title="Regras para cálculo da 'Classif. Errada'">   
                        <div style="margin:0; padding:10px" slot="body">

                          <label class="fd-label">
                            <p style="text-align:left">
                                Quantidade de defeitos fechados, com os campos “Fábrica de Desenv. Ofensora” e “Regra Infringida” preenchidos. Isto é, diferente de vazio.
                            </p>
                            <p style="text-align:left">
                                Estes campos são imputados manualmente no SGQ, durante o processo de auditoria.
                            </p>
                            <p style="text-align:left">
                                O valor de referência é 5% do total de defeitos fechados.
                            </p>        
                          </label>
                        </div>
                      </oiModal>

                      <button 
                        type="button" 
                        style="margin-top:3px"
                        class="btn btn-xs"
                        data-toggle="modal" 
                        data-target="#wrongClassifModalAnalitic">Analítico
                      </button>                                
                      <oiModal id="wrongClassifModalAnalitic" title="Classif. Errada - Analítico" size="l">   
                        <div style="margin:0; padding:10px" slot="body">
                          <oiShowAnalytical
                              :dataSource="wrongClassifFiltered"
                          ></oiShowAnalytical>
                        </div>
                      </oiModal>  
                  </div>
                </div>
            </center>          
          </div>
          <div id="defectOfTSInTI" class="tab-pane fade">
            <center class="text-top">
                <h4 v-show="defectOfTSInTIDevManufSelected != ''" style="margin:3px"><b>{{defectOfTSInTIDevManufSelected}}</b></h4>
                <hr style="margin:0; height: 7px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartdefectOfTSInTIDevManuf" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartdefectOfTSInTITimeline" style= "width:300px; height:300px; margin:0"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartdefectOfTSInTITotal" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#defectOfTSInTIRegrasModal">Regras
                      </button>
                      <oiModal id="defectOfTSInTIRegrasModal" title="Regras para cálculo de 'Detectáveis em Desenv.'">   
                        <div style="margin:0; padding:10px" slot="body">

                          <label class="fd-label">
                            <p style="text-align:left">
                                Quantidade de defeitos fechados com campo “Erro Detectável Em Desenvolvimento” igual a "Sim".
                            </p>
                            <p style="text-align:left">
                                Este campo é imputado manualmente no ALM.
                            </p>
                            <p style="text-align:left">
                                O valor de referência é 5% do total de defeitos fechados.
                            </p>     
                          </label>
                        </div>
                      </oiModal>

                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#defectOfTSInTIModalAnalitic">Analítico
                      </button>
                      <oiModal id="defectOfTSInTIModalAnalitic" title="Detectáveis em Desenv. - Analítico" size="l">   
                        <div style="margin:0; padding:10px" slot="body">
                          <oiShowAnalytical
                              :dataSource="defectOfTSInTIFiltered"
                          ></oiShowAnalytical>
                        </div>
                      </oiModal>  
                  </div>
              </div>
            </center>          
          </div>
          <div id="reopened" class="tab-pane fade">
            <center class="text-top">
                <h4 v-show="reopenedDevManufSelected != ''" style="margin:3px"><b>{{reopenedDevManufSelected}}</b></h4>
                <hr style="margin:0; height: 7px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartReopenedDevManuf" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartReopenedTimeline" style= "width:300px; height:300px; margin:0"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartDefectReopenedTotal" style="width:300px; height:300px; margin:0 auto"></div>
                </div>
                  <div class="row">
                  <div class="col-sm-12">
                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#reopenedRegrasModal">Regras
                      </button>
                      <oiModal id="reopenedRegrasModal" title="Regras para cálculo dos 'Reabertos'">   
                        <div style="margin:0; padding:10px" slot="body">

                          <label class="fd-label">
                            <p style="text-align:left">
                                Quantidade de vezes em que os defeitos fechados passaram pelo Status "REOPEN", divididos pelo total de defeitos fechados multiplicados por 100.
                            </p>
                            <p style="text-align:left">
                                O valor de referência é 5% do total de defeitos fechados.
                            </p>
                          </label>
                        </div>
                      </oiModal>

                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#reopenedModalAnalitic">Analítico
                      </button>
                      <oiModal id="reopenedModalAnalitic" title="Reabetos - Analítico" size="l">   
                        <div style="margin:0; padding:10px" slot="body">
                          <oiShowAnalytical
                              :dataSource="reopenedFiltered"
                          ></oiShowAnalytical>
                        </div>
                      </oiModal>  
                  </div>    
              </div>    
            </center>          
          </div>
          <div id="noPrediction" class="tab-pane fade">
            <center class="text-top">
                <h4 v-show="noPredictionDevManufSelected != ''" style="margin:3px"><b>{{noPredictionDevManufSelected}}</b></h4>
                <hr style="margin:0; height: 7px; border: 0; box-shadow: 0 7px 7px -7px #d9d9d9 inset">

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartNoPredictionDevManuf" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 text-top">
                    <div id="chartNoPredictionTimeline" style= "width:300px; height:300px; margin:0"></div>
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div id="chartNoPredictionTotal" style="width:300px; height:300px; margin:0 auto"></div>
                </div>

                  <div class="row">
                  <div class="col-sm-12">           
                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#noPredictionRegrasModal">Regras
                      </button>
                      <oiModal id="noPredictionRegrasModal" title="Regras para cálculo de 'Sem Prev. de Solução'">   
                        <div style="margin:0; padding:10px" slot="body">

                          <label class="fd-label">
                            <p style="text-align:left">
                                Quantidade de defeitos fechados com o campo “Data Prevista Solução Defeito” vazio, divididos pelo total de defeitos fechados multiplicados por 100.
                            </p>
                            <p style="text-align:left">
                                Este campo “Data Prevista Solução Defeito” é imputado manualmente no ALM.
                            </p>
                            <p style="text-align:left">
                                O valor de referência é 5% do total de defeitos fechados.
                            </p>
                          </label>
                        </div>
                      </oiModal>

                      <button 
                          type="button" 
                          style="margin-top:3px"
                          class="btn btn-xs"
                          data-toggle="modal" 
                          data-target="#noPredictionModalAnalitic">Analítico
                      </button>
                      <oiModal id="noPredictionModalAnalitic" title="Sem Prev. de Solução - Analítico" size="l">   
                        <div style="margin:0; padding:10px" slot="body">
                          <oiShowAnalytical
                              :dataSource="noPredictionFiltered"
                          ></oiShowAnalytical>
                        </div>
                      </oiModal>  
                                          
                  </div> 
              </div> 
            </center>          
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped>
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    border: 0;
    padding: 3px;
  } 
  .oi-col {
    padding: 3px;
    margin: 0;
    border: 0;
  }  
  .fd-label {
    font-weight: normal;
    text-align: left;
  }  
</style>
