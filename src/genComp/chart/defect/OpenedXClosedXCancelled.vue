<script>
  import chartParameters from '@/genComp/chart/types/pie'

  const Highcharts = require('highcharts')

  const highchartsMore = require('highcharts-more')
  highchartsMore(Highcharts)

  // const highcharts3d = require('highcharts-3d')
  // highcharts3d(Highcharts)

  // const highchartsExporting = require('highcharts-exporting')
  // highchartsExporting(Highcharts)

  const highchartsDrilldown = require('highcharts-drilldown')
  highchartsDrilldown(Highcharts)

  const highchartsNoData = require('highcharts-no-data-to-display')
  highchartsNoData(Highcharts)

  export default {
    name: 'chartOpenedXClosedXCancelled',

    props: {
      title: { type: String },
      defectStatus: { type: Array }
    },

    data () {
      return {
        parameters: chartParameters()
        // chart: undefined
      }
    },

    methods: {
      loadParameters () {
        this.parameters.title.text = this.title
        this.parameters.series = [
          {
            data: this.defectStatus.map(i => ({
              name: i.name,
              y: i.qtyDefects,
              totalDefects: i.totalDefects,
              percent: i.percent,
              sliced: true,
              style: { fontSize: 6, fontWeight: 'normal', color: '#6b6b47' }
            }))
          }
        ]

        this.parameters.tooltip.pointFormat = 'Qte Total: {point.totalDefects:.0f} <br>Qte : {point.y:.0f} <br>{point.percent:.2f}%:'

        this.parameters.plotOptions.pie.dataLabels.format = '{point.name} <br>{point.y:.0f} ({point.percent:.0f}%)'

        /*
        this.parameters.series = [
          {
            name: 'Planejado',
            tooltip: { pointFormat: 'Qte  CTs: {point.y:.0f}<br> Percentual: {point.percent:.2f}%' },
            data: this.dataSource.rows[0].valuesAcum.map(i => ({
              name: i.date,
              y: i.value,
              percent: i.percent
            }))
          }
        ]

        dadosPie: [{
          data: [
            { name: 'CANCELADO', y: 22, sliced: true, color: '#039' },
            { name: 'ABERTO', y: 3, sliced: true },
            { name: 'FECHADO', y: 108, sliced: true }
          ]
        }]
        */

        // this.parameters.series = this.defectStatus
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
    {{defectStatus}}
  </div>
</template>

<style>
</style>
