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
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.selectedDefect] (state, parameter) {
    state.selectedDefect = parameter
  },

  [types.status] (state, parameter) {
    state.status = parameter
  },

  [types.selectedDefectDetail] (state, parameter) {
    state.selectedDefectDetail = parameter
  },

  [types.selectedDefectTime] (state, parameter) {
    state.selectedDefectTime = parameter
  }
}
