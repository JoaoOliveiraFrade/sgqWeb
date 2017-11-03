<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indPerfDevDefectInsideSLA', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = '% Dentro SLA'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Dentro SLA Mês: {point.percWithinSLA:.2f}% ({point.qtyInsideSLA:.0f})<br>
          Dentro SLA Acum: {point.percWithinSLAAcc:.2f}% ({point.qtyInsideSLAAcc:.0f})<br>
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
                qtyInsideSLA: i.qtyInsideSLA,
                monthYear: i.monthYear,
                percWithinSLA: i.percWithinSLA,
                qtyInsideSLAAcc: i.qtyInsideSLAAcc,
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
                qtyInsideSLA: i.qtyInsideSLA,
                percWithinSLA: i.percWithinSLA,
                qtyInsideSLAAcc: i.qtyInsideSLAAcc,
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
                qtyInsideSLA: i.qtyInsideSLA,
                percWithinSLA: i.percWithinSLA,
                qtyInsideSLAAcc: i.qtyInsideSLAAcc,
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

