import * as types from './mutationsTypes'

export default {
  [types.setDevSystems] (state, devSystems) {
    state.devSystems = devSystems
  },

  [types.setSystemsByDevManufs] (state, systemsByDevManufs) {
    state.systemsByDevManufs = systemsByDevManufs
  },

  [types.setSelectedDevSystems] (state, selectedDevSystems) {
    state.selectedDevSystems = selectedDevSystems
  }
}
