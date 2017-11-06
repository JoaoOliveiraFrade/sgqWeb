import * as types from './mutationsTypes'

export default {
  [types.selectedTestManufs] (state, parameter) {
    state.selectedTestManufs = parameter
  },
  [types.selectedSystem] (state, parameter) {
    state.selectedSystem = parameter
  },
  [types.selectedProject] (state, parameter) {
    state.selectedProject = parameter
  }
}
