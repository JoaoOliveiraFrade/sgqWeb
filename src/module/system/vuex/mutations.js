import * as types from './mutationsTypes'

export default {
  [types.systems] (state, data) {
    state.systems = data
  },

  [types.devSystems] (state, data) {
    state.devSystems = data
  },

  [types.systemsByTestManufs] (state, data) {
    state.systemsByTestManufs = data
  },

  [types.selectedSystems] (state, data) {
    state.selectedSystems = data
  },

  [types.systemsByDevManufs] (state, data) {
    state.systemsByDevManufs = data
  },

  [types.selectedDevSystems] (state, data) {
    state.selectedDevSystems = data
  }
}
