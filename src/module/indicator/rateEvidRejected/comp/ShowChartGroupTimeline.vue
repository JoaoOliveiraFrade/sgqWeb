<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/timeline'

  export default {
    name: 'ShowChartGroupTimeline',

    data () {
      return {
        chartParam: chartStandParam()
      }
    },

    computed: {
      ...mapGetters('indicatorRateEvidRejected', ['groupTimeline'])
    },

    updated () {
      this.setChartParam()
      Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        // let _this = this
        this.chartParam.title.text = 'Temporal'
        this.chartParam.yAxis.title.text = 'Qte Rej.'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Rejeições Mês: {point.rejections:.0f} ({point.rejectionsPerc:.2f}%)<br>
          Rejeições Acum: {point.rejectionsAcc:.0f} ({point.rejectionsAccPerc:.2f}%)<br>
          Limite Máximo: {point.maxLimit:.0f} ({point.maxLimitPerc:.2f}%)<br>
          Total Evidências: {point.totalEvidences:.0f}
          `
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.chartParam.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        this.chartParam.colors = ['#FF3300', '#89A54E', '#4572A7']

        this.chartParam.series = [
          {
            name: 'Limite Máx',
            data: this.groupTimeline.map(i => (
              {
                name: i.date,
                y: i.maxLimit,
                rejections: i.rejections,
                monthYear: i.monthYear,
                rejectionsPerc: i.rejectionsPerc,
                rejectionsAcc: i.rejectionsAcc,
                rejectionsAccPerc: i.rejectionsAccPerc,
                totalEvidences: i.totalEvidences,
                maxLimit: i.maxLimit,
                maxLimitPerc: i.maxLimitPerc
              }
            ))
          },
          {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.date,
                y: i.rejections,
                monthYear: i.monthYear,
                rejections: i.rejections,
                rejectionsPerc: i.rejectionsPerc,
                rejectionsAcc: i.rejectionsAcc,
                rejectionsAccPerc: i.rejectionsAccPerc,
                totalEvidences: i.totalEvidences,
                maxLimit: i.maxLimit,
                maxLimitPerc: i.maxLimitPerc
              }
            ))
          },
          {
            name: 'Acumulado',
            data: this.groupTimeline.map(i => (
              {
                name: i.date,
                y: i.rejectionsAcc,
                monthYear: i.monthYear,
                rejections: i.rejections,
                rejectionsPerc: i.rejectionsPerc,
                rejectionsAcc: i.rejectionsAcc,
                rejectionsAccPerc: i.rejectionsAccPerc,
                totalEvidences: i.totalEvidences,
                maxLimit: i.maxLimit,
                maxLimitPerc: i.maxLimitPerc
              }
            ))
          }
        ]

        // this.chartParam.series[0].showInLegend = false
      }
    }
  }
  // evid: 1598, rej: 1310, pico: 405, pico perc: 25
</script>

<template> 
  <div style="width:300px; height:250px; margin:0 auto">
    {{groupTimeline}}
  </div>
</template>

