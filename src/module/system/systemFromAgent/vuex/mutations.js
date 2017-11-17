import * as types from './mutationsTypes'

export default {
  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.loading] (state, data) {
    state.loading = data
  },

  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.dataGbyDevManuf] (state, parameter) {
    state.dataGbyDevManuf = parameter
  },
  // [types.filterDevManuf] (state, parameter) {
  //   state.filterDevManuf = parameter
  // },

  [types.dataGbyTestManuf] (state, parameter) {
    state.dataGbyTestManuf = parameter
  },
  // [types.filterTestManuf] (state, parameter) {
  //   state.filterTestManuf = parameter
  // },

  [types.selected] (state, parameter) {
    state.selected = parameter
  }
}
