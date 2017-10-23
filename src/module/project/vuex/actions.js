import * as types from './mutationsTypes'
import services from '@/module/project/services'

export const load = ({ commit }) => {
  commit(types.loading, true)
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
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

export const loadFbyDevManufsAndSystems = ({ commit }, parameter) => {
  commit(types.loading, true)
  services.loadFbyDevManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

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

export const loadOfQueueFbyDevManufsAndSystems = ({ commit }, parameter) => {
  commit(types.loading, true)
  services.loadOfQueueFbyDevManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.ofDevManufsAndSystems, r.data)
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

// export const setDevManufs = ({ commit }, paramenter) => {
//   commit(types.devManufs, paramenter)
// }

// export const loadOfQueueGroupDevManufsAndSystems = ({ commit, dispatch }) => {
//   services.loadOfQueueGroupDevManufsAndSystems()
//     .then(
//       r => {
//         commit(types.listSubprojectDelivery, r.data)
//         dispatch('loadFbySubprojectDelivery')
//       },
//       e => {
//         console.log(e)
//       }
//     )
// }

// export const loadFbySubprojectDelivery = ({ commit, state }) => {
//   commit(types.loading, true)
//   services.loadFbySubprojectDelivery(state.listSubprojectDelivery)
//     .then(
//       r => {
//         commit(types.data, r.data)
//         commit(types.loading, false)
//       },
//       e => {
//         console.log(e)
//         commit(types.loading, false)
//       }
//     )
// }
