<script>
  import chartParameters from '@/genComp/chart/types/timelineMultipleAxis'

  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  const highchartsNoData = require('highcharts-no-data-to-display')
  highchartsNoData(Highcharts)

  export default {
    name: 'ctImpactedXDefects',

    props: {
      dataSource: { type: Array },
      title: { type: String }
    },

    data () {
      return {
        parameters: chartParameters()
      }
    },

    methods: {
      loadParameters () {
        this.parameters.title.text = this.title
        this.parameters.yAxis[0].title.text = 'CTs Impactados'
        this.parameters.yAxis[1].title.text = 'Defeitos'

        this.parameters.xAxis.categories = this.dataSource.map(i => i.date)

        this.parameters.series = [
          {
            name: 'CTs Impact.',
            type: 'column',
            tooltip: { pointFormat: 'CTs Impactados: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.qtyCtsImpactedAcum)
          }, {
            name: 'Tot.Def.',
            type: 'spline',
            yAxis: 1,
            tooltip: { pointFormat: 'Total Defeitos: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.qtyDefectsTotAcum)
          }, {
            name: 'Def.Amb.',
            type: 'spline',
            yAxis: 1,
            tooltip: { pointFormat: 'Defeitos Ambiente: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.qtyDefectsAmbAcum)
          }, {
            name: 'Def.Const.',
            yAxis: 1,
            type: 'spline',
            tooltip: { pointFormat: 'Defeitos Construção: {point.y:.0f}' },
            data: this.dataSource.map(i => i.qtyDefectsConsAcum)
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
  <div style="width:450px; height:250px; margin:0 auto">
    {{dataSource}}
  </div>
</template>

<style>
</style>
