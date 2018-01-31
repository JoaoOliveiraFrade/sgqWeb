import * as types from './mutationsTypes'

// import trgServices from '../services'
// import trgDefectServices from '../module/trgDefect/services'

export const setDefectStatus = ({ commit }, paramenter) => {
  commit(types.defectStatus, paramenter)
}
export const setDefectGroupOrigin = ({ commit }, paramenter) => {
  commit(types.defectGroupOrigin, paramenter)
}
export const setCtImpactedXDefects = ({ commit }, paramenter) => {
  commit(types.ctImpactedXDefects, paramenter)
}

export const setDefectsOpen = ({ commit }, paramenter) => {
  commit(types.defectsOpen, paramenter)
}
