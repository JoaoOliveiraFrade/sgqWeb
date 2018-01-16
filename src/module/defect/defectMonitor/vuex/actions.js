import * as types from './mutationsTypes'
import services from '../services'
import servicesDefect from '@/module/defect/services'

export const setSelectedDefectQueue = ({ commit }, selected) => {
  commit(types.selectedDefectQueue, selected)
}

export const setSelectedDefectStatus = ({ commit }, selected) => {
  commit(types.selectedDefectStatus, selected)
}

export const setSelectedDefectTrafficLight = ({ commit }, selected) => {
  commit(types.selectedDefectTrafficLight, selected)
}

export const setSelectedProject = ({ commit }, selected) => {
  commit(types.selectedProject, selected)
}

export const loadData = ({ commit, state }) => {
  // if (state.selectedDefectQueue.length === 0 || state.selectedDefectStatus.length === 0 || state.selectedDefectTrafficLight.length === 0 || state.selectedProject.length === 0) {
  //   return
  // }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.fbyQueueStatusTrafficLightProject({
      selectedDefectQueue: state.selectedDefectQueue.map(i => i.id),
      selectedDefectStatus: state.selectedDefectStatus.map(i => i.id),
      selectedDefectTrafficLight: state.selectedDefectTrafficLight.map(i => i.id),
      selectedProject: state.selectedProject.map(i => i.subproject + i.delivery)
    }).then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
        resolve()
      },
      e => {
        console.log(e)
        commit(types.loading, false)
        reject(e)
      }
    )
  })
}

export const setSelectedDefect = ({ commit }, parameter) => {
  commit(types.selectedDefect, parameter)
  commit(types.status, 'showDetail')
  commit(types.loading, true)

  servicesDefect.defectDetail({ subproject: parameter.subproject, delivery: parameter.delivery }, { id: parameter.id })
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

  servicesDefect.defectTime(parameter.subproject, parameter.delivery, parameter.id)
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
