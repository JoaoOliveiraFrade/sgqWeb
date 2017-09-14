<script>
  import { mapActions, mapState } from 'vuex'
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
      ...mapState('pulledChain', ['dataChartCFD', 'paramChartCFD'])
    },

    methods: {
      ...mapActions('pulledChain', ['loadDataChartCFD']),

      drawChart () {
        Highcharts.chart(this.$el, this.paramChartCFD)
      }
    },

    watch: {
      'paramChartCFD': {
        handler () {
          this.drawChart()
        }
      }
    },

    mounted () {
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

