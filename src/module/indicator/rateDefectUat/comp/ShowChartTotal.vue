<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorRateDefectUat', ['chartTotalParam'])
    },

    mounted () {
      this.drawChart()
    },

    watch: {
      'chartTotalParam': {
        handler () {
          this.drawChart()
        }
      }
    },

    methods: {
      drawChart () {
        Highcharts.chart(this.$refs.idChart, this.chartTotalParam)
      }
    }
  }
</script>

<template>
  <div ref="idChart" style="width:250px; height:250px; margin:0 auto"/>
</template>
