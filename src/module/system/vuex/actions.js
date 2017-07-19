import * as types from './mutationsTypes'
import services from '@/module/system/services'

export const loadSystems = ({ commit }, selectedTestManuf) => {
  services.getAll()
    .then(
      r => {
        commit(types.setSystems, r.data)
      },
      e => console.log(e)
    )
  // services.getSystemsByTestManuf(selectedTestManuf)
  //   .then(
  //     r => {
  //       commit(types.setSystems, r.data)
  //     },
  //     e => console.log(e)
  //   )
}

export const loadSystemsByTestManufs = ({ commit }, selectedTestManufs) => {
  services.getSystemsByTestManufs(selectedTestManufs)
    .then(
      r => {
        commit(types.setSystemsByTestManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedSystems = ({ commit, getters, dispatch }, selectedSystems) => {
  commit(types.setSelectedSystems, selectedSystems)
  dispatch('loadProjectsByTestManufsAndSystems', { selectedTestManuf: getters.selectedTestManufs, selectedSystem: getters.selectedSystems })
  dispatch('setSelectedProjects', [])
  dispatch('setIndicatorOfTestIsShow', false)
}
