import * as types from './mutationsTypes'
import services from '../services'

export const loadData = ({ commit }, project) => {
  commit(types.loading, true)
  services.data(project)
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

export const setSelected = ({ commit }, paramenter) => {
  commit(types.selected, paramenter)

  services.steps({
    subproject: paramenter.subproject,
    delivery: paramenter.delivery,
    test: paramenter.test })
    .then(
      r => {
        commit(types.steps, r.data)
      },
      e => {
        console.log(e)
      }
    )

  commit(types.searchStatus, 'show')
}

export const setSearchStatus = ({ commit }, paramenter) => {
  commit(types.searchStatus, paramenter)
}
