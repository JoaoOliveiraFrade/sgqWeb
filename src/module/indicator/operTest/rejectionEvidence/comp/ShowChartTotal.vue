<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorRejectionEvidence', ['total', 'maxRejectionAmount']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Total'
        param.yAxis.title.text = 'Qte<br>Rej.'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.percRejections + '%</span>'

        if (this.total.qtyRejections < this.total.qtyEvidences) {
          param.yAxis.max = this.total.qtyEvidences
          param.yAxis.plotBands = [
            {from: 0, to: this.total.maxRejectionAmount, color: '#00CC00'},
            {from: this.total.maxRejectionAmount, to: this.total.qtyEvidences, color: '#FF3300'}
          ]
        } else {
          param.yAxis.max = this.total.qtyRejections
          param.yAxis.plotBands = [
            {from: 0, to: this.total.maxRejectionAmount, color: '#00CC00'},
            {from: this.total.maxRejectionAmount, to: this.total.qtyRejections, color: '#FF3300'}
          ]
        }

        param.tooltip.pointFormat = '' +
          'Rejeições: ' + this.total.qtyRejections + ' (' + this.total.percRejections + '%)<br>' +
          'Evidências: ' + this.total.qtyEvidences + '<br>' +
          'Percentual Máximo: ' + this.total.maxRejectionPercentage + '<br>' +
          'Quantidade Máxima: ' + this.total.maxRejectionAmount

        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.qtyRejections ] } ]
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
