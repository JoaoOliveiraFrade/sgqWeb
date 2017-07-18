import * as types from './mutationsTypes'
import services from '../services'

export const setIndicatorOfTestIsShow = ({ dispatch, commit }, value) => {
  if (!value) {
    commit(types.indicatorOfTestIsShow, false)
    return
  }

  console.log('loadProdutivityIndByListTestManufSystemProject - inicio')
  dispatch('loadProdutivityIndByListTestManufSystemProject')
    .then(() => {
      commit(types.indicatorOfTestIsShow, true)
      // dispatch('setprodutivityIndByTestManuf')
      // dispatch('setprodutivityIndTotal')
    })

  console.log('loadRateRejectionEvidenceIndByListTestManufSystemProject - inicio')
  dispatch('loadRateRejectionEvidenceIndByListTestManufSystemProject')
}

// dispatch('loadprodutivityIndByListTestManufSystemProject', selectedProjects.map(i => i.subproject + i.delivery))
// export const loadIndicatorByListTestManufSystemProject = ({ dispatch }) => {
//   dispatch('loadProdutivityIndByListTestManufSystemProject')
//   dispatch('loadRateRejectionEvidenceIndByListTestManufSystemProject')
// }

export const loadProdutivityIndByListTestManufSystemProject = ({ getters, commit }) => {
  return new Promise((resolve, reject) => {
    services.getProdutivityIndByListTestManufSystemProject({
      selectedTestManufs: getters.selectedTestManufs,
      selectedSystems: getters.selectedSystems,
      selectedProjects: getters.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        console.log('loadProdutivityIndByListTestManufSystemProject - fim')
        commit(types.produtivityIndAllFiltered, r.data)
        resolve()
      },
      e => console.log(e)
    )
  })
}

export const produtivityIndChartChangeFilter = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.produtivityIndChartTestManufSelected, '')
    commit(types.produtivityIndChartSystemSelected, '')
  } else {
    if (state.produtivityIndChartTestManufSelected === '') {
      commit(types.produtivityIndChartTestManufSelected, item)
    } else {
      commit(types.produtivityIndChartSystemSelected, item)
    }
  }
}

export const loadRateRejectionEvidenceIndByListTestManufSystemProject = ({ getters, commit }) => {
  return new Promise((resolve, reject) => {
    services.getRateRejectionEvidenceIndByListTestManufSystemProject({
      selectedTestManufs: getters.selectedTestManufs,
      selectedSystems: getters.selectedSystems,
      selectedProjects: getters.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        console.log('loadRateRejectionEvidenceIndByListTestManufSystemProject - fim')
        commit(types.rateRejectionEvidenceIndAllFiltered, r.data)
        resolve()
      },
      e => console.log(e)
    )
  })
}
