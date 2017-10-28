<script>
  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  // const highchartsMore = require('highcharts-more')
  // highchartsMore(Highcharts)

  import chartParametersTotal from '@/comp/chart/types/Total'

  export default {
    name: 'chartDefectReopenedTotal',

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
        let limitSupRed = this.value.percReopened > 100 ? this.value.percReopened : 100

        this.parameters.title.text = 'Defeito Reaberto'
        this.parameters.yAxis.title.text = '%<br>Defeito'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}%'
        this.parameters.yAxis.max = (this.value.percReopened <= 100) ? 100 : this.value.percReopened
        this.parameters.yAxis.plotBands = [
            {from: 0, to: limitSupGreen, color: '#00CC00'},
            {from: limitSupGreen, to: limitSupRed, color: '#FF3300'}
        ]
        this.parameters.tooltip.pointFormat = 'Reaberto: ' + this.value.percReopened + '%<br>' +
          'Qte Reaberto: ' + this.value.qtyReopened + '<br>' +
          'Qte Defeito: ' + this.value.qtyDefect + '<br>' +
          'Limite Máximo: 5%'
          // 'Qte Referência: ' + this.value.qtyReference + ' def. (' + this.value.percentReference + '%)'

        this.parameters.series = [ { name: '% Def', colorByPoint: true, data: [ this.value.percReopened ] } ]
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
