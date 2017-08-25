import * as types from './mutationsTypes'
import services from '../services'

export const loadRateEvidRejected = ({ getters, commit }) => {
  commit(types.rateEvidRejectedLoading, true)
  console.log('loadRateEvidRejected - Inicio')
  return new Promise((resolve, reject) => {
    services.getRateEvidRejectedByListTestManufSystemProject({
      selectedTestManufs: getters.selectedTestManufs,
      selectedSystems: getters.selectedSystems,
      selectedProjects: getters.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        commit(types.rateEvidRejected, r.data)
        commit(types.rateEvidRejectedLoading, false)
        resolve(r.data)
      },
      e => {
        console.log(e)
        commit(types.rateEvidRejectedLoading, false)
        reject(e)
      }
    )
  })
}

export const rateEvidRejectedChartChangeFilter = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.rateEvidRejectedChartTestManufSelected, '')
    commit(types.rateEvidRejectedChartSystemSelected, '')
  } else {
    if (state.rateEvidRejectedChartTestManufSelected === '') {
      commit(types.rateEvidRejectedChartTestManufSelected, item)
    } else {
      commit(types.rateEvidRejectedChartSystemSelected, item)
    }
  }
}
