<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/comp/chart/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    computed: {
      ...mapGetters('indicatorProductivity', ['groupTimeline']),

      chartParam () {
        let param = chartStandParam
        param.title.text = 'Temporal'
        param.yAxis.title.text = 'Qte Exec.'

        param.tooltip.headerFormat = ''
        param.tooltip.pointFormat = `
          <b>{point.monthYear}</b><br>
          {point.y:.0f}
          `
        // param.tooltip.pointFormat = '{point.y:.0f}'
        param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        param.xAxis.categories = this.groupTimeline.map(i => i.monthYear)

        param.series = [
          {
            name: 'Real',
            data: this.groupTimeline.map(i => (
              {
                y: i.productivity,
                monthYear: i.monthYear
              }
            ))
          }
        ]

        param.series[0].showInLegend = false

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

