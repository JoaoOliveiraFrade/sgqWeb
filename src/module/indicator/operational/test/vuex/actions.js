import * as types from './mutationsTypes'
// import services from '../services'

export const setSelectedTestManufs = ({ commit }, selected) => {
  commit(types.selectedTestManufs, selected)
  commit(types.selectedSystem, [])
  commit(types.selectedProject, [])
}

export const setSelectedSystem = ({ commit }, selected) => {
  commit(types.selectedSystem, selected)
  commit(types.selectedProject, [])
}

export const setSelectedProject = ({ commit }, selected) => {
  commit(types.selectedProject, selected)
}
