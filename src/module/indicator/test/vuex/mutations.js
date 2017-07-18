import * as types from './mutationsTypes'

export default {
  [types.indicatorOfTestIsShow] (state, value) {
    state.indicatorOfTestIsShow = value
  },

  [types.produtivityIndAllFiltered] (state, value) {
    state.produtivityIndAllFiltered = value
  },

  [types.produtivityIndChartTestManufSelected] (state, value) {
    state.produtivityIndChartTestManufSelected = value
  },

  [types.produtivityIndChartSystemSelected] (state, value) {
    state.produtivityIndChartSystemSelected = value
  },

  [types.rateRejectionEvidenceIndAllFiltered] (state, value) {
    state.rateRejectionEvidenceIndAllFiltered = value
  }
}
