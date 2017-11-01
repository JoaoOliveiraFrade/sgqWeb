import * as types from './mutationsTypes'
import services from '@/module/project/services'

import servicesOperDevDefectDensity from '@/module/indicator/operDev/defectDensity/services'
import servicesOperDevDefectAverangeTime from '@/module/indicator/operDev/defectAverangeTime/services'
import servicesOperDevDefectReopened from '@/module/indicator/operDev/defectReopened/services'

import servicesOperTestProductivity from '@/module/indicator/operTest/productivity/services'
import servicesOperTestRejectionEvidence from '@/module/indicator/operTest/rejectionEvidence/services'
import servicesOperTestDefectUnfounded from '@/module/indicator/operTest/defectUnfounded/services'
import servicesOperTestDefectUAT from '@/module/indicator/operTest/defectUAT/services'
import servicesOperTestDefectAverangeRetestTime from '@/module/indicator/operTest/defectAverangeRetestTime/services'

import servicesPerfDevDefectDensity from '@/module/indicator/perfDev/defectDensity/services'
import servicesPerfDevDefectOfTSInTI from '@/module/indicator/perfDev/defectOfTSInTI/services'

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

export const loadFromTestManufsAndSystems = ({ commit }, parameter) => {
  commit(types.loading, true)
  services.loadFromTestManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.fromTestManufsAndSystems, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadFromAgentFbyDevManufsAndSystems = ({ commit }, parameter) => {
  commit(types.loading, true)
  services.loadFromAgentFbyDevManufsAndSystems(parameter)
    .then(
      r => {
        commit(types.fromDevManufsAndSystems, r.data)
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

export const setSelectedMonoselection = ({ commit }, project) => {
  services.getProjectsByIds(project.id.toString())
    .then(r => {
      commit(types.selectedMonoselection, r.data[0])
    }
  )

  servicesOperDevDefectDensity.defectDensityFbyProject(project)
    .then(r => {
      commit(types.operDevDefectDensity, r.data)
    }
  )
  servicesOperDevDefectAverangeTime.fbyProject(project)
    .then(r => {
      commit(types.operDevDefectAverangeTime, r.data)
    }
  )
  servicesOperDevDefectReopened.fbyProject(project)
    .then(r => {
      commit(types.operDevDefectReopened, r.data)
    }
  )

  servicesOperTestProductivity.fbyProject(project)
    .then(r => {
      commit(types.operTestProductivity, r.data)
    }
  )
  servicesOperTestRejectionEvidence.fbyProject(project)
    .then(r => {
      commit(types.operTestRejectionEvidence, r.data)
    }
  )
  servicesOperTestDefectUnfounded.fbyProject(project)
    .then(r => {
      commit(types.operTestDefectUnfounded, r.data)
    }
  )
  servicesOperTestDefectUAT.fbyProject(project)
    .then(r => {
      commit(types.operTestDefectUAT, r.data)
    }
  )
  servicesOperTestDefectAverangeRetestTime.fbyProject(project)
    .then(r => {
      commit(types.operTestDefectAverangeRetestTime, r.data)
    }
  )

  servicesPerfDevDefectDensity.defectDensityFbyProject(project)
    .then(r => {
      commit(types.perfDevDefectDensity, r.data)
    }
  )
  servicesPerfDevDefectOfTSInTI.fbyProject(project)
    .then(r => {
      commit(types.perfDevDefectOfTSInTI, r.data)
    }
  )
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

// export const loadFromAgentGroupDevManufsAndSystems = ({ commit, dispatch }) => {
//   services.loadFromAgentGroupDevManufsAndSystems()
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
