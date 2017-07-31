import * as types from './mutationsTypes'
import services from '@/module/devSystem/services'

export const loadDevSystems = ({ commit }, selectedDevManuf) => {
  services.getAll()
    .then(
      r => {
        commit(types.setDevSystems, r.data)
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

export const loadSystemsByDevManufs = ({ commit }, selectedDevManufs) => {
  services.getSystemsByDevManufs(selectedDevManufs)
    .then(
      r => {
        commit(types.setSystemsByDevManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedDevSystems = ({ commit, getters, dispatch }, selectedDevSystems) => {
  commit(types.setSelectedDevSystems, selectedDevSystems)

  dispatch('loadProjectsByDevManufsAndSystems', {
    selectedDevManuf: getters.selectedDevManufs,
    selectedDevSystem: getters.selectedDevSystems
  })

  dispatch('setSelectedDevProjects', [])
  dispatch('setIndicatorOfDevIsShow', false)
}
