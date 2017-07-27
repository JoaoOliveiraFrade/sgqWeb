import * as types from './mutationsTypes'

export default {
  [types.groupers] (state, data) {
    state.groupers = data
  },

  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.filterProperties] (state, data) {
    state.filterProperties = data
  },

  [types.grouper] (state, data) {
    state.grouper = data
  },

  [types.grouperProjects] (state, data) {
    state.grouperProjects = data
  }
}
