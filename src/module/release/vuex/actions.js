import * as types from './mutationsTypes'
import services from '../services'

export const loadData = ({ commit }) => {
  commit(types.loading, true)

  services.data()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const setMonoSelected = ({ commit }, paramenter) => {
  commit(types.monoSelected, paramenter)
  commit(types.searchStatus, 'show')
}

export const setMultiSelected = ({ commit }, paramenter) => {
  commit(types.multiSelected, paramenter)
  commit(types.searchStatus, 'show')
}

export const setSearchStatus = ({ commit }, paramenter) => {
  commit(types.searchStatus, paramenter)
}
