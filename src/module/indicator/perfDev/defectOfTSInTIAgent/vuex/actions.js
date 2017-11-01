import * as types from './mutationsTypes'
import services from '../services'

export const setSelectedDevManufs = ({ commit }, selected) => {
  commit(types.selectedDevManufs, selected)
  commit(types.selectedSystems, [])
}

export const setSelectedSystems = ({ commit }, selected) => {
  commit(types.selectedSystems, selected)
  commit(types.selectedProjects, [])
}

export const setSelectedProjects = ({ commit }, selected) => {
  commit(types.selectedProjects, selected)
}

export const load = ({ commit, state, rootState }) => {
  if (state.selectedDevManufs.length === 0 ||
    state.selectedSystems.length === 0 ||
    state.selectedProjects.length === 0) {
    return
  }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.load({
      selectedDevManufs: rootState.indicatorPerfDevDefectOfTSInTIAgent.selectedDevManufs.map(i => i.id),
      selectedSystems: rootState.indicatorPerfDevDefectOfTSInTIAgent.selectedSystems.map(i => i.id),
      selectedProjects: rootState.indicatorPerfDevDefectOfTSInTIAgent.selectedProjects.map(i => i.subproject + i.delivery)
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
    commit(types.chartSelectedDevManufs, '')
    commit(types.chartSelectedSystems, '')
  } else {
    if (state.chartSelectedDevManufs === '') {
      commit(types.chartSelectedDevManufs, item)
    } else {
      commit(types.chartSelectedSystems, item)
    }
  }
}
