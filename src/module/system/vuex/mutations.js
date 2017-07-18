import * as types from './mutationsTypes'

export default {
  [types.setSystems] (state, systems) {
    state.systems = systems
  },

  [types.setSystemsByTestManufs] (state, systemsByTestManufs) {
    state.systemsByTestManufs = systemsByTestManufs
  },

  [types.setSelectedSystems] (state, selectedSystems) {
    state.selectedSystems = selectedSystems
  }
}
