<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/module/chart/comp/types/drillDown'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufAverangeRetestHours',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorTestAverangeRetestHours', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle'])
    },

    methods: {
      ...mapActions('indicatorTestAverangeRetestHours', ['setChartFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Média Horas'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Tempo Médio (h): {point.averangeRetestHours:.2f}<br>
          Defeito: {point.qtyDefect:.0f}<br>
          Horas Reteste: {point.qtyRetestHours:.2f}
        `
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            colorByPoint: true,
            data: this.groupTestManuf.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.averangeRetestHours,
              qtyDefect: i.qtyDefect,
              qtyRetestHours: i.qtyRetestHours,
              averangeRetestHours: i.averangeRetestHours,
              drilldown: i.testManuf
            }))
          }
        ]

        this.chartParam.drilldown = {
          series: this.groupTestManuf.map(i => ({
            name: i.testManuf,
            id: i.testManuf,
            data: this.byTestManufGroupSystem(i.testManuf).map(s => ({
              name: s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '',
              y: s.averangeRetestHours,
              qtyDefect: s.qtyDefect,
              qtyRetestHours: s.qtyRetestHours,
              averangeRetestHours: s.averangeRetestHours
            }))
          }))
        }

        let self = this

        this.chartParam.plotOptions.bar.events = {
          click: function (event) {
            self.setChartFilter(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.chartTitle})
          }
        }

        this.chartParam.chart.events = {
          drillup: function (e) {
            self.setChartFilter('')
            self.chart.setTitle({text: self.chartTitle})
          }
        }
      },

      drawChart () {
        this.setChartParam()
        this.chart = Highcharts.chart(this.$el, this.chartParam)
      }
    },

    mounted () {
      this.setChartFilter('')
      this.drawChart()
    },

    updated () {
      this.drawChart()
    }
  }
</script>

<template> 
  <div style="width:250px; height:350px; margin:0 auto">
    {{groupTestManuf}}
  </div>
</template>

