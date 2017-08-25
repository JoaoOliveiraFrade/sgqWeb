<script>
  import { mapGetters, mapActions } from 'vuex'

  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  import chartStandParam from '@/module/chart/comp/types/drillDown'

  export default {
    name: 'ShowChartGroupTestManufProductivity',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters(['produtivityGroupTestManuf', 'produtivityByTestManufGroupSystem', 'produtivityChartTitle'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      ...mapActions(['produtivityChartChangeFilter']),

      setChartParam () {
        this.chartParam.title.text = 'Fáb.Teste / Sistema'
        this.chartParam.yAxis.title.text = 'Qte Exec.'
        this.chartParam.tooltip.pointFormat = '{point.y:.0f}'
        this.chartParam.series.name = 'Produtividade'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

        this.chartParam.series = [
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

        this.chartParam.drilldown = {
          series: this.produtivityGroupTestManuf.map(i => ({
            name: i.testManuf,
            id: i.testManuf,
            data: this.produtivityByTestManufGroupSystem(i.testManuf).map(s => [ s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase(), s.productivity ])
          }))
        }

        let self = this

        this.chartParam.plotOptions.bar.events = {
          click: function (event) {
            self.produtivityChartChangeFilter(event.point.name.toUpperCase())
            self.chart.setTitle({text: self.produtivityChartTitle})
          }
        }

        this.chartParam.chart.events = {
          drillup: function (e) {
            self.produtivityChartChangeFilter('')
            self.chart.setTitle({text: self.produtivityChartTitle})
          }
        }
      }
    }
  }
</script>

<template> 
  <div style="width:250px; height:350px; margin:0 auto">
    <pre>{{produtivityGroupTestManuf}}</pre>
  </div>
</template>

