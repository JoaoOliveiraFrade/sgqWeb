import * as types from './mutationsTypes'
import services from '@/module/testManuf/services'

export const loadTestManufs = ({ commit }) => {
  services.getAll()
    .then(
      r => {
        commit(types.testManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedTestManufs = ({ commit, dispatch }, selectedTestManufs) => {
  commit(types.selectedTestManufs, selectedTestManufs)
  dispatch('loadSystemsByTestManufs', selectedTestManufs)
  dispatch('setSelectedSystems', [])
  dispatch('setIndicatorOfTestIsShow', false)
}
