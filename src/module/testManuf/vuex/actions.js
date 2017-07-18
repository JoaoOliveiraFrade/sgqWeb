import * as types from './mutationsTypes'
import services from '@/module/testManuf/services'

export const loadTestManufs = ({ commit }) => {
  services.getAll()
    .then(
      r => {
        commit(types.setTestManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedTestManufs = ({ commit, dispatch }, selectedTestManufs) => {
  commit(types.setSelectedTestManufs, selectedTestManufs)
  dispatch('loadSystemsByTestManufs', selectedTestManufs)
  dispatch('setSelectedSystems', [])
  dispatch('setIndicatorOfTestIsShow', false)
}
