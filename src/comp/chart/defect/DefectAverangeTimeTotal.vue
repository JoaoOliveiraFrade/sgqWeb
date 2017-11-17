<script>
  import chartParametersTotal from '@/comp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'chartDefectAverangeTimeTotal',

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
        let limitSupGreen = 4
        let limitSupRed = (this.value.averangeHour > 30 ? this.value.averangeHour : 30)

        this.parameters.title.text = 'Tempo Médio Defeito'
        this.parameters.yAxis.title.text = 'Hora<br>Sev.High'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f} h'
        this.parameters.yAxis.max = limitSupRed
        this.parameters.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: limitSupRed, color: '#FF3300'}
        ]
        this.parameters.tooltip.pointFormat = 'Tempo Médio: ' + this.value.averangeHour + '(h)<br>' +
          'Qte Hora: ' + this.value.qtyHour + '<br>' +
          'Qte Defeito: ' + this.value.qtyDefect + '<br>' +
          'Limite Máximo: ' + limitSupGreen + '(h)'
  
        this.parameters.series = [ { name: 'Horas', colorByPoint: true, data: [ this.value.averangeHour ] } ]
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
