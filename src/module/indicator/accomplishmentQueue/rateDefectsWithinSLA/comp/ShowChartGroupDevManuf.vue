<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/comp/chart/types/drillDown'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupDevManufrateDefectsWithinSLA',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: null
      }
    },

    computed: {
      ...mapGetters('indicatorRateDefectsWithinSLA', ['groupDevManuf', 'byDevManufGroupSystem', 'chartTitle'])
    },

    methods: {
      ...mapActions('indicatorRateDefectsWithinSLA', ['setChartFilter']),

      // setChartParam () {
      //   this.chartParam.title.text = 'Fáb.Desenv. / Sistema'
      //   this.chartParam.yAxis.title.text = 'Qte Dentro SLA'

      //   this.chartParam.tooltip.headerFormat = ''
      //   this.chartParam.tooltip.pointFormat = `
      //     <b>{point.name}</b><br>
      //     Dentro SLA: {point.qtyWithinSLA:.0f} ({point.percWithinSLA:.2f}%{point.percTotalDefectsWithinSLA})<br>
      //     Defeito: {point.qtyDefect:.0f}{point.percTotalDefect}<br>
      //     Total Dentro SLA: {point.qtyTotalWithinSLA:.0f}<br>
      //     Total Defeito: {point.qtyTotalDefect:.0f}
      //   `
      //   this.chartParam.series.name = 'Taxa Dentro SLA'
      //   this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

      //   this.chartParam.series = [
      //     {
      //       name: 'Taxa Dentro SLA',
      //       colorByPoint: true,
      //       data: this.groupDevManuf.map(i => ({
      //         name: i.devManuf ? i.devManuf.charAt(0).toUpperCase() + i.devManuf.slice(1).toLowerCase() : '',
      //         y: i.qtyWithinSLA,
      //         qtyWithinSLA: i.qtyWithinSLA,
      //         percWithinSLA: i.percWithinSLA,
      //         percTotalDefectsWithinSLA: i.percTotalDefectsWithinSLA !== 100 ? ', ' + i.percTotalDefectsWithinSLA + '% total' : '',
      //         qtyDefect: i.qtyDefect,
      //         percTotalDefect: i.percTotalDefect !== 100 ? ' (' + i.percTotalDefect + '% total)' : '',
      //         qtyTotalWithinSLA: i.qtyTotalWithinSLA,
      //         qtyTotalDefect: i.qtyTotalDefect,
      //         drilldown: i.devManuf
      //       }))
      //     }
      //   ]

      //   this.chartParam.drilldown = {
      //     series: this.groupDevManuf.map(i => ({
      //       name: i.devManuf,
      //       id: i.devManuf,
      //       data: this.byDevManufGroupSystem(i.devManuf).map(s => ({
      //         name: s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '',
      //         y: s.qtyWithinSLA,
      //         qtyWithinSLA: s.qtyWithinSLA,
      //         percWithinSLA: s.percWithinSLA,
      //         percTotalDefectsWithinSLA: s.percTotalDefectsWithinSLA !== 100 ? ', ' + s.percTotalDefectsWithinSLA + '% total' : '',
      //         qtyDefect: s.qtyDefect,
      //         percTotalDefect: s.percTotalDefect !== 100 ? ' (' + s.percTotalDefect + '% total)' : '',
      //         qtyTotalWithinSLA: s.qtyTotalWithinSLA,
      //         qtyTotalDefect: s.qtyTotalDefect
      //       }))
      //     }))
      //   }

      //   let self = this

      //   this.chartParam.plotOptions.bar.events = {
      //     click: function (event) {
      //       self.setChartFilter(event.point.name.toUpperCase())
      //       self.chart.setTitle({text: self.chartTitle})
      //     }
      //   }

      //   this.chartParam.chart.events = {
      //     drillup: function (e) {
      //       self.setChartFilter('')
      //       self.chart.setTitle({text: self.chartTitle})
      //     }
      //   }
      // },

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Desenv. / Sistema'
        this.chartParam.yAxis.title.text = '% Dentro SLA'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          Dentro SLA: {point.percWithinSLA:.2f}% ({point.qtyWithinSLA:.0f})<br>
          Defeito: 100% ({point.qtyDefect})<br>
          Total Dentro SLA: {point.qtyTotalWithinSLA:.0f}<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
        `
        this.chartParam.series.name = 'Taxa Dentro SLA'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            name: 'Taxa Dentro SLA',
            colorByPoint: true,
            data: this.groupDevManuf.map(i => ({
              name: i.devManuf ? i.devManuf.charAt(0).toUpperCase() + i.devManuf.slice(1).toLowerCase() : '',
              y: i.percWithinSLA,
              qtyWithinSLA: i.qtyWithinSLA,
              percWithinSLA: i.percWithinSLA,
              percTotalDefectsWithinSLA: i.percTotalDefectsWithinSLA !== 100 ? ', ' + i.percTotalDefectsWithinSLA + '% total' : '',
              qtyDefect: i.qtyDefect,
              percTotalDefect: i.percTotalDefect !== 100 ? ' (' + i.percTotalDefect + '% total)' : '',
              qtyTotalWithinSLA: i.qtyTotalWithinSLA,
              qtyTotalDefect: i.qtyTotalDefect,
              drilldown: i.devManuf
            }))
          }
        ]

        this.chartParam.drilldown = {
          series: this.groupDevManuf.map(i => ({
            name: i.devManuf,
            id: i.devManuf,
            data: this.byDevManufGroupSystem(i.devManuf).map(s => ({
              name: s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '',
              y: s.percWithinSLA,
              qtyWithinSLA: s.qtyWithinSLA,
              percWithinSLA: s.percWithinSLA,
              percTotalDefectsWithinSLA: s.percTotalDefectsWithinSLA !== 100 ? ', ' + s.percTotalDefectsWithinSLA + '% total' : '',
              qtyDefect: s.qtyDefect,
              percTotalDefect: s.percTotalDefect !== 100 ? ' (' + s.percTotalDefect + '% total)' : '',
              qtyTotalWithinSLA: s.qtyTotalWithinSLA,
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
    {{groupDevManuf}}
  </div>
</template>

