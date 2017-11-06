import * as types from './mutationsTypes'

export default {
  [types.selectedDevManuf] (state, parameter) {
    state.selectedDevManuf = parameter
  },
  [types.selectedSystem] (state, parameter) {
    state.selectedSystem = parameter
  },
  [types.selectedProject] (state, parameter) {
    state.selectedProject = parameter
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.chartSelectedDevManuf] (state, parameter) {
    state.chartSelectedDevManuf = parameter
  },
  [types.chartSelectedSystem] (state, parameter) {
    state.chartSelectedSystem = parameter
  }
}
