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
