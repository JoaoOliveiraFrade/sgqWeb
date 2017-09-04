<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total2'

  export default {
    name: 'ShowChartTotal',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters(['produtivityTotal']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Total'
        param.yAxis.title.text = 'Qte<br>Exec.'
        param.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        param.yAxis.max = this.produtivityTotal.productivity

        param.yAxis.plotBands = [
          {from: 0, to: this.produtivityTotal.passed, color: '#00CC00'},
          {from: this.produtivityTotal.passed, to: this.produtivityTotal.productivity, color: '#FF3300'}
        ]

        param.tooltip.pointFormat = 'Passed: ' + this.produtivityTotal.passed + '<br>' +
          'Failed: ' + this.produtivityTotal.failed + '<br>' +
          'Total: ' + this.produtivityTotal.productivity

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.produtivityTotal.productivity ] } ]
        return param
      }
    },

    methods: {
      drawChart () {
        Highcharts.chart(this.$el, this.chartParam)
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
  <div style="width:250px; height:250px; margin:0 auto">
    {{produtivityTotal.productivity}}
  </div>
</template>
