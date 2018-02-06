import * as types from './mutationsTypes'

export default {
  [types.data] (state, data) {
    state.data = data
  },

  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.filterProperties] (state, data) {
    state.filterProperties = data
  },

  [types.selectedMonoselection] (state, data) {
    state.selectedMonoselection = data
  },

  [types.state] (state, parameter) {
    state.state = parameter
  },

  [types.grouperProjects] (state, data) {
    state.grouperProjects = data
  }
}
