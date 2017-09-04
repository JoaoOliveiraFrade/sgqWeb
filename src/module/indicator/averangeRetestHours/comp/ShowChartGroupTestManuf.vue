<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/module/chart/comp/types/drillDown2'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufRateDefectUat',

    data () {
      return {
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorRateDefectUat', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Fáb.Teste / Sistema'
        param.yAxis.title.text = 'Qte Rej.'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Defeito: {point.qtyDefect:.0f}<br>
          Horas Reteste: {point.qtyRetestHours:.0f}<br>
          Tempo Médio: {point.averangeRetestHours:.0f}<br>
          Total Defeito: {point.qtyTotalDefect:.0f}<br>
          Total Horas Reteste: {point.qtyTotalRetestHours:.0f}
        `
        param.series.name = 'Taxa Uat'
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        param.series = [
          {
            name: 'Taxa Def. Uat',
            colorByPoint: true,
            data: this.groupTestManuf.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.averangeRetestHours,
              qtyDefect: i.qtyDefect,
              qtyRetestHours: i.qtyRetestHours,
              averangeRetestHours: i.averangeRetestHours,
              qtyTotalDefect: i.qtyTotalDefect,
              qtyTotalRetestHours: i.qtyTotalRetestHours,
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
              y: i.averangeRetestHours,
              qtyDefect: i.qtyDefect,
              qtyRetestHours: i.qtyRetestHours,
              averangeRetestHours: i.averangeRetestHours,
              qtyTotalDefect: i.qtyTotalDefect,
              qtyTotalRetestHours: i.qtyTotalRetestHours
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
      ...mapActions('indicatorRateDefectUat', ['setChartFilter']),

      drawChart () {
        this.chart = Highcharts.chart(this.$refs.idChart, this.chartParam)
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
  <div ref="idChart" style="width:250px; height:350px; margin:0 auto">
    {{groupTestManuf}}
  </div>
</template>

