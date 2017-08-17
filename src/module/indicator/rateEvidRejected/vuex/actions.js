import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit, rootState }) => {
  if (rootState.testManuf.selectedTestManufs.length === 0 || rootState.system.selectedSystems.length === 0 || rootState.project.selectedProjects.length === 0) {
    return
  }

  commit(types.loading, true)
  return new Promise((resolve, reject) => {
    services.getByListTestManufSystemProject({
      selectedTestManufs: rootState.testManuf.selectedTestManufs,
      selectedSystems: rootState.system.selectedSystems,
      selectedProjects: rootState.project.selectedProjects.map(i => i.subproject + i.delivery)
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

export const chartChangeFilterTI = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.ChartTestManufSelectedTI, '')
    commit(types.ChartSystemSelectedTI, '')
  } else {
    if (state.ChartTestManufSelectedTI === '') {
      commit(types.ChartTestManufSelectedTI, item)
    } else {
      commit(types.ChartSystemSelectedTI, item)
    }
  }
}

export const chartChangeFilterUAT = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.ChartTestManufSelectedUAT, '')
    commit(types.ChartSystemSelectedTI, '')
  } else {
    if (state.ChartTestManufSelectedUAT === '') {
      commit(types.ChartTestManufSelectedUAT, item)
    } else {
      commit(types.ChartSystemSelectedUAT, item)
    }
  }
}

export const chartChangeFilterTotal = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.ChartTestManufSelectedTotal, '')
    commit(types.ChartSystemSelectedTI, '')
  } else {
    if (state.ChartTestManufSelectedTotal === '') {
      commit(types.ChartTestManufSelectedTotal, item)
    } else {
      commit(types.ChartSystemSelectedTotal, item)
    }
  }
}

export const setSelectedRejectionType = ({ commit }, data) => {
  commit(types.selectedRejectionType, data)
}
