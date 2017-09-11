import * as types from './mutationsTypes'
import services from '@/module/project/services'

export const load = ({ commit }) => {
  services.load()
    .then(
      r => {
        console.log(r.data)
        commit(types.data, r.data)
      },
      e => console.log(e)
    )
}

// export const loadProjects = ({ commit }, parameter) => {
//   services.getProjectsByTestManufsAndSystems(parameter)
//     .then(
//       r => {
//         commit(types.projects, r.data)
//       },
//       e => console.log(e)
//     )
// }

export const loadOfTestManufsAndSystems = ({ commit }, parameter) => {
  commit(types.loading, true)
  services.loadOfTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.ofTestManufsAndSystems, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const setSelected = ({ commit }, paramenter) => {
  commit(types.selected, paramenter)
}

export const setProjectFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

// export const setSelectedProjects = ({ commit }, selectedProjects) => {
//   commit(types.selected, selectedProjects)

//   if (selectedProjects.length > 0) {
//     commit(types.projectConfirmed, true)
//   } else {
//     commit(types.projectConfirmed, false)
//   }
// }
