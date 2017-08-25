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
      ...mapGetters('indicatorRateEvidRejected', ['total', 'maxRejectionAmount'])
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
        this.chartParam.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.percRejections + '%</span>'

        if (this.total.qtyRejections < this.total.qtyEvidences) {
          this.chartParam.yAxis.max = this.total.qtyEvidences
          this.chartParam.yAxis.plotBands = [
            {from: 0, to: this.total.maxRejectionAmount, color: '#00CC00'},
            {from: this.total.maxRejectionAmount, to: this.total.qtyEvidences, color: '#FF3300'}
          ]
        } else {
          this.chartParam.yAxis.max = this.total.qtyRejections
          this.chartParam.yAxis.plotBands = [
            {from: 0, to: this.total.maxRejectionAmount, color: '#00CC00'},
            {from: this.total.maxRejectionAmount, to: this.total.qtyRejections, color: '#FF3300'}
          ]
        }

        this.chartParam.tooltip.pointFormat = '' +
          'Rejeições: ' + this.total.qtyRejections + ' (' + this.total.percRejections + '%)<br>' +
          'Evidências: ' + this.total.qtyEvidences + '<br>' +
          'Percentual Máximo: ' + this.total.maxRejectionPercentage + '<br>' +
          'Quantidade Máxima: ' + this.total.maxRejectionAmount

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.qtyRejections ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{total}}
  </div>
</template>
