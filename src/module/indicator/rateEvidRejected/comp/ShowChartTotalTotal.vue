<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ShowChartTotalTotal',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      // ...mapGetters(['rateEvidRejectedTotal'])
      ...mapGetters('indicatorRateEvidRejected', ['totalTotal'])
    },

    updated () {
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        let percRejections = this.totalTotal.rejections / (this.totalTotal.evidences ? this.totalTotal.evidences : 1) * 100

        this.chartParam.title.text = 'Total'
        this.chartParam.yAxis.title.text = 'Qte<br>Rej.'
        this.chartParam.plotOptions.gauge.dataLabels.format = '{point.y:.0f}' + '<br>' + percRejections.toFixed(0) + '%'
        this.chartParam.yAxis.max = this.totalTotal.evidences

        this.chartParam.yAxis.plotBands = [
          {from: 0, to: this.totalTotal.rejections, color: '#FF3300'},
          {from: this.totalTotal.rejections, to: this.totalTotal.evidences, color: '#00CC00'}
        ]

        this.chartParam.tooltip.pointFormat = '' +
          'Evidências: ' + this.totalTotal.evidences + '<br>' +
          'Rejeições : ' + this.totalTotal.rejections + '(' + percRejections.toFixed(2) + '%)'

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.totalTotal.rejections ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{totalTotal}}
  </div>
</template>
