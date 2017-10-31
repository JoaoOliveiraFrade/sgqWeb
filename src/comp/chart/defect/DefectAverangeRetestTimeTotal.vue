<script>
  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  import chartParametersTotal from '@/comp/chart/types/Total'

  export default {
    name: 'chartDefectAverangeRetestTimeTotal',

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
        let limitSupRed = this.value.averangeRetestHour > limitSupGreen ? this.value.averangeRetestHour : limitSupGreen

        this.parameters.title.text = 'Tempo Médio Reteste Def.'
        this.parameters.yAxis.title.text = 'Hora<br>Reteste'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.parameters.yAxis.max = limitSupRed
        this.parameters.yAxis.plotBands = [
          {from: 0, to: limitSupGreen, color: '#00CC00'},
          {from: limitSupGreen, to: limitSupRed, color: '#FF3300'}
        ]
        this.parameters.tooltip.pointFormat = 'Tempo Médio Resteste: ' + this.value.averangeRetestHour + '(h)<br>' +
          'Qte Defeito: ' + this.value.qtyDefect + '<br>' +
          'Qte Reteste: ' + this.value.qtyRetestHour + '(h)'
  
        this.parameters.series = [ { name: 'Produtividade', colorByPoint: true, data: [ this.value.averangeRetestHour ] } ]
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
