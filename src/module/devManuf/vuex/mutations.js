import * as types from './mutationsTypes'

export default {
  [types.setDevManufs] (state, devManufs) {
    state.devManufs = devManufs
  },
  [types.setSelectedDevManufs] (state, selectedDevManufs) {
    state.selectedDevManufs = selectedDevManufs
  }
}
