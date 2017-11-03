<script>
  import { mapGetters, mapState } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indPerfDevDefectOfTSInTIAgent', ['groupTimeline']),
      ...mapState('indPerfDevDefectOfTSInTIAgent', ['acceptableLimit']),

      chartParam () {
        let param = chartStandParam

        param.title.text = 'Temporal'
        param.yAxis.title.text = '% Defeito'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          % Detectável em TS: {point.percOfTSInTI:.2f}%<br>
          Qte Detectável em TS: {point.qtyOfTSInTI:.0f}<br>
          Qte Total Defeito: {point.qtyDefect:.0f}<br>
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
                percOfTSInTI: i.percOfTSInTI,
                qtyOfTSInTI: i.qtyOfTSInTI,
                qtyDefect: i.qtyDefect
              }
            ))
          }, {
            name: 'Mês',
            data: this.groupTimeline.map(i => (
              {
                name: i.monthYear,
                y: i.percOfTSInTI,
                acceptableLimit: this.acceptableLimit,
                monthYear: i.monthYear,
                percOfTSInTI: i.percOfTSInTI,
                qtyOfTSInTI: i.qtyOfTSInTI,
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

