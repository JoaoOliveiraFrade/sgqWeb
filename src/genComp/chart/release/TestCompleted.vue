<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'TestCompleted',

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
        let averageTestCompleted = Math.floor(this.value.testCompleted / this.value.candidate * 100)
        let averageLowRiskProgress = Math.floor(this.value.lowRiskProgress / this.value.candidate * 100)
        let averageMediumRiskProgress = Math.floor(this.value.mediumRiskProgress / this.value.candidate * 100)
        let averageHighRiskProgress = Math.floor(this.value.highRiskProgress / this.value.candidate * 100)

        this.parameters.title.text = 'Teste Finalizado'
        this.parameters.yAxis.title.text = 'Qte<br>Entrega'
        this.parameters.plotOptions.gauge.dataLabels.useHTML = true
        this.parameters.plotOptions.gauge.dataLabels.format = '<center>{point.y:.0f}<br>' + averageTestCompleted + '%</center>'
        this.parameters.yAxis.max = this.value.candidate

        let l12 = this.value.testCompleted
        let l22 = l12 + this.value.lowRiskProgress
        let l32 = l22 + this.value.mediumRiskProgress
        let l42 = l32 + this.value.highRiskProgress

        this.parameters.yAxis.plotBands = [
          {from: 0, to: l12, color: '#00CC00'}, // 5F9EA0 azul
          {from: l12, to: l22, color: '#FFD700'},
          {from: l22, to: l32, color: '#FF8C00'}, // FF9E0D
          {from: l32, to: l42, color: '#FF3300'}
        ]

        this.parameters.tooltip.pointFormat = 'Candidatada: ' + this.value.candidate + '<br>' +
          'Teste Finalizado: ' + this.value.testCompleted + ' (' + averageTestCompleted + '%)<br>' +
          'Em Teste C/Risco Baixo: ' + this.value.lowRiskProgress + ' (' + averageLowRiskProgress + '%)<br>' +
          'Em Teste C/Risco Médio: ' + this.value.mediumRiskProgress + ' (' + averageMediumRiskProgress + '%)<br>' +
          'Em Teste C/Risco Alto: ' + this.value.highRiskProgress + ' (' + averageHighRiskProgress + '%)'

        this.parameters.series = [ { name: 'testCompleted', colorByPoint: true, data: [ this.value.testCompleted ] } ]
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
