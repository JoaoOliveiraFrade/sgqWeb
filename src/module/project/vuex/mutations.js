import * as types from './mutationsTypes'

export default {
  [types.projectFilterTerm] (state, data) {
    state.projectFilterTerm = data
  },

  [types.projects] (state, data) {
    state.projects = data
  },

  [types.projectsByTestManufsAndSystems] (state, data) {
    state.projectsByTestManufsAndSystems = data
  },

  [types.projectsByTestManufsAndSystemsLoading] (state, data) {
    state.projectsByTestManufsAndSystemsLoading = data
  },

  [types.selectedProjects] (state, data) {
    state.selectedProjects = data
  },

  [types.project] (state, data) {
    state.project = data
  },

  [types.projectConfirmed] (state, value) {
    state.projectConfirmed = value
  }
}
