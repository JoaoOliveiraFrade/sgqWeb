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
      ...mapGetters('indicatorRateDefectUat', ['groupTimeline'])
    },

    updated () {
      this.setChartParam()
      Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        // let _this = this
        this.chartParam.title.text = 'Temporal'
        this.chartParam.yAxis.title.text = 'Def. Uat'

        this.chartParam.tooltip.headerFormat = ''
        this.chartParam.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Def. Uat Mês: {point.qtyDefectUat:.0f} ({point.percDefectUat:.2f}%)<br>
          Def. Uat Acum: {point.qtyDefectUatAcc:.0f} ({point.percDefectUatAcc:.2f}%)<br>
          Limite Máximo: {point.limitMaxQty:.0f} ({point.limitMaxPerc:.0f}%)<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
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
                name: i.date,
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
                name: i.date,
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

