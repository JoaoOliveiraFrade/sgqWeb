import * as types from './mutationsTypes'
import services from '../services'

export const loadDefectStatus = ({ commit }, subprojectDelivery) => {
  commit(types.loading, true)

  if (subprojectDelivery === undefined) return

  services.defectStatus(subprojectDelivery)
    .then(
      r => {
        commit(types.defectStatus, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDefectGroupOrigin = ({ commit }, subprojectDelivery) => {
  commit(types.loading, true)

  if (subprojectDelivery === undefined) return

  services.defectGroupOrigin(subprojectDelivery)
    .then(
      r => {
        commit(types.defectGroupOrigin, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadCtImpactedXDefects = ({ commit }, subprojectDelivery) => {
  commit(types.loading, true)

  if (subprojectDelivery === undefined) return

  services.ctImpactedXDefects(subprojectDelivery)
    .then(
      r => {
        commit(types.ctImpactedXDefects, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDefectsOpen = ({ commit }, subprojectDelivery) => {
  commit(types.loading, true)

  if (subprojectDelivery === undefined) return

  services.defectsOpen(subprojectDelivery)
    .then(
      r => {
        commit(types.defectsOpen, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

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
