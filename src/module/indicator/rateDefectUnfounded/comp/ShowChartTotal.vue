<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ShowChartTotal',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters('indicatorRateDefectUnfounded', ['total', 'limitMaxQty'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        this.chartParam.title.text = 'Total'
        this.chartParam.yAxis.title.text = 'Qte<br>Rej.'
        // this.chartParam.plotOptions.gauge.dataLabels.borderWidth = 0
        this.chartParam.plotOptions.gauge.dataLabels.useHTML = true
        this.chartParam.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.percUnfounded + '%</span>'

        if (this.total.qtyUnfounded < this.total.qtyDefect) {
          this.chartParam.yAxis.max = this.total.qtyDefect
          this.chartParam.yAxis.plotBands = [
            {from: 0, to: this.total.limitMaxQty, color: '#00CC00'},
            {from: this.total.limitMaxQty, to: this.total.qtyDefect, color: '#FF3300'}
          ]
        } else {
          this.chartParam.yAxis.max = this.total.qtyUnfounded
          this.chartParam.yAxis.plotBands = [
            {from: 0, to: this.total.limitMaxQty, color: '#00CC00'},
            {from: this.total.limitMaxQty, to: this.total.qtyUnfounded, color: '#FF3300'}
          ]
        }

        this.chartParam.tooltip.pointFormat = '' +
          'Improcente: ' + this.total.qtyUnfounded + ' (' + this.total.percUnfounded + '%)<br>' +
          'Limite Máximo: ' + this.total.limitMaxQty + ' (' + this.total.limitMaxPerc + '%)<br>' +
          'Defeito: ' + this.total.qtyDefect

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.qtyUnfounded ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{total}}
  </div>
</template>
