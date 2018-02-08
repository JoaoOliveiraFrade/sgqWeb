import * as types from './mutationsTypes'
import Toastr from 'toastr'

import trgServices from '../services'
import trgDefectServices from '../module/trgDefect/services'

export const setSelectedRelease = ({ commit }, paramenter) => {
  commit(types.selectedRelease, paramenter)

  commit(types.selectedSystems, [])
  commit(types.viewState, 'hide')

  trgServices.loadSystems(paramenter)
    .then(
      r => {
        Toastr.info('Informe os Sistemas, para geração do report!', '', { timeOut: 4000 })
        commit(types.systems, r.data)
      },
      e => {
        console.log(e)
      }
    )
}

export const setSelectedSystems = ({ commit, state, dispatch }, paramenter) => {
  commit(types.selectedSystems, paramenter)
  commit(types.viewState, 'show')

  let filters = { release: state.selectedRelease, systems: state.selectedSystems.map(i => i.id) }

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
