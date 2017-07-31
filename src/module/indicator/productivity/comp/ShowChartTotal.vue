<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ShowChartTotal',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters(['produtivityTotal'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        this.chartParam.title.text = 'Total'
        this.chartParam.yAxis.title.text = 'Qte<br>Exec.'
        this.chartParam.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.chartParam.yAxis.max = this.produtivityTotal.productivity

        this.chartParam.yAxis.plotBands = [
          {from: 0, to: this.produtivityTotal.passed, color: '#00CC00'},
          {from: this.produtivityTotal.passed, to: this.produtivityTotal.productivity, color: '#FF3300'}
        ]

        // this.parameters.yAxis.plotBands = [
        //   {from: 0, to: 10, color: '#00CC00'},
        //   {from: 10, to: 20, color: '#FFFF0D'},
        //   {from: 20, to: 30, color: '#FF9E0D'},
        //   {from: 30, to: this.parameters.yAxis.max, color: '#FF3300'}
        // ]

        this.chartParam.tooltip.pointFormat = 'Passed: ' + this.produtivityTotal.passed + '<br>' +
          'Failed: ' + this.produtivityTotal.failed + '<br>' +
          'Total: ' + this.produtivityTotal.productivity

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.produtivityTotal.productivity ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{produtivityTotal.productivity}}
  </div>
</template>
