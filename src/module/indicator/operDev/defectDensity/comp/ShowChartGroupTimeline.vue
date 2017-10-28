<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorDevDefectDensity', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = '% Defeito'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Densidade: {point.density:.2f}%<br>
          Defeitos: {point.qtyDefect:.0f}<br>
          CTs: {point.qtyCt:.0f}<br>
          Densidade Aceitável: {point.limitAcceptablePerc:.0f}%<br>
          Densidade Moderada: {point.limitModeratePerc:.0f}%<br>
          Densidade Alta: {point.limitHigh:.0f}%
          `
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        param.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        // param.colors = ['#FF3300', '#89A54E', '#4572A7']
        // param.colors = ['#32CD32', '#FF8C00', '#FF0000', '#4682B4']
        param.colors = ['#00CC00', '#FFFF0D', '#FF9E0D', '#4682B4']

        param.series = [
          {
            name: 'Aceitável',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.limitAcceptablePerc,
                limitAcceptablePerc: i.limitAcceptablePerc,
                limitModeratePerc: i.limitModeratePerc,
                limitHigh: i.limitHigh,
                monthYear: i.monthYear,
                density: i.density,
                qtyDefect: i.qtyDefect,
                qtyCt: i.qtyCt
              }
            ))
          }, {
            name: 'Moderada',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.limitModeratePerc,
                limitAcceptablePerc: i.limitAcceptablePerc,
                limitModeratePerc: i.limitModeratePerc,
                limitHigh: i.limitHigh,
                monthYear: i.monthYear,
                density: i.density,
                qtyDefect: i.qtyDefect,
                qtyCt: i.qtyCt
              }
            ))
          }, {
            name: 'Alta',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.limitHigh,
                limitAcceptablePerc: i.limitAcceptablePerc,
                limitModeratePerc: i.limitModeratePerc,
                limitHigh: i.limitHigh,
                monthYear: i.monthYear,
                density: i.density,
                qtyDefect: i.qtyDefect,
                qtyCt: i.qtyCt
              }
            ))
          }, {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.density,
                limitAcceptablePerc: i.limitAcceptablePerc,
                limitModeratePerc: i.limitModeratePerc,
                limitHigh: i.limitHigh,
                monthYear: i.monthYear,
                density: i.density,
                qtyDefect: i.qtyDefect,
                qtyCt: i.qtyCt
              }
            ))
          }
        ]
        return param
      }
    },

    methods: {
      drawChart () {
        Highcharts.chart(this.$el, this.chartParam)
      }
    },

    mounted () {
      this.drawChart()
    },

    updated () {
      this.drawChart()
    }
  }
</script>

<template> 
  <div style="width:300px; height:250px; margin:0 auto">
    {{groupTimeline}}
  </div>
</template>

