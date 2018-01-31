import * as types from './mutationsTypes'

import trgServices from '../services'
import trgDefectServices from '../module/trgDefect/services'

export const setSelectedRelease = ({ commit }, paramenter) => {
  commit(types.selectedRelease, paramenter)

  commit(types.viewState, false)

  trgServices.systems(paramenter)
    .then(
      r => {
        console.log(r.data)
        commit(types.systems, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const setSystemsMultiSelected = ({ commit, state, dispatch }, paramenter) => {
  commit(types.systemsMultiSelected, paramenter)
  commit(types.viewState, true)

  let filters = { release: state.selectedRelease, systems: state.systemsMultiSelected.map(i => i.id) }

  trgDefectServices.defectStatus(filters).then(r => {
    // commit(types.defectStatus, r.data)
    dispatch('trgDefect/setDefectStatus', r.data, { root: true })
  })

  trgDefectServices.defectGroupOrigin(filters).then(r => {
    // commit(types.defectGroupOrigin, r.data)
    dispatch('trgDefect/setDefectGroupOrigin', r.data, { root: true })
  })

  trgDefectServices.ctImpactedXDefects(filters).then(r => {
    // commit(types.ctImpactedXDefects, r.data)
    dispatch('trgDefect/setCtImpactedXDefects', r.data, { root: true })
  })

  trgDefectServices.defectsOpen(filters).then(r => {
    // commit(types.defectsOpen, r.data)
    dispatch('trgDefect/setDefectsOpen', r.data, { root: true })
  })
}
