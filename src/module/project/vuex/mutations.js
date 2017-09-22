import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.ofTestManufsAndSystems] (state, data) {
    state.ofTestManufsAndSystems = data
  },

  [types.ofDevManufsAndSystems] (state, data) {
    state.ofDevManufsAndSystems = data
  },

  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.selected] (state, data) {
    state.selected = data
  },

  [types.loading] (state, data) {
    state.loading = data
  }
}
