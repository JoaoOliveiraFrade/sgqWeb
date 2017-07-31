import * as types from './mutationsTypes'

export default {
  [types.devManufs] (state, data) {
    state.devManufs = data
  },
  [types.selectedDevManufs] (state, data) {
    state.selectedDevManufs = data
  }
}
