import * as types from './mutationsTypes'

export default {
  [types.viewState] (state, parameter) {
    state.viewState = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.selectedRelease] (state, data) {
    state.selectedRelease = data
  },

  [types.systems] (state, data) {
    state.systems = data
  },

  [types.systemsMultiSelected] (state, data) {
    state.systemsMultiSelected = data
  }
}
