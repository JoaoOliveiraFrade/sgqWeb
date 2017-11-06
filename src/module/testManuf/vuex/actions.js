import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit }) => {
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
      },
      e => console.log(e)
    )
}

export const setSelected = ({ commit }, paramenter) => {
  commit(types.selected, paramenter)
}

// export const setSelectedTestManufs = ({ commit, dispatch }, selectedTestManufs) => {
//   commit(types.selectedTestManufs, selectedTestManufs)
//   dispatch('loadSystemsByTestManufs', selectedTestManufs)
//   dispatch('setSelectedSystem', [])
// }
