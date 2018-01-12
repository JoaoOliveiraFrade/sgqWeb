import * as types from './mutationsTypes'

export default {
  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.selected] (state, parameter) {
    state.selected = parameter
  },

  [types.steps] (state, parameter) {
    state.steps = parameter
  },

  [types.searchStatus] (state, parameter) {
    state.searchStatus = parameter
  }
}
