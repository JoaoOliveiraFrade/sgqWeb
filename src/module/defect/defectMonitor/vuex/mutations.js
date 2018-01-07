import * as types from './mutationsTypes'

export default {
  [types.selectedDefectQueue] (state, parameter) {
    state.selectedDefectQueue = parameter
  },

  [types.selectedDefectTrafficLight] (state, parameter) {
    state.selectedDefectTrafficLight = parameter
  },

  [types.selectedDefectStatus] (state, parameter) {
    state.selectedDefectStatus = parameter
  },

  [types.selectedProject] (state, parameter) {
    state.selectedProject = parameter
  }
}
