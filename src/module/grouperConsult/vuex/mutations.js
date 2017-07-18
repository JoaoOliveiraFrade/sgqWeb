import * as types from './mutationsTypes'

export default {
  [types.setGroupers] (state, groupers) {
    state.groupers = groupers
  },

  [types.setFilterTerm] (state, filterTerm) {
    state.filterTerm = filterTerm
  },

  [types.setFilterProperties] (state, filterProperties) {
    state.filterProperties = filterProperties
  },

  [types.setGrouper] (state, grouper) {
    state.grouper = grouper
  },

  [types.setGrouperProjects] (state, grouperProjects) {
    state.grouperProjects = grouperProjects
  }
}
