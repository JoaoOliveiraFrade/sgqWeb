import * as types from './mutationsTypes'
import services from '@/module/devManuf/services'

export const loadDevManufs = ({ commit }) => {
  services.getAll()
    .then(
      r => {
        commit(types.setDevManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedDevManufs = ({ commit, dispatch }, selectedDevManufs) => {
  commit(types.setSelectedDevManufs, selectedDevManufs)
  dispatch('loadSystemsByDevManufs', selectedDevManufs)
  dispatch('setSelectedSystems', [])
  dispatch('setIndicatorOfDevIsShow', false)
}
