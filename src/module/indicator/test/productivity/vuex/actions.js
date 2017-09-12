import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit, state, rootState }) => {
  if (rootState.indicatorTest.selectedTestManufs.length === 0 || rootState.indicatorTest.selectedSystems.length === 0 || rootState.indicatorTest.selectedProjects.length === 0) {
    return
  }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.load({
      selectedTestManufs: rootState.indicatorTest.selectedTestManufs.map(i => i.id),
      selectedSystems: rootState.indicatorTest.selectedSystems.map(i => i.id),
      selectedProjects: rootState.indicatorTest.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
        resolve(r.data)
      },
      e => {
        commit(types.loading, false)
        console.log(e)
        reject(e)
      }
    )
  })
}

export const productivityChartChangeFilter = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.testManufSelected, '')
    commit(types.systemSelected, '')
  } else {
    if (state.testManufSelected === '') {
      commit(types.testManufSelected, item)
    } else {
      commit(types.systemSelected, item)
    }
  }
}
