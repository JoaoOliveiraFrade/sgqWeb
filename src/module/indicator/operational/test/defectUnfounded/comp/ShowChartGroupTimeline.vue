<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/genComp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorDefectUnfounded', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Temporal'
        param.yAxis.title.text = 'Qte Rej.'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Improcedente Mês: {point.qtyUnfounded:.0f} ({point.percUnfounded:.2f}%)<br>
          Improcedente Acum: {point.qtyUnfoundedAcc:.0f} ({point.percUnfoundedAcc:.2f}%)<br>
          Limite Máximo: {point.limitMaxQty:.0f} ({point.limitMaxPerc:.0f}%)<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
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
                y: i.limitMaxQty,
                qtyUnfounded: i.qtyUnfounded,
                monthYear: i.monthYear,
                percUnfounded: i.percUnfounded,
                qtyUnfoundedAcc: i.qtyUnfoundedAcc,
                percUnfoundedAcc: i.percUnfoundedAcc,
                qtyTotalDefect: i.qtyTotalDefect,
                limitMaxQty: i.limitMaxQty,
                limitMaxPerc: i.limitMaxPerc
              }
            ))
          }, {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.qtyUnfounded,
                monthYear: i.monthYear,
                qtyUnfounded: i.qtyUnfounded,
                percUnfounded: i.percUnfounded,
                qtyUnfoundedAcc: i.qtyUnfoundedAcc,
                percUnfoundedAcc: i.percUnfoundedAcc,
                qtyTotalDefect: i.qtyTotalDefect,
                limitMaxQty: i.limitMaxQty,
                limitMaxPerc: i.limitMaxPerc
              }
            ))
          }, {
            name: 'Acumulado',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.qtyUnfoundedAcc,
                monthYear: i.monthYear,
                qtyUnfounded: i.qtyUnfounded,
                percUnfounded: i.percUnfounded,
                qtyUnfoundedAcc: i.qtyUnfoundedAcc,
                percUnfoundedAcc: i.percUnfoundedAcc,
                qtyTotalDefect: i.qtyTotalDefect,
                limitMaxQty: i.limitMaxQty,
                limitMaxPerc: i.limitMaxPerc
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

