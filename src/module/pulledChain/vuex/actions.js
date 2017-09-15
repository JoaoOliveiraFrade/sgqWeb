import * as types from './mutationsTypes'
import services from '../services'
import Toastr from 'toastr'

export const load = ({ commit, dispatch }) => {
  commit(types.loading, true)
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.filteredByText, r.data)
        dispatch('loadDataChartCFD')
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDataChartCFD = ({ commit, getters }) => {
  console.log('loadDataChartCFD')
  services.loadDataChartCFD()
    .then(
      r => {
        commit(types.dataChartCFD, r.data)
        commit(types.paramChartCFD, getters.dataChartCFDGroupDate)
      },
      e => console.log(e)
    )
}

export const setFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

export const setSelected = ({ commit }, selected) => {
  commit(types.selected, selected)
}

export const updateSelected = ({ commit }, updatedItem) => {
  services.update(updatedItem)

  commit(types.updateSelected, updatedItem)

  Toastr.success('Dados gravados!')
}
