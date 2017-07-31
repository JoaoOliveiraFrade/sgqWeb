import * as types from './mutationsTypes'
import services from '@/module/system/services'

export const loadSystems = ({ commit }, selectedTestManuf) => {
  services.getAll()
    .then(
      r => {
        commit(types.systems, r.data)
      },
      e => console.log(e)
    )
}

export const loadDevSystems = ({ commit }, selectedDevManuf) => {
  services.getAll()
    .then(
      r => {
        commit(types.devSystems, r.data)
      },
      e => console.log(e)
    )
}

export const loadSystemsByTestManufs = ({ commit }, selectedTestManufs) => {
  services.getSystemsByTestManufs(selectedTestManufs)
    .then(
      r => {
        commit(types.systemsByTestManufs, r.data)
      },
      e => console.log(e)
    )
}

export const loadSystemsByDevManufs = ({ commit }, selectedDevManufs) => {
  services.getSystemsByDevManufs(selectedDevManufs)
    .then(
      r => {
        commit(types.systemsByDevManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedDevSystems = ({ commit, getters, dispatch }, selectedDevSystems) => {
  commit(types.selectedDevSystems, selectedDevSystems)

 // dispatch('loadProjectsByDevManufsAndSystems', {
 //   selectedDevManuf: getters.selectedDevManuf,
 //   selectedDevSystem: getters.selectedDevSystem
 // })

 // dispatch('setSelectedDevProjects', [])
}

export const setSelectedSystems = ({ commit, getters, dispatch }, selectedSystems) => {
  commit(types.selectedSystems, selectedSystems)

  dispatch('loadProjectsByTestManufsAndSystems', {
    selectedTestManuf: getters.selectedTestManufs,
    selectedSystem: getters.selectedSystems
  })

  dispatch('setSelectedProjects', [])
}
