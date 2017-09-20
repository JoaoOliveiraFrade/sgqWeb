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

export const loadOfQueue = ({ commit }) => {
  services.loadOfQueue()
    .then(
      r => {
        commit(types.dataOfQueue, r.data)
      },
      e => console.log(e)
    )
}

export const setSelectedOfQueue = ({ commit }, paramenter) => {
  commit(types.selectedOfQueue, paramenter)
}
