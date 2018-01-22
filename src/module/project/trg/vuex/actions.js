import * as types from './mutationsTypes'
import services from '../services'

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

export const setSelected = ({ commit }, paramenter) => {
  commit(types.selected, paramenter)
}

export const setSelectedMonoselection = ({ commit }, project) => {
  services.getProjectsByIds(project.id.toString()).then(r => {
    commit(types.selectedMonoselection, r.data[0])
  })
}

export const setFilterTerm = ({ commit }, paramenter) => {
  commit(types.filterTerm, paramenter)
}
