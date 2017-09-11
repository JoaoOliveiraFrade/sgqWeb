import * as types from './mutationsTypes'
// import services from '../services'

export const setSelectedTestManufs = ({ commit }, selected) => {
  commit(types.selectedTestManufs, selected)
  commit(types.selectedSystems, [])
  commit(types.selectedProjects, [])
}

export const setSelectedSystems = ({ commit }, selected) => {
  commit(types.selectedSystems, selected)
  commit(types.selectedProjects, [])
}

export const setSelectedProjects = ({ commit }, selected) => {
  commit(types.selectedProjects, selected)
}
