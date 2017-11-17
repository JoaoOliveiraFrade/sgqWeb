<script>
  import chartParametersTotal from '@/comp/chart/types/total'

  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'chartRejectionEvidenceTotal',

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
        let percMaxLimit = 15
        let percMax = this.value.percRejected > 100 ? this.value.percRejected : 100

        this.parameters.title.text = 'Rejeição Evid.'
        this.parameters.yAxis.title.text = '%<br>Rejeição'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.parameters.yAxis.max = percMax
        this.parameters.yAxis.plotBands = [
          {from: 0, to: percMaxLimit, color: '#00CC00'},
          {from: percMaxLimit, to: percMax, color: '#FF3300'}
        ]
        this.parameters.tooltip.pointFormat = 'Rejeição: ' + this.value.percRejected + '%<br>' +
          'Qte Evidência: ' + this.value.qtyEvidence + '<br>' +
          'Qte Rejeição: ' + this.value.qtyRejection + '<br>' +
          'Limite Máximo: ' + percMaxLimit + '%'
  
        this.parameters.series = [ { name: 'Produtividade', colorByPoint: true, data: [ this.value.percRejected ] } ]
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
