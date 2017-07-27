import * as types from './mutationsTypes'

export default {
  [types.systems] (state, data) {
    state.systems = data
  },

  [types.systemsByTestManufs] (state, data) {
    state.systemsByTestManufs = data
  },

  [types.selectedSystems] (state, data) {
    state.selectedSystems = data
  }
}
