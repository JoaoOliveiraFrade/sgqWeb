import * as types from './mutationsTypes'
import services from '../services'

export const setSelectedDevManuf = ({ commit }, selected) => {
  commit(types.selectedDevManuf, selected)
  commit(types.selectedSystem, [])
}

export const setSelectedSystem = ({ commit }, selected) => {
  commit(types.selectedSystem, selected)
  commit(types.selectedProject, [])
}

export const setSelectedProject = ({ commit }, selected) => {
  commit(types.selectedProject, selected)
}

export const load = ({ commit, state, rootState }) => {
  if (state.selectedDevManuf.length === 0 ||
    state.selectedSystem.length === 0 ||
    state.selectedProject.length === 0) {
    return
  }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.load({
      selectedDevManuf: state.selectedDevManuf.map(i => i.id),
      selectedSystem: state.selectedSystem.map(i => i.id),
      selectedProject: state.selectedProject.map(i => i.subproject + i.delivery)
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
    commit(types.chartSelectedDevManuf, '')
    commit(types.chartSelectedSystem, '')
  } else {
    if (state.chartSelectedDevManuf === '') {
      commit(types.chartSelectedDevManuf, item)
    } else {
      commit(types.chartSelectedSystem, item)
    }
  }
}
