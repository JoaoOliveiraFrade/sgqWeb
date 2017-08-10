import * as types from './mutationsTypes'
import services from '@/module/project/services'

export const loadProjects = ({ commit }, parameter) => {
  services.getProjectsByTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.projects, r.data)
      },
      e => console.log(e)
    )
}

export const loadProjectsByTestManufsAndSystems = ({ commit }, parameter) => {
  commit(types.projectsLoading, true)
  services.getProjectsByTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.projectsByTestManufsAndSystems, r.data)
        commit(types.projectsLoading, false)
      },
      e => {
        console.log(e)
        commit(types.projectsLoading, false)
      }
    )
}

export const setProjectFilterTerm = ({ commit }, filterTerm) => {
  commit(types.projectFilterTerm, filterTerm)
}
export const setSelectedProjects = ({ commit }, selectedProjects) => {
  commit(types.selectedProjects, selectedProjects)

  if (selectedProjects.length > 0) {
    commit(types.projectConfirmed, true)
  } else {
    commit(types.projectConfirmed, false)
  }
}
