import * as types from './mutationsTypes'
import services from '../services'
import Toastr from 'toastr'

export const load = ({ commit }) => {
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.filteredByText, r.data)
      },
      e => console.log(e)
    )
}

export const loadChartCFD = ({ commit }) => {
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.filteredByText, r.data)
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
