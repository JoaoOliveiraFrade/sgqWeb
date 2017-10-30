<script>
  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  import chartParametersTotal from '@/comp/chart/types/Total'

  export default {
    name: 'chartProductivityTotal',

    props: {
      value: { type: Object }
    },

    data () {
      return {
        parameters: chartParametersTotal(),
        chart: undefined
      }
    },

    updated () {
      this.loadParameters()
      this.chart = Highcharts.chart(this.$el, this.parameters)
    },

    methods: {
      loadParameters () {
        this.parameters.title.text = 'Produtividade'
        this.parameters.yAxis.title.text = 'Qte<br>Execuções'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.parameters.yAxis.max = this.value.productivity
        this.parameters.yAxis.plotBands = [
          {from: 0, to: this.value.productivity, color: '#00CC00'}
        ]
        this.parameters.tooltip.pointFormat = 'Total: ' + this.value.productivity + '<br>' +
          'Passed: ' + this.value.passed + '<br>' +
          'Failed: ' + this.value.failed
  
        this.parameters.series = [ { name: 'Produtividade', colorByPoint: true, data: [ this.value.productivity ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{value}}
  </div>
</template>

<style>
</style>
