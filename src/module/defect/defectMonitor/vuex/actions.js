import * as types from './mutationsTypes'
// import services from '../services'

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

// export const load = ({ commit, state, rootState }) => {
//   if (rootState.testManuf.selectedTestManufs.length === 0 || rootState.system.selectedSystem.length === 0 || rootState.project.selectedProject.length === 0) {
//     return
//   }

//   commit(types.loading, true)

//   return new Promise((resolve, reject) => {
//     services.getByListTestManufSystemProject({
//       selectedTestManufs: rootState.testManuf.selectedTestManufs,
//       selectedSystem: rootState.system.selectedSystem,
//       selectedProject: rootState.project.selectedProject.map(i => i.subproject + i.delivery)
//     })
//     .then(
//       r => {
//         commit(types.data, r.data)
//         commit(types.loading, false)
//         resolve()
//       },
//       e => {
//         console.log(e)
//         commit(types.loading, false)
//         reject(e)
//       }
//     )
//   })
// }

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
