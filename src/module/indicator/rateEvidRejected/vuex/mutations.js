import * as types from './mutationsTypes'

export default {
  [types.rateEvidRejected] (state, data) {
    state.rateEvidRejected = data
  },
  [types.rateEvidRejectedLoading] (state, data) {
    state.rateEvidRejectedLoading = data
  },
  [types.selectedRejectionType] (state, data) {
    state.selectedRejectionType = data
  },

  [types.rateEvidRejectedChartTestManufSelected] (state, data) {
    state.rateEvidRejectedChartTestManufSelected = data
  },
  [types.rateEvidRejectedChartSystemSelected] (state, data) {
    state.rateEvidRejectedChartSystemSelected = data
  }
}
