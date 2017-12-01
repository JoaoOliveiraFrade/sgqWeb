import * as types from './mutationsTypes'

export default {
  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.data] (state, parameter) {
    state.data = parameter
  }
}
