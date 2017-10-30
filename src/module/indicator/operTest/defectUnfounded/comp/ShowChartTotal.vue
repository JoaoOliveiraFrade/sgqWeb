<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorDefectUnfounded', ['total', 'limitMaxQty']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Total'
        param.yAxis.title.text = 'Qte<br>Rej.'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.percUnfounded + '%</span>'

        if (this.total.qtyUnfounded < this.total.qtyDefect) {
          param.yAxis.max = this.total.qtyDefect
          param.yAxis.plotBands = [
            {from: 0, to: this.total.limitMaxQty, color: '#00CC00'},
            {from: this.total.limitMaxQty, to: this.total.qtyDefect, color: '#FF3300'}
          ]
        } else {
          param.yAxis.max = this.total.qtyUnfounded
          param.yAxis.plotBands = [
            {from: 0, to: this.total.limitMaxQty, color: '#00CC00'},
            {from: this.total.limitMaxQty, to: this.total.qtyUnfounded, color: '#FF3300'}
          ]
        }

        param.tooltip.pointFormat = '' +
          'Improcente: ' + this.total.qtyUnfounded + ' (' + this.total.percUnfounded + '%)<br>' +
          'Limite Máximo: ' + this.total.limitMaxQty + ' (' + this.total.limitMaxPerc + '%)<br>' +
          'Defeito: ' + this.total.qtyDefect

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.qtyUnfounded ] } ]
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
