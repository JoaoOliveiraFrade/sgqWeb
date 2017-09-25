<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorRateDefectsWithinSLA', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = '% Dentro SLA'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Dentro SLA Mês: {point.percWithinSLA:.2f}% ({point.qtyWithinSLA:.0f})<br>
          Dentro SLA Acum: {point.percWithinSLAAcc:.2f}% ({point.qtyWithinSLAAcc:.0f})<br>
          Limite Mínimo: {point.limitMinQty:.0f} ({point.limitMinPerc:.0f}%)<br>
          Total Defeito: {point.qtyTotalDefect:.0f}
          `
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        param.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        param.colors = ['#FF3300', '#89A54E', '#4572A7']

        param.series = [
          {
            name: 'Limite Mínimo',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.limitMinPerc,
                qtyWithinSLA: i.qtyWithinSLA,
                monthYear: i.monthYear,
                percWithinSLA: i.percWithinSLA,
                qtyWithinSLAAcc: i.qtyWithinSLAAcc,
                percWithinSLAAcc: i.percWithinSLAAcc,
                qtyTotalDefect: i.qtyTotalDefect,
                limitMinQty: i.limitMinQty,
                limitMinPerc: i.limitMinPerc
              }
            ))
          }, {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.percWithinSLA,
                monthYear: i.monthYear,
                qtyWithinSLA: i.qtyWithinSLA,
                percWithinSLA: i.percWithinSLA,
                qtyWithinSLAAcc: i.qtyWithinSLAAcc,
                percWithinSLAAcc: i.percWithinSLAAcc,
                qtyTotalDefect: i.qtyTotalDefect,
                limitMinQty: i.limitMinQty,
                limitMinPerc: i.limitMinPerc
              }
            ))
          }, {
            name: 'Acumulado',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.percWithinSLAAcc,
                monthYear: i.monthYear,
                qtyWithinSLA: i.qtyWithinSLA,
                percWithinSLA: i.percWithinSLA,
                qtyWithinSLAAcc: i.qtyWithinSLAAcc,
                percWithinSLAAcc: i.percWithinSLAAcc,
                qtyTotalDefect: i.qtyTotalDefect,
                limitMinQty: i.limitMinQty,
                limitMinPerc: i.limitMinPerc
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

