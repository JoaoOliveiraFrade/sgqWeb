import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.dataChartCFD] (state, parameter) {
    state.dataChartCFD = parameter
  },

  [types.paramChartCFD] (state) {
    state.paramChartCFD.xAxis.categories = state.dataChartCFD.map(i => i.date)
    state.paramChartCFD.series[0].data = state.dataChartCFD.map(i => i.backlogNotReady)
    state.paramChartCFD.series[1].data = state.dataChartCFD.map(i => i.backlogReady)
    state.paramChartCFD.series[2].data = state.dataChartCFD.map(i => i.onGoing)
    state.paramChartCFD.series[3].data = state.dataChartCFD.map(i => i.finished)
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.filteredByText] (state, parameter) {
    state.filteredByText = parameter
  },
  [types.filterTerm] (state, parameter) {
    state.filterTerm = parameter
  },
  [types.selected] (state, parameter) {
    state.selected = parameter
  },
  [types.update] (state, parameter) {
    state.selected.statusStrategyTestingAndContracting = parameter.statusStrategyTestingAndContracting
    state.selected.dtUpdateStrategyTestingAndContracting = parameter.dtUpdateStrategyTestingAndContracting
    state.selected.dtEndStrategyTestingAndContracting = parameter.dtEndStrategyTestingAndContracting

    state.selected.statusTimeline = parameter.statusTimeline
    state.selected.dtUpdateTimeline = parameter.dtUpdateTimeline
    state.selected.dtEndTimeline = parameter.dtEndTimeline

    state.selected.statusTestPlan = parameter.statusTestPlan
    state.selected.dtUpdateTestPlan = parameter.dtUpdateTestPlan
    state.selected.dtEndTestPlan = parameter.dtEndTestPlan

    state.selected.dtDeliveryTestPlan = parameter.dtDeliveryTestPlan
    state.selected.readyTestPlan = parameter.readyTestPlan
    state.selected.dtStartTestPlan = parameter.dtStartTestPlan
  }
}
