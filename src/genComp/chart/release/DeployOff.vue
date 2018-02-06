<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'DeployOff',

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
        this.parameters.title.text = 'Entr. Sobe Desligada'
        this.parameters.yAxis.title.text = 'Qte<br>Entrega'
        this.parameters.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.parameters.yAxis.max = this.value.candidate

        let l12 = this.value.testCompleted
        let l22 = l12 + this.value.lowRiskProgress
        let l32 = l22 + this.value.mediumRiskProgress
        let l42 = l32 + this.value.highRiskProgress

        this.parameters.yAxis.plotBands = [
          {from: 0, to: l12, color: '#5F9EA0'},
          {from: l12, to: l22, color: '#00CC00'},
          {from: l22, to: l32, color: '#FFFF0D'}, // FF9E0D
          {from: l32, to: l42, color: '#FF3300'}
        ]

        let averageTestCompleted = Math.floor(this.value.testCompleted / this.value.candidate * 100)
        let averageLowRiskProgress = Math.floor(this.value.lowRiskProgress / this.value.candidate * 100)
        let averageMediumRiskProgress = Math.floor(this.value.mediumRiskProgress / this.value.candidate * 100)
        let averageHighRiskProgress = Math.floor(this.value.highRiskProgress / this.value.candidate * 100)

        this.parameters.tooltip.pointFormat = 'Candidatada: ' + this.value.candidate + '<br>' +
          'Teste Finalizado: ' + this.value.testCompleted + ' (' + averageTestCompleted + '%)<br>' +
          'Em Andamento - Risco Baixo: ' + this.value.lowRiskProgress + ' (' + averageLowRiskProgress + '%)<br>' +
          'Em Médio - Risco Médio: ' + this.value.mediumRiskProgress + ' (' + averageMediumRiskProgress + '%)<br>' +
          'Em Alto - Risco Alto: ' + this.value.highRiskProgress + ' (' + averageHighRiskProgress + '%)'

        this.parameters.series = [ { name: 'densidade', colorByPoint: true, data: [ this.value.testCompleted ] } ]
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
