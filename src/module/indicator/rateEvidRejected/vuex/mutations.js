import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },
  [types.loading] (state, parameter) {
    state.loading = parameter
  },
  [types.selectedRejectionType] (state, parameter) {
    state.selectedRejectionType = parameter
  },

  [types.ChartTestManufSelectedTI] (state, parameter) {
    state.ChartTestManufSelectedTI = parameter
  },
  [types.ChartSystemSelectedTI] (state, parameter) {
    state.ChartSystemSelectedTI = parameter
  },
  [types.ChartTestManufSelectedUAT] (state, parameter) {
    state.ChartTestManufSelectedUAT = parameter
  },
  [types.ChartSystemSelectedUAT] (state, parameter) {
    state.ChartSystemSelectedUAT = parameter
  },
  [types.ChartTestManufSelectedTotal] (state, parameter) {
    state.ChartTestManufSelectedTotal = parameter
  },
  [types.ChartSystemSelectedTotal] (state, parameter) {
    state.ChartSystemSelectedTotal = parameter
  }
}
