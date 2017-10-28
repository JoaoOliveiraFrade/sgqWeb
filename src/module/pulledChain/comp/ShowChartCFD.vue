<script>
  import { mapState } from 'vuex'
  import Highcharts from 'highcharts'
  // import chartStandParam from '@/comp/chart/types/timeline2'

  export default {
    name: 'ShowChartCFD',

    computed: {
      ...mapState('pulledChain', ['dataChartCFD', 'paramChartCFD'])
    },

    watch: {
      'dataChartCFD': {
        handler () {
          Highcharts.chart(this.$el, this.paramChartCFD)
        }
      }
    }
  }
</script>

<template> 
</template>

