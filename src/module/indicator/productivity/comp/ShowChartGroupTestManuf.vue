<script>
  import { mapGetters, mapActions } from 'vuex'
  import chartStandParam from '@/module/chart/comp/types/drillDown2'
  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufProductivity',

    data () {
      return {
        chart: null
      }
    },

    computed: {
      ...mapGetters(['produtivityGroupTestManuf', 'produtivityByTestManufGroupSystem', 'produtivityChartTitle']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Fáb.Teste / Sistema'
        param.yAxis.title.text = 'Qte Exec.'
        param.tooltip.pointFormat = '{point.y:.0f}'
        param.series.name = 'Produtividade'
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        param.series = [
          {
            name: 'produtividade',
            colorByPoint: true,
            data: this.produtivityGroupTestManuf.map(i => ({
              name: i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase(),
              y: i.productivity,
              drilldown: i.testManuf
            }))
          }
        ]

        param.drilldown = {
          series: this.produtivityGroupTestManuf.map(i => ({
            name: i.testManuf,
            id: i.testManuf,
            data: this.produtivityByTestManufGroupSystem(i.testManuf).map(s => [ s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase(), s.productivity ])
          }))
        }

        let self = this

        param.plotOptions.bar.events = {
          click: function (event) {
            self.produtivityChartChangeFilter(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.produtivityChartTitle})
          }
        }

        param.chart.events = {
          drillup: function (e) {
            self.produtivityChartChangeFilter('')
            self.chart.setTitle({text: self.produtivityChartTitle})
          }
        }
        return param
      }
    },

    methods: {
      ...mapActions(['produtivityChartChangeFilter']),

      drawChart () {
        this.chart = Highcharts.chart(this.$el, this.chartParam)
      }
    },

    mounted () {
      this.drawChart()
    },

    updated () {
      this.drawChart()
    }
  }
</script>

<template> 
  <div style="width:250px; height:350px; margin:0 auto">
    {{produtivityGroupTestManuf}}
  </div>
</template>

