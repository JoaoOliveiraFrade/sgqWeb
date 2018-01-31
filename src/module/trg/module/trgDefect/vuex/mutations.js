import * as types from './mutationsTypes'

export default {
  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.defectStatus] (state, parameter) {
    state.defectStatus = parameter
  },
  [types.defectGroupOrigin] (state, parameter) {
    state.defectGroupOrigin = parameter
  },
  [types.ctImpactedXDefects] (state, parameter) {
    state.ctImpactedXDefects = parameter
  },

  [types.defectsOpen] (state, parameter) {
    state.defectsOpen = parameter
  }
}
