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
      ...mapGetters('indicatorProductivity', ['total']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Total'
        param.yAxis.title.text = 'Qte<br>Exec.'
        param.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        param.yAxis.max = this.total.productivity

        param.yAxis.plotBands = [
          {from: 0, to: this.total.passed, color: '#00CC00'},
          {from: this.total.passed, to: this.total.productivity, color: '#FF3300'}
        ]

        param.tooltip.pointFormat = 'Passed: ' + this.total.passed + '<br>' +
          'Failed: ' + this.total.failed + '<br>' +
          'Total: ' + this.total.productivity

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.productivity ] } ]
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
    {{total.productivity}}
  </div>
</template>
