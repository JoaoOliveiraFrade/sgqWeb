<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/module/chart/comp/types/drillDown2'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufAverangeRetestHours',

    data () {
      return {
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorAverangeRetestHours', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Fáb.Teste / Sistema'
        param.yAxis.title.text = 'Média Horas'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Tempo Médio (h): {point.averangeRetestHours:.2f}<br>
          Defeito: {point.qtyDefect:.0f}<br>
          Horas Reteste: {point.qtyRetestHours:.2f}
        `
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        param.series = [
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

        param.drilldown = {
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

        param.plotOptions.bar.events = {
          click: function (event) {
            self.setChartFilter(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.chartTitle})
          }
        }

        param.chart.events = {
          drillup: function (e) {
            self.setChartFilter('')
            self.chart.setTitle({text: self.chartTitle})
          }
        }
        return param
      }
    },

    methods: {
      ...mapActions('indicatorAverangeRetestHours', ['setChartFilter']),

      drawChart () {
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

