<script>
  import initialParameter from '@/comp/chart/types/timelineMultipleAxis'

  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  const highchartsNoData = require('highcharts-no-data-to-display')
  highchartsNoData(Highcharts)

  export default {
    name: 'chartMixProductivityXDefects',

    props: {
      dataSource: { type: Array },
      title: { type: String }
    },

    data () {
      return {
        parameter: initialParameter(),
        chart: null
      }
    },

    methods: {
      setParameter () {
        this.parameter.title.text = this.title
        this.parameter.yAxis[0].title.text = 'Produt./ Realiz.'
        this.parameter.yAxis[1].title.text = 'Defeitos'

        this.parameter.xAxis.categories = this.dataSource.map(i => i.date)

        this.parameter.series = [
          {
            name: 'Produtividade',
            type: 'column',
            tooltip: { pointFormat: 'Produtividade: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.productivity)
          }, {
            name: 'Realizado',
            type: 'column',
            tooltip: { pointFormat: 'Realizado: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.realized)
          }, {
            name: 'Tot.Def.',
            type: 'spline',
            yAxis: 1,
            color: '#008000',
            tooltip: { pointFormat: 'Total Defeitos: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.qtyDefectsTotAcum)
          }, {
            name: 'Def.Amb.',
            type: 'spline',
            yAxis: 1,
            color: '#0000FF',
            tooltip: { pointFormat: 'Defeitos Ambiente: {point.y:.0f}<br>' },
            data: this.dataSource.map(i => i.qtyDefectsAmbAcum)
          }, {
            name: 'Def.Const.',
            yAxis: 1,
            type: 'spline',
            color: '#FF5733',
            tooltip: { pointFormat: 'Defeitos Construção: {point.y:.0f}' },
            data: this.dataSource.map(i => i.qtyDefectsConsAcum)
          }
        ]
      }
    },

    // updated () {
    //   this.setParameter()
    //   this.chart = Highcharts.chart(this.$el, this.parameter)
    // },

    watch: {
      'dataSource': {
        handler () {
          console.log('chartMixProductivityXDefects - dataSource - watch')
          this.setParameter()
          this.chart = Highcharts.chart(this.$el, this.parameter)
        }
      }
    }
  }
</script>

<template>
  <!--<div style="width:1000px; height:400px; margin:0 auto">-->
  <div style="width:450px; height:250px; margin:0 auto"/>
</template>

<style>
</style>
