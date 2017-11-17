import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.fromTestManufsAndSystems] (state, data) {
    state.fromTestManufsAndSystems = data
  },

  [types.fromDevManufsAndSystems] (state, data) {
    state.fromDevManufsAndSystems = data
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

  [types.selectedMonoselection] (state, data) {
    state.selectedMonoselection = data
  },

  [types.operDevDefectDensity] (state, data) {
    state.operDevDefectDensity = data
  },
  [types.operDevDefectAverangeTime] (state, data) {
    state.operDevDefectAverangeTime = data
  },
  [types.operDevDefectReopened] (state, data) {
    state.operDevDefectReopened = data
  },

  [types.operTestProductivity] (state, data) {
    state.operTestProductivity = data
  },
  [types.operTestRejectionEvidence] (state, data) {
    state.operTestRejectionEvidence = data
  },
  [types.operTestDefectUnfounded] (state, data) {
    state.operTestDefectUnfounded = data
  },
  [types.operTestDefectUAT] (state, data) {
    state.operTestDefectUAT = data
  },
  [types.operTestDefectAverangeRetestTime] (state, data) {
    state.operTestDefectAverangeRetestTime = data
  },

  [types.perfDevDefectDensity] (state, data) {
    state.perfDevDefectDensity = data
  },
  [types.perfDevDefectOfTSInTI] (state, data) {
    state.perfDevDefectOfTSInTI = data
  }

  // [types.defectAverangeTime] (state, data) {
  //   state.defectAverangeTime = data
  // }
}
