import * as types from './mutationsTypes'

export default {
  [types.defects] (state, parameter) {
    state.defects = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.selectedDefect] (state, parameter) {
    state.selectedDefect = parameter
  },

  [types.selectedDefectDetail] (state, parameter) {
    state.selectedDefectDetail = parameter
  },

  [types.selectedDefectTime] (state, parameter) {
    state.selectedDefectTime = parameter
  },

  [types.status] (state, parameter) {
    state.status = parameter
  }
}
