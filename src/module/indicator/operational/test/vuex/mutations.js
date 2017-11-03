import * as types from './mutationsTypes'

export default {
  [types.selectedTestManufs] (state, parameter) {
    state.selectedTestManufs = parameter
  },
  [types.selectedSystems] (state, parameter) {
    state.selectedSystems = parameter
  },
  [types.selectedProjects] (state, parameter) {
    state.selectedProjects = parameter
  }
}
