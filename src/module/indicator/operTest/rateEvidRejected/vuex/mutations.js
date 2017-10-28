import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },
  [types.dataTimeline] (state, parameter) {
    state.dataTimeline = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },
  [types.loadingTimeline] (state, parameter) {
    state.loadingTimeline = parameter
  },

  [types.selectedRejectionType] (state, parameter) {
    state.selectedRejectionType = parameter
  },

  [types.testManufSelected] (state, parameter) {
    state.testManufSelected = parameter
  },
  [types.systemSelected] (state, parameter) {
    state.systemSelected = parameter
  }
}
