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
  }
}
