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
      ...mapGetters(['produtivityGroupTimeline'])
    },

    updated () {
      this.setChartParam()
      Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        // let _this = this
        this.chartParam.title.text = 'Temporal'
        this.chartParam.yAxis.title.text = 'Qte Exec.'
        this.chartParam.tooltip.pointFormat = '{point.y:.0f}'
        this.chartParam.plotOptions.bar.dataLabels.format = '{point.y:.0f}'
        this.chartParam.xAxis.categories = this.produtivityGroupTimeline.map(i => i.monthYear)
        this.chartParam.series = [
          { name: 'Real', data: this.produtivityGroupTimeline.map(i => i.productivity) }
        ]
        this.chartParam.series[0].showInLegend = false
      }
    }
  }
</script>

<template> 
  <div style="width:300px; height:250px; margin:0 auto">
    {{produtivityGroupTimeline}}
  </div>
</template>

