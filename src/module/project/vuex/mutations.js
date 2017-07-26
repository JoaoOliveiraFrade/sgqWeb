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

  [types.setProjectsByTestManufsAndSystemsLoading] (state, setProjectsByTestManufsAndSystemsLoading) {
    state.setProjectsByTestManufsAndSystemsLoading = setProjectsByTestManufsAndSystemsLoading
  },

  [types.setSelectedProjects] (state, selectedProjects) {
    state.selectedProjects = selectedProjects
  },

  [types.setProject] (state, project) {
    state.project = project
  }
}
