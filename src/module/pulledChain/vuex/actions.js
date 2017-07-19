import * as types from './mutationsTypes'
import services from '../services'

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
