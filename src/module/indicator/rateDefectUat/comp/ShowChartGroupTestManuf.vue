<script>
  import { mapGetters, mapActions } from 'vuex'

  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  import chartStandParam from '@/module/chart/comp/types/drillDown'

  export default {
    name: 'ShowChartGroupTestManufRateDefectUnfounded',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters('indicatorRateDefectUnfounded', ['groupTestManuf', 'byTestManufGroupSystem', 'chartTitle'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      ...mapActions('indicatorRateDefectUnfounded', ['changeChartFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Qte Rej.'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Improcedente: {point.qtyUnfounded:.0f} ({point.percUnfounded:.2f}%{point.percUnfoundedTotal})<br>
          Defeito: {point.qtyDefect:.0f}{point.percDefectTotal}<br>
          Total Improcedente: {point.qtyTotalUnfounded:.0f}<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
        `
        this.chartParam.series.name = 'Taxa Improcedente'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            name: 'Taxa Improcedente',
            colorByPoint: true,
            data: this.groupTestManuf.map(i => ({
              name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
              y: i.qtyUnfounded,
              qtyUnfounded: i.qtyUnfounded,
              percUnfounded: i.percUnfounded,
              percUnfoundedTotal: i.percUnfoundedTotal !== 100 ? ', ' + i.percUnfoundedTotal + '% total' : '',
              qtyDefect: i.qtyDefect,
              percDefectTotal: i.percDefectTotal !== 100 ? ' (' + i.percDefectTotal + '% total)' : '',
              qtyTotalUnfounded: i.qtyTotalUnfounded,
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
              y: s.qtyUnfounded,
              qtyUnfounded: s.qtyUnfounded,
              percUnfounded: s.percUnfounded,
              percUnfoundedTotal: s.percUnfoundedTotal !== 100 ? ', ' + s.percUnfoundedTotal + '% total' : '',
              qtyDefect: s.qtyDefect,
              percDefectTotal: s.percDefectTotal !== 100 ? ' (' + s.percDefectTotal + '% total)' : '',
              qtyTotalUnfounded: s.qtyTotalUnfounded,
              qtyTotalDefect: s.qtyTotalDefect
            }))
          }))
        }

        let self = this

        this.chartParam.plotOptions.bar.events = {
          click: function (event) {
            console.log('click: function')
            self.changeChartFilter(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.chartTitle})
          }
        }

        this.chartParam.chart.events = {
          drillup: function (e) {
            self.changeChartFilter('')
            self.chart.setTitle({text: self.chartTitle})
          }
        }
      }
    }
  }
</script>

<template> 
  <div style="width:250px; height:350px; margin:0 auto">
    {{groupTestManuf}}
  </div>
</template>

