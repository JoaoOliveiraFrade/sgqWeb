import * as types from './mutationsTypes'

export default {
  [types.viewState] (state, parameter) {
    state.viewState = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.selectedRelease] (state, parameter) {
    state.selectedRelease = parameter
  },

  [types.systems] (state, parameter) {
    state.systems = parameter
  },

  [types.selectedSystems] (state, parameter) {
    state.selectedSystems = parameter
  }
}
