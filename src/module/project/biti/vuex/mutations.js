import * as types from './mutationsTypes'

export default {
  [types.loading] (state, data) {
    state.loading = data
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.selected] (state, data) {
    state.selected = data
  }
}
