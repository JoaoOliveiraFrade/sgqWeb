import * as types from './mutationsTypes'

export default {
  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.last05Days] (state, parameter) {
    state.last05Days = parameter
  },

  [types.last30Days] (state, parameter) {
    state.last30Days = parameter
  },

  [types.groupMonth] (state, parameter) {
    state.groupMonth = parameter
  }
}
