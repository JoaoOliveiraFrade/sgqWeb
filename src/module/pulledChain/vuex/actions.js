import * as types from './mutationsTypes'
import services from '../services'
import Toastr from 'toastr'

export const load = ({ commit }) => {
  commit(types.loading, true)
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.filteredByText, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDataChartCFD = ({ commit }) => {
  services.loadDataChartCFD()
    .then(
      r => {
        commit(types.dataChartCFD, r.data)
        commit(types.paramChartCFD)
      },
      e => console.log(e)
    )
}

export const setFilterTerm = ({ commit }, parameter) => {
  commit(types.filterTerm, parameter)
}

export const setSelected = ({ commit }, selected) => {
  commit(types.selected, selected)
}

export const update = ({ commit, dispatch }, parameter) => {
  services.update(parameter)
  commit(types.update, parameter)
  // dispatch('loadDataChartCFD')
  Toastr.success('Dados gravados!')
}
