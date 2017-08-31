<script>
  import { mapState, mapActions } from 'vuex'

  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufRateDefectUat',

    computed: {
      ...mapState('indicatorRateDefectUat', ['chartGroupTestManufParam'])
    },

    mounted () {
      // param.plotOptions.bar.events = {
      //   click: function (event) {
      //     self.setChartFilter(event.point.name.toUpperCase())
      //     self.chart.setTitle({text: self.chartTitle})
      //   }
      // }
      this.setChartGroupTestManufParam()
      this.drawChart()
    },

    watch: {
      'chartGroupTestManufParam': {
        handler () {
          this.setChartGroupTestManufParam()
          this.drawChart()
        }
      }
    },

    methods: {
      ...mapActions('indicatorRateDefectUat', ['setChartFilter', 'setChartGroupTestManufParam']),

      drawChart () {
        Highcharts.chart(this.$refs.idChart, this.chartGroupTestManufParam)
      }
    }
  }
</script>

<template> 
  <div ref="idChart" style="width:250px; height:350px; margin:0 auto"/>
</template>

