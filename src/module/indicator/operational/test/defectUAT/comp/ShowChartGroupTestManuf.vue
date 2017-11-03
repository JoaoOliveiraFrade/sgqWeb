<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/comp/chart/types/drillDown'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufDefectUat',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorDefectUAT', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle'])
    },

    methods: {
      ...mapActions('indicatorDefectUAT', ['setChartFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Qte Rej.'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Uat: {point.qtyDefectUat:.0f} ({point.percDefectUat:.2f}%{point.percTotalDefectUat})<br>
          Defeito: {point.qtyDefect:.0f}{point.percTotalDefect}<br>
          Total Uat: {point.qtyTotalDefectUat:.0f}<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
        `
        this.chartParam.series.name = 'Taxa Uat'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
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

        this.chartParam.drilldown = {
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

