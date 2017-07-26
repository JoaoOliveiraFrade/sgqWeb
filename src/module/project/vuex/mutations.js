import * as types from './mutationsTypes'

export default {
  [types.setProjectFilterTerm] (state, projectFilterTerm) {
    state.projectFilterTerm = projectFilterTerm
  },

  [types.setProjects] (state, projects) {
    state.projects = projects
  },

  [types.setProjectsByTestManufsAndSystems] (state, projectsByTestManufsAndSystems) {
    state.projectsByTestManufsAndSystems = projectsByTestManufsAndSystems
  },

  [types.projectsByTestManufsAndSystemsLoading] (state, value) {
    state.projectsByTestManufsAndSystemsLoading = value
  },

  [types.setSelectedProjects] (state, selectedProjects) {
    state.selectedProjects = selectedProjects
  },

  [types.setProject] (state, project) {
    state.project = project
  }
}
