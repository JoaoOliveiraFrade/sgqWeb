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
        let averageDeployOff = Math.floor(this.value.deployOff / this.value.candidate * 100)

        this.parameters.title.text = 'Sobe Desligada'
        this.parameters.yAxis.title.text = 'Qte<br>Entrega'

        this.parameters.plotOptions.gauge.dataLabels.useHTML = true
        this.parameters.plotOptions.gauge.dataLabels.format = '<center>{point.y:.0f}<br>' + averageDeployOff + '%</center>'

        this.parameters.yAxis.max = this.value.candidate

        this.parameters.yAxis.plotBands = [
          {from: 0, to: this.value.deployOff, color: '#FF3300'},
          {from: this.value.deployOff, to: this.value.candidate, color: '#00CC00'}
        ]

        this.parameters.tooltip.pointFormat = 'Candidatada: ' + this.value.candidate + '<br>' +
          'Sobre Desligado: ' + this.value.deployOff + ' (' + averageDeployOff + '%)'

        this.parameters.series = [ { name: 'deployOff', colorByPoint: true, data: [ this.value.deployOff ] } ]
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
