<script>
  import { mapGetters, mapActions } from 'vuex'

  import Highcharts from 'highcharts'
  import HighchartsDrilldown from 'highcharts-drilldown'
  if (!Highcharts.Chart.prototype.addSeriesAsDrilldown) {
    HighchartsDrilldown(Highcharts)
  }

  export default {
    name: 'ShowChartGroupTestManufRateDefectUat',

    computed: {
      ...mapGetters('indicatorRateDefectUat', ['chartGroupTestManufParam'])
    },

    mounted () {
      this.drawChart()
    },

    watch: {
      'chartGroupTestManufParam': {
        handler () {
          this.drawChart()
        }
      }
    },

    methods: {
      ...mapActions('indicatorRateDefectUat', ['setChartFilter']),
      drawChart () {
        Highcharts.chart(this.$refs.idChart, this.chartGroupTestManufParam)
      }
    }
  }
</script>

<template> 
  <div ref="idChart" style="width:250px; height:350px; margin:0 auto"/>
</template>

