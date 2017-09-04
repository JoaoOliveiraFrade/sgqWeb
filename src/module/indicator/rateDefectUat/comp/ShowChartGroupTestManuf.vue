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
          Uat: {point.qtyUat:.0f} ({point.percUat:.2f}%{point.percTotalUat})<br>
          Defeito: {point.qtyDefect:.0f}{point.percTotalDefect}<br>
          Total Uat: {point.qtyTotalUat:.0f}<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
        `
        param.series.name = 'Taxa Uat'
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        param.series = [
          {
            name: 'Taxa Def. Uat',
            colorByPoint: true,
            data: this.groupTestManuf.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.qtyDefectUat,
              qtyDefectUat: i.qtyDefectUat,
              percDefectUat: i.percDefectUat,
              percTotalDefectUat: i.percTotalDefectUat !== 100 ? ', ' + i.percTotalDefectUat + '% total' : '',
              qtyDefect: i.qtyDefect,
              percTotalDefect: i.percTotalDefect !== 100 ? ' (' + i.percTotalDefect + '% total)' : '',
              qtyTotalDefectUat: i.qtyTotalDefectUat,
              qtyTotalDefect: i.qtyTotalDefect,
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
              y: s.qtyDefectUat,
              qtyDefectUat: s.qtyDefectUat,
              percDefectUat: s.percDefectUat,
              percTotalDefectUat: s.percTotalDefectUat !== 100 ? ', ' + s.percTotalDefectUat + '% total' : '',
              qtyDefect: s.qtyDefect,
              percTotalDefect: s.percTotalDefect !== 100 ? ' (' + s.percTotalDefect + '% total)' : '',
              qtyTotalDefectUat: s.qtyTotalDefectUat,
              qtyTotalDefect: s.qtyTotalDefect
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

