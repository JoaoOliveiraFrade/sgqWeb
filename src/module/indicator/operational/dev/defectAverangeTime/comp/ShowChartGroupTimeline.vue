<script>
  import { mapGetters, mapState } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/genComp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indOperDevDefectAverangeTime', ['groupTimeline']),
      ...mapState('indOperDevDefectAverangeTime', ['acceptableLimit']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = '% Defeito'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          Tempo Médio: {point.averangeHour:.2f} (h)<br>
          Qte Horas: {point.qtyHour:.0f}<br>
          Qte Defeitos: {point.qtyDefect:.0f}<br>
          Limite Máx. Aceitável: {point.acceptableLimit:.0f}%
          `
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        param.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        param.colors = ['#FF3300', '#4682B4']

        param.series = [
          {
            name: 'Limite Máx. Aceitável',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: this.acceptableLimit,
                acceptableLimit: this.acceptableLimit,
                monthYear: i.monthYear,
                averangeHour: i.averangeHour,
                qtyHour: i.qtyHour,
                qtyDefect: i.qtyDefect
              }
            ))
          }, {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.averangeHour,
                acceptableLimit: this.acceptableLimit,
                monthYear: i.monthYear,
                averangeHour: i.averangeHour,
                qtyHour: i.qtyHour,
                qtyDefect: i.qtyDefect
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

