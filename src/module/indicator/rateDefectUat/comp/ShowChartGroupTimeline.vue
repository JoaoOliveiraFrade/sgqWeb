<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorRateDefectUat', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = 'Def. Uat'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Def. Uat Mês: {point.qtyDefectUat:.0f} ({point.percDefectUat:.2f}%)<br>
          Def. Uat Acum: {point.qtyDefectUatAcc:.0f} ({point.percDefectUatAcc:.2f}%)<br>
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
                qtyDefectUat: i.qtyDefectUat,
                monthYear: i.monthYear,
                percDefectUat: i.percDefectUat,
                qtyDefectUatAcc: i.qtyDefectUatAcc,
                percDefectUatAcc: i.percDefectUatAcc,
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
                y: i.qtyDefectUat,
                monthYear: i.monthYear,
                qtyDefectUat: i.qtyDefectUat,
                percDefectUat: i.percDefectUat,
                qtyDefectUatAcc: i.qtyDefectUatAcc,
                percDefectUatAcc: i.percDefectUatAcc,
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
                y: i.qtyDefectUatAcc,
                monthYear: i.monthYear,
                qtyDefectUat: i.qtyDefectUat,
                percDefectUat: i.percDefectUat,
                qtyDefectUatAcc: i.qtyDefectUatAcc,
                percDefectUatAcc: i.percDefectUatAcc,
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

