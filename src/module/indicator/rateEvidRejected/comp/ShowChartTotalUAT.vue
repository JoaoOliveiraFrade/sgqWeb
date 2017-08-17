<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ShowChartTotalUAT',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      // ...mapGetters(['rateEvidRejectedTotal'])
      ...mapGetters('indicatorRateEvidRejected', ['totalUAT'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        let percRejections = this.totalUAT.rejections / (this.totalUAT.evidences ? this.totalUAT.evidences : 1) * 100

        this.chartParam.title.text = 'Total'
        this.chartParam.yAxis.title.text = 'Qte<br>Rej.'
        this.chartParam.plotOptions.gauge.dataLabels.format = '{point.y:.0f}' + '<br>' + percRejections.toFixed(0) + '%'
        this.chartParam.yAxis.max = this.totalUAT.evidences

        this.chartParam.yAxis.plotBands = [
          {from: 0, to: this.totalUAT.rejections, color: '#FF3300'},
          {from: this.totalUAT.rejections, to: this.totalUAT.evidences, color: '#00CC00'}
        ]

        this.chartParam.tooltip.pointFormat = '' +
          'Evidências: ' + this.totalUAT.evidences + '<br>' +
          'Rejeições : ' + this.totalUAT.rejections + '(' + percRejections.toFixed(2) + '%)'

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.totalUAT.rejections ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{totalUAT}}
  </div>
</template>
