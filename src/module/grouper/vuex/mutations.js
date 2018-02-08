import * as types from './mutationsTypes'

export default {
  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.filterProperties] (state, data) {
    state.filterProperties = data
  },

  [types.data] (state, data) {
    state.data = data
  },

  [types.selected] (state, data) {
    state.selected = data
  },

  [types.grouperProjects] (state, data) {
    state.grouperProjects = data
  }
}
