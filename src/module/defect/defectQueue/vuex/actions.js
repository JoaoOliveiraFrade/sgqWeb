import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit }) => {
  services.getAll()
    .then(
      r => {
        console.log(r.data)
        commit(types.data, r.data)
      },
      e => console.log(e)
    )
}

export const setSelected = ({ commit }, paramenter) => {
  commit(types.selected, paramenter)
}

