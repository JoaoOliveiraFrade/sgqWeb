import * as types from './mutationsTypes'
import services from '../services'

export const setFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

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

export const loadDataGbyDevManuf = ({ commit }) => {
  services.dataGbyDevManuf().then(
    r => {
      commit(types.dataGbyDevManuf, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}
// export const setFilterDevManuf = ({ commit }, paramenter) => {
//   commit(types.filterDevManuf, paramenter)
// }

export const loadDataGbyTestManuf = ({ commit }) => {
  services.dataGbyTestManuf().then(
    r => {
      commit(types.dataGbyTestManuf, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}
// export const setFilterTestManuf = ({ commit }, paramenter) => {
//   commit(types.filterTestManuf, paramenter)
// }

export const setSelected = ({ commit }, paramenter) => {
  commit(types.selected, paramenter)
}
