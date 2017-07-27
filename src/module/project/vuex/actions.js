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
  commit(types.projectsByTestManufsAndSystemsLoading, true)
  services.getProjectsByTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.projectsByTestManufsAndSystems, r.data)
        commit(types.projectsByTestManufsAndSystemsLoading, false)
      },
      e => {
        console.log(e)
        commit(types.projectsByTestManufsAndSystemsLoading, false)
      }
    )
}

export const setProjectFilterTerm = ({ commit }, filterTerm) => {
  commit(types.projectFilterTerm, filterTerm)
}
export const setSelectedProjects = ({ commit, dispatch }, selectedProjects) => {
  commit(types.selectedProjects, selectedProjects)

  if (selectedProjects.length > 0) {
    dispatch('setIndicatorOfTestIsShow', true)
  }
}
