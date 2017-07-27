import * as types from './mutationsTypes'
import services from '../services'
import Toastr from 'toastr'

export const loadPulledChainProjects = ({ commit }) => {
  services.getAll()
    .then(
      r => {
        commit(types.pulledChainProjects, r.data)
        commit(types.pulledChainProjectsFilteredByText, r.data)
      },
      e => console.log(e)
    )
}

export const setPulledChainFilterTerm = ({ commit }, filterTerm) => {
  commit(types.pulledChainFilterTerm, filterTerm)
}

export const setPulledChainProjectSelected = ({ commit }, selected) => {
  commit(types.pulledChainProjectSelected, selected)
}

export const updatePulledChainProjectSelected = ({ commit }, updatedItem) => {
  services.update(updatedItem)

  commit(types.pulledChainProjectSelected, updatedItem)

  Toastr.success('Dados gravados!')
}
