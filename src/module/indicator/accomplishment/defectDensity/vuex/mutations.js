import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.devManufSelected] (state, parameter) {
    state.devManufSelected = parameter
  },
  [types.systemSelected] (state, parameter) {
    state.systemSelected = parameter
  }
}
