import * as types from './mutationsTypes'
// import services from '../services'

export const setSelectedProjects = ({ commit }, selected) => {
  commit(types.setSelectedProjects, selected)
}
// export const load = ({ commit, state, rootState }) => {
//   if (rootState.testManuf.selectedTestManufs.length === 0 || rootState.system.selectedSystems.length === 0 || rootState.project.selectedProjects.length === 0) {
//     return
//   }

//   commit(types.loading, true)

//   return new Promise((resolve, reject) => {
//     services.getByListTestManufSystemProject({
//       selectedTestManufs: rootState.testManuf.selectedTestManufs,
//       selectedSystems: rootState.system.selectedSystems,
//       selectedProjects: rootState.project.selectedProjects.map(i => i.subproject + i.delivery)
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
//         reject()
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