<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartTotalStandParam from '@/comp/chart/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorDefectInsideSLA', ['total']),

      // chartParam () {
      //   let param = chartTotalStandParam

      //   param.title.text = 'Total'
      //   param.yAxis.title.text = 'Dentro<br>SLA'
      //   // param.plotOptions.gauge.dataLabels.borderWidth = 0
      //   param.plotOptions.gauge.dataLabels.useHTML = true
      //   param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.percWithinSLA + '%</span>'

      //   if (this.total.qtyInsideSLA < this.total.qtyDefect) {
      //     param.yAxis.max = this.total.qtyDefect
      //     param.yAxis.plotBands = [
      //       {from: 0, to: this.total.limitMinQty, color: '#FF3300'},
      //       {from: this.total.limitMinQty, to: this.total.qtyDefect, color: '#00CC00'}
      //     ]
      //   } else {
      //     param.yAxis.max = this.total.qtyInsideSLA
      //     param.yAxis.plotBands = [
      //       {from: 0, to: this.total.limitMinQty, color: '#00CC00'},
      //       {from: this.total.limitMinQty, to: this.total.qtyInsideSLA, color: '#FF3300'}
      //     ]
      //   }

      //   param.tooltip.pointFormat = '' +
      //     'Dentro SLA: ' + this.total.qtyInsideSLA + ' (' + this.total.percWithinSLA + '%)<br>' +
      //     'Limite Mínimo: ' + this.total.limitMinQty + ' (' + this.total.limitMinPerc + '%)<br>' +
      //     'Defeito: ' + this.total.qtyDefect

      //   param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.qtyInsideSLA ] } ]
      //   return param
      // }

      chartParam () {
        let param = chartTotalStandParam

        param.title.text = 'Total'
        param.yAxis.title.text = '%<br>Dentro<br>SLA'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}%</center>' + this.total.qtyInsideSLA + '</span>'

        param.yAxis.max = 100
        param.yAxis.plotBands = [
          {from: 0, to: this.total.limitMinPerc, color: '#FF3300'},
          {from: this.total.limitMinPerc, to: 100, color: '#00CC00'}
        ]

        param.tooltip.pointFormat = '' +
          'Dentro SLA: ' + this.total.percWithinSLA + '% (' + this.total.qtyInsideSLA + ')<br>' +
          'Limite Mínimo: ' + this.total.limitMinPerc + '% (' + this.total.limitMinQty + ')<br>' +
          'Defeito: ' + this.total.qtyDefect

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.percWithinSLA ] } ]
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
