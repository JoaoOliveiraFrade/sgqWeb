import * as types from './mutationsTypes'

export default {
  [types.selectedDevManufs] (state, parameter) {
    state.selectedDevManufs = parameter
  },
  [types.selectedSystems] (state, parameter) {
    state.selectedSystems = parameter
  },
  [types.selectedProjects] (state, parameter) {
    state.selectedProjects = parameter
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.chartSelectedDevManufs] (state, parameter) {
    state.chartSelectedDevManufs = parameter
  },
  [types.chartSelectedSystems] (state, parameter) {
    state.chartSelectedSystems = parameter
  }
}
