<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartTotalStandParam from '@/module/chart/comp/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorRateDefectUat', ['total']),

      chartParam () {
        let param = chartTotalStandParam

        param.title.text = 'Total'
        param.yAxis.title.text = 'Def.<br>Uat'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.percDefectUat + '%</span>'

        if (this.total.qtyDefectUat < this.total.qtyDefect) {
          param.yAxis.max = this.total.qtyDefect
          param.yAxis.plotBands = [
            {from: 0, to: this.total.limitMaxQty, color: '#00CC00'},
            {from: this.total.limitMaxQty, to: this.total.qtyDefect, color: '#FF3300'}
          ]
        } else {
          param.yAxis.max = this.total.qtyDefectUat
          param.yAxis.plotBands = [
            {from: 0, to: this.total.limitMaxQty, color: '#00CC00'},
            {from: this.total.limitMaxQty, to: this.total.qtyDefectUat, color: '#FF3300'}
          ]
        }

        param.tooltip.pointFormat = '' +
          'Def. Uat: ' + this.total.qtyDefectUat + ' (' + this.total.percDefectUat + '%)<br>' +
          'Limite Máximo: ' + this.total.limitMaxQty + ' (' + this.total.limitMaxPerc + '%)<br>' +
          'Defeito: ' + this.total.qtyDefect

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.qtyDefectUat ] } ]
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
