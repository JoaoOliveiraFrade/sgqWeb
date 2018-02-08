<script>
  import chartParametersTotal from '@/genComp/chart/types/total'

  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'Candidate',

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
        this.parameters.title.text = 'Candidatada'
        this.parameters.yAxis.title.text = 'Qte<br>Entrega'

        this.parameters.plotOptions.gauge.dataLabels.useHTML = true
        this.parameters.plotOptions.gauge.dataLabels.format = '<center>{point.y:.0f}<br>100%</center>'

        this.parameters.yAxis.max = this.value.candidate

        this.parameters.yAxis.plotBands = [
          {from: 0, to: this.value.candidate, color: '#00CC00'}
        ]

        this.parameters.tooltip.pointFormat = 'Candidatada: ' + this.value.candidate

        this.parameters.series = [ { name: 'lossRelease', colorByPoint: true, data: [ this.value.candidate ] } ]
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
