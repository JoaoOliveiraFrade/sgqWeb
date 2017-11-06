import * as types from './mutationsTypes'
import services from '../services'

export const loadData = ({ commit }) => {
  services.data()
    .then(
      r => {
        commit(types.data, r.data)
      },
      e => console.log(e)
    )
}

export const loadDataFromAgent = ({ commit }) => {
  services.dataFromAgent()
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
