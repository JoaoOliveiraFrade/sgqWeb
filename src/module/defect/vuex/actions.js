import * as types from './mutationsTypes'
import defectServices from '../services'

export const setSelectedDefect = ({ commit }, parameter) => {
  commit(types.selectedDefect, parameter)
  commit(types.status, 'showDetail')
  commit(types.loading, true)

  defectServices.defectDetail(parameter)
    .then(
      r => {
        commit(types.selectedDefectDetail, r.data)
        commit(types.loading, false)
      },
      e => {
        commit(types.loading, false)
        console.log(e)
      }
    )

  defectServices.defectTime(parameter)
    .then(
      r => {
        commit(types.selectedDefectTime, r.data)
        commit(types.loading, false)
      },
      e => {
        commit(types.loading, false)
        console.log(e)
      }
    )
}

export const setStatus = ({ commit }, parameter) => {
  commit(types.status, parameter)
}

// export const setChartFilter = ({ state, commit }, item) => {
//   if (item === '') {
//     commit(types.testManufSelected, '')
//     commit(types.systemSelected, '')
//   } else {
//     if (state.testManufSelected === '') {
//       commit(types.testManufSelected, item)
//     } else {
//       commit(types.systemSelected, item)
//     }
//   }
// }
