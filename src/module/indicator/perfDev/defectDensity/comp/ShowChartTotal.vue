<script>
  import { mapGetters, mapState } from 'vuex'
  import Highcharts from 'highcharts'
  import chartTotalStandParam from '@/comp/chart/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorPerfDevDefectDensity', ['total']),
      ...mapState('indicatorPerfDevDefectDensity', ['limitAcceptablePerc', 'limitModeratePerc', 'limitHigh']),

      chartParam () {
        let param = chartTotalStandParam

        param.title.text = 'Total'
        param.yAxis.title.text = '%<br>Defeito'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        // param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}%</center>' + this.total.qtyDefect + '/' + this.total.qtyCt + '</span>'
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:11px><center>{point.y:.0f}%</center></span>'

        param.yAxis.max = 100
        param.yAxis.plotBands = [
          {from: 0, to: this.limitAcceptablePerc, color: '#00CC00'},
          {from: this.limitAcceptablePerc, to: this.limitModeratePerc, color: '#FFFF0D'},
          {from: this.limitModeratePerc, to: 100, color: '#FF9E0D'},
          {from: this.limitHigh, to: 100, color: '#FF3300'}
        ]

        param.tooltip.pointFormat = '' +
          'Densidade: ' + this.total.density + '%<br>' +
          'Defeito: ' + this.total.qtyDefect + '<br>' +
          'CTs: ' + this.total.qtyCt

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.density ] } ]
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
  <div style="width:250px; height:250px; margin:0 auto">
    {{total}}
  </div>
</template>
