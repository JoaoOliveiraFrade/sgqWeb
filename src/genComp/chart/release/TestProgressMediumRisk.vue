<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'TestProgressMediumRisk',

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
        let averageMediumRiskProgress = Math.floor(this.value.mediumRiskProgress / this.value.candidate * 100)

        this.parameters.title.text = 'Em Teste C/Risco Médio'
        this.parameters.yAxis.title.text = 'Qte<br>Entrega'

        this.parameters.plotOptions.gauge.dataLabels.useHTML = true
        this.parameters.plotOptions.gauge.dataLabels.format = '<center>{point.y:.0f}<br>' + averageMediumRiskProgress + '%</center>'

        this.parameters.yAxis.max = this.value.candidate

        this.parameters.yAxis.plotBands = [
          {from: 0, to: this.value.mediumRiskProgress, color: '#00CC00'},
          {from: this.value.mediumRiskProgress, to: this.value.candidate, color: '#FF3300'}
        ]

        this.parameters.tooltip.pointFormat = 'Candidatada: ' + this.value.candidate + '<br>' +
          'Em Teste C/Risco Médio: ' + this.value.mediumRiskProgress + ' (' + averageMediumRiskProgress + '%)'

        this.parameters.series = [ { name: 'testCompleted', colorByPoint: true, data: [ this.value.mediumRiskProgress ] } ]
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
