import * as types from './mutationsTypes'

export default {
  [types.produtivitys] (state, data) {
    state.produtivitys = data
  },
  [types.produtivityLoading] (state, data) {
    state.produtivityLoading = data
  },

  [types.produtivityChartTestManufSelected] (state, data) {
    state.produtivityChartTestManufSelected = data
  },
  [types.produtivityChartSystemSelected] (state, data) {
    state.produtivityChartSystemSelected = data
  }
}
