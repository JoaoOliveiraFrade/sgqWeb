import * as types from './mutationsTypes'

export default {
  [types.dataFromCTAndDefec] (state, parameter) {
    state.dataFromCTAndDefec = parameter
  },
  [types.dataFromCTAndDefectGbyDevManuf] (state, parameter) {
    state.dataFromCTAndDefectGbyDevManuf = parameter
  },
  [types.dataFromCTAndDefectGbyTestManuf] (state, parameter) {
    state.dataFromCTAndDefectGbyTestManuf = parameter
  },

  [types.dataFromAgent] (state, parameter) {
    state.dataFromAgent = parameter
  },
  [types.dataFromAgentGbyDevManuf] (state, parameter) {
    state.dataFromAgentGbyDevManuf = parameter
  },
  [types.dataFromAgentGbyTestManuf] (state, parameter) {
    state.dataFromAgentGbyTestManuf = parameter
  },

  [types.filterDevManufs] (state, parameter) {
    state.filterDevManufs = parameter
  },
  [types.selected] (state, parameter) {
    state.selected = parameter
  }
}
