<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ShowChartTotalTI',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      // ...mapGetters(['rateEvidRejectedTotal'])
      ...mapGetters('indicatorRateEvidRejected', ['totalTI'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        let percRejections = this.totalTI.rejections / (this.totalTI.evidences ? this.totalTI.evidences : 1) * 100

        this.chartParam.title.text = 'Total'
        this.chartParam.yAxis.title.text = 'Qte<br>Rej.'
        this.chartParam.plotOptions.gauge.dataLabels.format = '{point.y:.0f}' + '<br>' + percRejections.toFixed(0) + '%'
        this.chartParam.yAxis.max = this.totalTI.evidences

        this.chartParam.yAxis.plotBands = [
          {from: 0, to: this.totalTI.rejections, color: '#FF3300'},
          {from: this.totalTI.rejections, to: this.totalTI.evidences, color: '#00CC00'}
        ]

        this.chartParam.tooltip.pointFormat = '' +
          'Evidências: ' + this.totalTI.evidences + '<br>' +
          'Rejeições : ' + this.totalTI.rejections + '(' + percRejections.toFixed(2) + '%)'

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.totalTI.rejections ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{totalTI}}
  </div>
</template>
