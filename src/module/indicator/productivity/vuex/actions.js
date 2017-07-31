import * as types from './mutationsTypes'
import services from '../services'

export const loadProdutivity = ({ getters, commit }) => {
  commit(types.produtivityLoading, true)
  return new Promise((resolve, reject) => {
    services.getProdutivityByListTestManufSystemProject({
      selectedTestManufs: getters.selectedTestManufs,
      selectedSystems: getters.selectedSystems,
      selectedProjects: getters.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        commit(types.produtivitys, r.data)
        commit(types.produtivityLoading, false)
        resolve()
      },
      e => {
        console.log(e)
        commit(types.produtivityLoading, false)
        reject()
      }
    )
  })
}

export const produtivityChartChangeFilter = ({ commit, state }, item) => {
  if (item === '') {
    commit(types.produtivityChartTestManufSelected, '')
    commit(types.produtivityChartSystemSelected, '')
  } else {
    if (state.produtivityChartTestManufSelected === '') {
      commit(types.produtivityChartTestManufSelected, item)
    } else {
      commit(types.produtivityChartSystemSelected, item)
    }
  }
}
