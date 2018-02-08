<script>
  import chartParameters from '@/genComp/chart/types/schedule'

  const Highcharts = require('highcharts')

  const HighchartsXrange = require('highcharts-xrange')
  HighchartsXrange(Highcharts)

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  export default {
    name: 'DeployOff',

    props: {
      value: { type: Object }
    },

    data () {
      return {
        parameters: chartParameters()
      }
    },

    methods: {
      loadParameters () {
        this.parameters.title.text = ''
        this.parameters.yAxis.title.text = 'Etapas da Release'
        this.parameters.yAxis.categories = ['TI e UAT', 'TRG', 'PRD', 'ESTAB']

        this.parameters.data = [
          {
            y: 0,
            x: Date.UTC(2016, 10, 21),
            x2: Date.UTC(2016, 11, 22),
            partialFill: 0.75
          }, {
            y: 1,
            x: Date.UTC(2016, 11, 19),
            x2: Date.UTC(2016, 11, 25)
          }, {
            y: 2,
            x: Date.UTC(2016, 11, 25),
            x2: Date.UTC(2016, 11, 30)
          }, {
            y: 3,
            x: Date.UTC(2016, 11, 30),
            x2: Date.UTC(2016, 12, 9)
          }
        ]
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
  <div style="width:600px; height:200px; margin:0 auto">
    {{value}}
  </div>
</template>

<style>
</style>
