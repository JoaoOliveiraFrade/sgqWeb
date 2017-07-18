<script>
  import { mapGetters } from 'vuex'

  import Highcharts from 'highcharts'

  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ChartRateRejectionsEvidenceIndTotal',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters(['produtivityIndTotal'])
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
        this.chartParam.yAxis.max = this.produtivityIndTotal.productivity

        this.chartParam.yAxis.plotBands = [
          {from: 0, to: this.produtivityIndTotal.passed, color: '#00CC00'},
          {from: this.produtivityIndTotal.passed, to: this.produtivityIndTotal.productivity, color: '#FF3300'}
        ]

        // this.parameters.yAxis.plotBands = [
        //   {from: 0, to: 10, color: '#00CC00'},
        //   {from: 10, to: 20, color: '#FFFF0D'},
        //   {from: 20, to: 30, color: '#FF9E0D'},
        //   {from: 30, to: this.parameters.yAxis.max, color: '#FF3300'}
        // ]

        this.chartParam.tooltip.pointFormat = 'Passed: ' + this.produtivityIndTotal.passed + '<br>' +
          'Failed: ' + this.produtivityIndTotal.failed + '<br>' +
          'Total: ' + this.produtivityIndTotal.productivity

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.produtivityIndTotal.productivity ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{produtivityIndTotal.productivity}}
  </div>
</template>
