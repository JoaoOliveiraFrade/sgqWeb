<script>
  import { mapGetters, mapState } from 'vuex'
  import Highcharts from 'highcharts'
  import chartTotalStandParam from '@/comp/chart/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indOperDevDefectAverangeTime', ['total']),
      ...mapState('indOperDevDefectAverangeTime', ['acceptableLimit', 'limitModeratePerc', 'limitHigh']),

      chartParam () {
        let param = chartTotalStandParam

        param.title.text = 'Total'
        param.yAxis.title.text = 'Tempo<br>Médio (h)'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        // param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}%</center>' + this.total.qtyHour + '/' + this.total.qtyDefect + '</span>'
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:11px><center>{point.y:.0f}</center></span>'

        param.yAxis.max = this.total.averangeHour
        param.yAxis.plotBands = [
          {from: 0, to: this.acceptableLimit, color: '#32CD32'},
          // {from: this.acceptableLimit, to: this.limitModeratePerc, color: '#FF8C00'},
          // {from: this.limitModeratePerc, to: 100, color: '#FF4C4C'},
          {from: this.acceptableLimit, to: this.total.averangeHour, color: '#FF3300'}
        ]

        param.tooltip.pointFormat = '' +
          'Tempo Médio: ' + this.total.averangeHour + '(h)<br>' +
          'Qte Horas: ' + this.total.qtyHour + '<br>' +
          'Qte Defeitos: ' + this.total.qtyDefect

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.averangeHour ] } ]
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
