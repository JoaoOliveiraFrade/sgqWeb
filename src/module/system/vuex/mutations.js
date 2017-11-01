import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },
  [types.selected] (state, parameter) {
    state.selected = parameter
  },

  [types.dataFbyTestManufs] (state, parameter) {
    state.dataFbyTestManufs = parameter
  },

  [types.devManufs] (state, parameter) {
    state.devManufs = parameter
  },

  [types.ofAgentGroupDevManufs] (state, parameter) {
    state.ofAgentGroupDevManufs = parameter
  }
}
