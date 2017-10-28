<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorRateEvidRejected', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Temporal'
        param.yAxis.title.text = 'Qte Rej.'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Rejeições Mês: {point.rejections:.0f} ({point.rejectionsPerc:.2f}%)<br>
          Rejeições Acum: {point.rejectionsAcc:.0f} ({point.rejectionsAccPerc:.2f}%)<br>
          Limite Máximo: {point.maxLimit:.0f} ({point.maxLimitPerc:.2f}%)<br>
          Total Evidências: {point.totalEvidences:.0f}
          `
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        param.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        param.colors = ['#FF3300', '#89A54E', '#4572A7']

        param.series = [
          {
            name: 'Limite Máx',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
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
                name: i.monthYear,
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
                name: i.monthYear,
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
  <div style="width:300px; height:250px; margin:0 auto">
    {{groupTimeline}}
  </div>
</template>

