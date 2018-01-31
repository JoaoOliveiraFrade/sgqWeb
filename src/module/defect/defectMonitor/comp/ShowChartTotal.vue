<script>
  import { mapGetters, mapState } from 'vuex'
  import Highcharts from 'highcharts'
  import chartTotalStandParam from '@/genComp/chart/types/Total2'

  export default {
    name: 'ShowChartTotal',

    computed: {
      ...mapGetters('indicatorTestDefectAverangeRetestTime', ['total']),
      ...mapState('indicatorTestDefectAverangeRetestTime', ['limitMaxQtyHours']),

      chartParam () {
        let param = chartTotalStandParam

        param.title.text = 'Total'
        param.yAxis.title.text = 'Média<br>Horas'
        // param.plotOptions.gauge.dataLabels.borderWidth = 0
        param.plotOptions.gauge.dataLabels.useHTML = true
        param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + this.total.defectAverangeRetestTime + '%</span>'

        if (this.total.defectAverangeRetestTime > this.limitMaxQtyHours) {
          param.yAxis.max = this.total.defectAverangeRetestTime
          param.yAxis.plotBands = [
            {from: 0, to: this.limitMaxQtyHours, color: '#00CC00'},
            {from: this.limitMaxQtyHours, to: this.total.defectAverangeRetestTime, color: '#FF3300'}
          ]
        } else {
          param.yAxis.max = this.total.limitMaxQtyHours
          param.yAxis.plotBands = [
            {from: 0, to: this.limitMaxQtyHours, color: '#00CC00'}
          ]
        }

        param.tooltip.pointFormat = `
          Tempo Médio (h): ${this.total.defectAverangeRetestTime}<br>
          Defeito: ${this.total.qtyDefect}<br>
          Horas Reteste: ${this.total.qtyRetestHours}<br>
          Limite Máximo (h): ${this.limitMaxQtyHours}
          `
        param.series = [ { name: 'Total', colorByPoint: true, data: [ this.total.defectAverangeRetestTime ] } ]
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
  <div style="width:250px; height:250px; margin:0 auto">
    {{total}}
  </div>
</template>
