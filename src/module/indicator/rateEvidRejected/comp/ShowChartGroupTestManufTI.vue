<script>
  import { mapGetters, mapState, mapActions } from 'vuex'

  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  import chartStandParam from '@/module/chart/comp/types/drillDown'

  export default {
    name: 'ShowChartGroupTestManufTI',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters('indicatorRateEvidRejected', ['groupTestManufTI', 'byTestManufGroupSystemTI', 'chartTitleTI']),
      ...mapState('indicatorRateEvidRejected', ['selectedRejectionType'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      ...mapActions('indicatorRateEvidRejected', ['chartChangeFilterTI']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Qte Rej.'
        this.chartParam.tooltip.pointFormat = '{point.y:.0f}'
        this.chartParam.series.name = 'Taxa Rejeição'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            name: 'Taxa Rejeição',
            colorByPoint: true,
            data: this.groupTestManufTI.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.rejections,
              drilldown: i.testManuf
            }))
          }
        ]

        this.chartParam.drilldown = {
          series: this.groupTestManufTI.map(i => ({
            name: i.testManuf,
            id: i.testManuf,
            data: this.byTestManufGroupSystemTI(i.testManuf).map(s => [ s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '', s.rejections ])
          }))
        }

        let self = this

        this.chartParam.plotOptions.bar.events = {
          click: function (event) {
            self.chartChangeFilterTI(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.chartTitleTI})
          }
        }

        this.chartParam.chart.events = {
          drillup: function (e) {
            self.chartChangeFilterTI('')
            self.chart.setTitle({text: self.chartTitleTI})
          }
        }
      }
    }
  }
</script>

<template> 
  <div style="width:250px; height:350px; margin:0 auto">
    <pre>{{groupTestManufTI}}</pre>
  </div>
</template>

