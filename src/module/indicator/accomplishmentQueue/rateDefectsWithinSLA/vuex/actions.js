import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit, state, rootState }) => {
  if (rootState.indicatorAccomplishment.selectedDevManufs.length === 0 || rootState.indicatorAccomplishment.selectedSystems.length === 0 || rootState.indicatorAccomplishment.selectedProjects.length === 0) {
    return
  }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.load({
      selectedDevManufs: rootState.indicatorAccomplishment.selectedDevManufs.map(i => i.id),
      selectedSystems: rootState.indicatorAccomplishment.selectedSystems.map(i => i.id),
      selectedProjects: rootState.indicatorAccomplishment.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
        resolve()
      },
      e => {
        console.log(e)
        commit(types.loading, false)
        reject()
      }
    )
  })
}

export const setChartFilter = ({ state, commit }, item) => {
  if (item === '') {
    commit(types.devManufSelected, '')
    commit(types.systemSelected, '')
  } else {
    if (state.devManufSelected === '') {
      commit(types.devManufSelected, item)
    } else {
      commit(types.systemSelected, item)
    }
  }
}
