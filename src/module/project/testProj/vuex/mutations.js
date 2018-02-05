import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },

  [types.fromTestManufsAndSystems] (state, parameter) {
    state.fromTestManufsAndSystems = parameter
  },

  [types.fromDevManufsAndSystems] (state, parameter) {
    state.fromDevManufsAndSystems = parameter
  },

  [types.filterTerm] (state, parameter) {
    state.filterTerm = parameter
  },

  [types.selected] (state, parameter) {
    state.selected = parameter
  },

  [types.loading] (state, parameter) {
    state.loading = parameter
  },

  [types.state] (state, parameter) {
    state.state = parameter
  },

  [types.selectedMonoselection] (state, parameter) {
    state.selectedMonoselection = parameter
  },

  [types.iterations] (state, parameter) {
    state.iterations = parameter
  },

  [types.operDevDefectDensity] (state, parameter) {
    state.operDevDefectDensity = parameter
  },
  [types.operDevDefectAverangeTime] (state, parameter) {
    state.operDevDefectAverangeTime = parameter
  },
  [types.operDevDefectReopened] (state, parameter) {
    state.operDevDefectReopened = parameter
  },

  [types.operTestProductivity] (state, parameter) {
    state.operTestProductivity = parameter
  },
  [types.operTestRejectionEvidence] (state, parameter) {
    state.operTestRejectionEvidence = parameter
  },
  [types.operTestDefectUnfounded] (state, parameter) {
    state.operTestDefectUnfounded = parameter
  },
  [types.operTestDefectUAT] (state, parameter) {
    state.operTestDefectUAT = parameter
  },
  [types.operTestDefectAverangeRetestTime] (state, parameter) {
    state.operTestDefectAverangeRetestTime = parameter
  },

  [types.perfDevDefectDensity] (state, parameter) {
    state.perfDevDefectDensity = parameter
  },
  [types.perfDevDefectOfTSInTI] (state, parameter) {
    state.perfDevDefectOfTSInTI = parameter
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
  [types.defectsOpenInTestManuf] (state, parameter) {
    state.defectsOpenInTestManuf = parameter
  },
  [types.defectsOpenInDevManuf] (state, parameter) {
    state.defectsOpenInDevManuf = parameter
  }
  // [types.defectAverangeTime] (state, data) {
  //   state.defectAverangeTime = data
  // }
}
