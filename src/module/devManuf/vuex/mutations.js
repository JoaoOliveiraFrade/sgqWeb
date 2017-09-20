import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },
  [types.selected] (state, parameter) {
    state.selected = parameter
  },

  [types.dataOfQueue] (state, parameter) {
    state.dataOfQueue = parameter
  },
  [types.selectedOfQueue] (state, parameter) {
    state.selectedOfQueue = parameter
  }
}
