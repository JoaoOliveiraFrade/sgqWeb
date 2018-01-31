import * as types from './mutationsTypes'

export default {
  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.filterTerm] (state, parameter) {
    state.filterTerm = parameter
  },

  [types.monoSelected] (state, parameter) {
    state.monoSelected = parameter
  },

  [types.multiSelected] (state, parameter) {
    state.multiSelected = parameter
  },

  [types.searchStatus] (state, parameter) {
    state.searchStatus = parameter
  }
}
