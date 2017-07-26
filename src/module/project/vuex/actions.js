import * as types from './mutationsTypes'
import services from '@/module/project/services'

export const loadProjects = ({ commit }, parameter) => {
  services.getProjectsByTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.setProjects, r.data)
      },
      e => console.log(e)
    )
}

export const loadProjectsByTestManufsAndSystems = ({ commit }, parameter) => {
  commit(types.setProjectsByTestManufsAndSystemsLoading, true)
  services.getProjectsByTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.setProjectsByTestManufsAndSystems, r.data)
        commit(types.setProjectsByTestManufsAndSystemsLoading, false)
      },
      e => {
        console.log(e)
        commit(types.setProjectsByTestManufsAndSystemsLoading, false)
      }
    )
}

export const setProjectFilterTerm = ({ commit }, filterTerm) => {
  commit(types.setProjectFilterTerm, filterTerm)
}
export const setSelectedProjects = ({ commit, dispatch }, selectedProjects) => {
  commit(types.setSelectedProjects, selectedProjects)

  if (selectedProjects.length > 0) {
    dispatch('setIndicatorOfTestIsShow', true)
  }
}
