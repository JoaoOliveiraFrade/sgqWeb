<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  import chartStandParam from '@/comp/chart/types/drillDown'

  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupDevManuf',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: null
      }
    },

    computed: {
      ...mapGetters('indPerfDevDefectOfTSInTI', ['groupDevManuf', 'byDevManufGroupSystem', 'chartTitle'])
    },

    methods: {
      ...mapActions('indPerfDevDefectOfTSInTI', ['setChartFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Desenv. / Sistema'
        this.chartParam.yAxis.title.text = '% Defeito'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.name}</b><br>
          % Detectável em TS: {point.y:.2f}%<br>
          Qte Detectável em TS: {point.qtyOfTSInTI:.0f}<br>
          Qte Total: {point.qtyTotal:.0f}<br>
        `
        this.chartParam.series.name = '% Detectável em TS'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
          {
            name: '% Detectável em TS',
            colorByPoint: true,
            data: this.groupDevManuf.map(i => ({
              name: i.devManuf ? i.devManuf.charAt(0).toUpperCase() + i.devManuf.slice(1).toLowerCase() : '',
              drilldown: i.devManuf,
              y: i.percOfTSInTI,
              qtyOfTSInTI: i.qtyOfTSInTI,
              qtyTotal: i.qtyTotal,
              percOfTSInTI: i.percOfTSInTI
            }))
          }
        ]

        this.chartParam.drilldown = {
          series: this.groupDevManuf.map(i => ({
            name: i.devManuf,
            id: i.devManuf,
            data: this.byDevManufGroupSystem(i.devManuf).map(s => ({
              name: s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '',
              y: s.percOfTSInTI,
              qtyOfTSInTI: i.qtyOfTSInTI,
              qtyTotal: s.qtyTotal,
              percOfTSInTI: s.percOfTSInTI
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

