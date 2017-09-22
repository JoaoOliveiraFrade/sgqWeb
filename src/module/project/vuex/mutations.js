import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.ofTestManufsAndSystems] (state, data) {
    state.ofTestManufsAndSystems = data
  },

  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.selected] (state, data) {
    state.selected = data
  },

  [types.loading] (state, data) {
    state.loading = data
  },

// ----------

  [types.devManufs] (state, parameter) {
    state.devManufs = parameter
  },

  [types.systems] (state, parameter) {
    state.systems = parameter
  },

  [types.listSubprojectDelivery] (state, parameter) {
    state.listSubprojectDelivery = parameter
  }
}
