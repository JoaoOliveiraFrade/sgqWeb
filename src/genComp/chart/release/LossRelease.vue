<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'LossRelease',

    props: {
      value: { type: Object }
    },

    data () {
      return {
        parameters: chartParametersTotal()
      }
    },

    methods: {
      loadParameters () {
        this.parameters.title.text = 'Perdeu Release'
        this.parameters.yAxis.title.text = 'Qte<br>Entrega'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.parameters.yAxis.max = this.value.candidate

        this.parameters.yAxis.plotBands = [
          {from: 0, to: this.value.lossRelease, color: '#FF3300'},
          {from: this.value.lossRelease, to: this.value.candidate, color: '#00CC00'}
        ]

        let averagelossRelease = Math.floor(this.value.lossRelease / this.value.candidate * 100)

        this.parameters.tooltip.pointFormat = 'Candidatada: ' + this.value.candidate + '<br>' +
          'Sobre Desligado: ' + this.value.lossRelease + ' (' + averagelossRelease + '%)'

        this.parameters.series = [ { name: 'lossRelease', colorByPoint: true, data: [ this.value.lossRelease ] } ]
      },
      drawChart () {
        Highcharts.chart(this.$el, this.parameters)
      }
    },

    mounted () {
      this.loadParameters()
      this.drawChart()
    },

    updated () {
      this.loadParameters()
      this.drawChart()
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
