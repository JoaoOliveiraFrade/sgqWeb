import * as types from './mutationsTypes'
import services from '@/module/devManuf/services'

export const loadDevManufs = ({ commit }) => {
  services.getAll()
    .then(
      r => {
        commit(types.devManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedDevManufs = ({ commit, dispatch }, selectedDevManufs) => {
  commit(types.selectedDevManufs, selectedDevManufs)
  dispatch('loadSystemsByDevManufs', selectedDevManufs)
 // dispatch('setSelectedDevSystems', [])
}
