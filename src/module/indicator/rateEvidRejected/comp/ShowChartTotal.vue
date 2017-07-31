<script>
  import { mapGetters } from 'vuex'
  import Highcharts from 'highcharts'
  import chartStandParam from '@/module/chart/comp/types/Total'

  export default {
    name: 'ShowChartTotal',

    data () {
      return {
        chartParam: chartStandParam(),
        chart: undefined
      }
    },

    computed: {
      ...mapGetters(['rateEvidRejectedTotal'])
    },

    updated () {
      console.log(this.rateEvidRejectedTotal)
      this.setChartParam()
      this.chart = Highcharts.chart(this.$el, this.chartParam)
    },

    methods: {
      setChartParam () {
        this.chartParam.title.text = 'Total'
        this.chartParam.yAxis.title.text = 'Qte<br>CTs.'
        this.chartParam.plotOptions.gauge.dataLabels.format = '{point.y:.0f}'
        this.chartParam.yAxis.max = this.rateEvidRejectedTotal.totalEvidences

        this.chartParam.yAxis.plotBands = [
          {from: 0, to: this.rateEvidRejectedTotal.totalRejections, color: '#FF3300'},
          {from: this.rateEvidRejectedTotal.totalRejections, to: this.rateEvidRejectedTotal.totalEvidences, color: '#00CC00'}
        ]

        // this.parameters.yAxis.plotBands = [
        //   {from: 0, to: 10, color: '#00CC00'},
        //   {from: 10, to: 20, color: '#FFFF0D'},
        //   {from: 20, to: 30, color: '#FF9E0D'},
        //   {from: 30, to: this.parameters.yAxis.max, color: '#FF3300'}
        // ]

        this.chartParam.tooltip.pointFormat = '' +
          'TI<br>' +
          ' -Evidências: ' + this.rateEvidRejectedTotal.tiEvidences + '<br>' +
          ' -Rejeições : ' + this.rateEvidRejectedTotal.tiRejections + '<br>' +
          'UAT<br>' +
          ' -Evidências: ' + this.rateEvidRejectedTotal.uatEvidences + '<br>' +
          ' -Rejeições : ' + this.rateEvidRejectedTotal.uatRejections + '<br>' +
          'Total<br>' +
          ' -Evidências: ' + this.rateEvidRejectedTotal.totalEvidences + '<br>' +
          ' -Rejeições : ' + this.rateEvidRejectedTotal.totalRejections

        this.chartParam.series = [ { name: 'Total', colorByPoint: true, data: [ this.rateEvidRejectedTotal.totalRejections ] } ]
      }
    }
  }
</script>

<template>
  <div style="width:250px; height:250px; margin:0 auto">
    {{rateEvidRejectedTotal}}
  </div>
</template>
