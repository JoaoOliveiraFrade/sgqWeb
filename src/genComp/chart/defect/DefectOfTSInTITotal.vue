<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'chartdefectOfTSInTI',

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
        let limitSupGreen = 5
        let limitSupRed = this.value.qtyOfTSInTI < 100 ? 100 : this.value.qtyOfTSInTI

        this.parameters.title.text = 'Defeito de TS em TI'
        this.parameters.yAxis.title.text = '%<br>Defeito'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}%'
        this.parameters.yAxis.max = limitSupRed
        this.parameters.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: limitSupRed, color: '#FF3300'}
        ]
        this.parameters.tooltip.pointFormat = 'TS em TI: ' + this.value.percOfTSInTI + '%<br>' +
          'Qte Defeito de TS em TI: ' + this.value.qtyOfTSInTI + '<br>' +
          'Qte Defeito: ' + this.value.qtyDefect + '<br>' +
          'Limite Máximo: 5%'

        this.parameters.series = [ { name: 'Horas', colorByPoint: true, data: [ this.value.percOfTSInTI ] } ]
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
