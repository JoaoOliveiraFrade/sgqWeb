<script>
  import { mapState, mapActions } from 'vuex'
  import Highcharts from 'highcharts'
  // import chartStandParam from '@/module/chart/comp/types/timeline2'

  export default {
    name: 'ShowChartGroupTimeline',

    data () {
      return {
        chartParam: {}
      }
    },

    computed: {
      ...mapState('pulledChain', ['dataChartCFD', 'data']),
      ...mapState('pulledChain', ['dataChartCFD', 'paramChartCFD'])
    },

    methods: {
      ...mapActions('pulledChain', ['loadDataChartCFD']),

      drawChart () {
        Highcharts.chart(this.$el, this.paramChartCFD)
      }
    },

    watch: {
      'data': {
        handler () {
          this.loadDataChartCFD()
          this.drawChart()
        }
      },
      'paramChartCFD': {
        handler () {
          this.loadDataChartCFD()
          this.drawChart()
        }
      }
    },

    mounted () {
      this.loadDataChartCFD()
      this.drawChart()
    },

    updated () {
      this.loadDataChartCFD()
      this.drawChart()
    }

  }
</script>

<template> 
  <div id="sfdsfdsds">
    {{chartParam}}  
  </div>
</template>

