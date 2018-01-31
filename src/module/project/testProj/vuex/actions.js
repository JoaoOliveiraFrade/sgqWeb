import * as types from './mutationsTypes'
import services from '@/module/project/testProj/services'

import servicesOperDevDefectDensity from '@/module/indicator/operational/dev/defectDensity/services'
import servicesOperDevDefectAverangeTime from '@/module/indicator/operational/dev/defectAverangeTime/services'
import servicesOperDevDefectReopened from '@/module/indicator/operational/dev/defectReopened/services'

import servicesOperTestProductivity from '@/module/indicator/operational/test/productivity/services'
import servicesOperTestRejectionEvidence from '@/module/indicator/operational/test/rejectionEvidence/services'
import servicesOperTestDefectUnfounded from '@/module/indicator/operational/test/defectUnfounded/services'
import servicesOperTestDefectUAT from '@/module/indicator/operational/test/defectUAT/services'
import servicesOperTestDefectAverangeRetestTime from '@/module/indicator/operational/test/defectAverangeRetestTime/services'

import servicesPerfDevDefectDensity from '@/module/indicator/performance/dev/defectDensity/services'
import servicesPerfDevDefectOfTSInTI from '@/module/indicator/performance/dev/defectOfTSInTI/services'

// import servicesDefect from '@/module/defect/services'

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

export const setSelectedMonoselection = ({ commit, dispatch }, project) => {
  services.getProjectsByIds(project.id.toString()).then(r => {
    commit(types.selectedMonoselection, r.data[0])
  })

  servicesOperDevDefectDensity.dataFbyProject(project).then(r => {
    commit(types.operDevDefectDensity, r.data)
  })
  servicesOperDevDefectAverangeTime.dataFbyProject(project).then(r => {
    commit(types.operDevDefectAverangeTime, r.data)
  })
  servicesOperDevDefectReopened.dataFbyProject(project).then(r => {
    commit(types.operDevDefectReopened, r.data)
  })
  servicesOperTestProductivity.dataFbyProject(project).then(r => {
    commit(types.operTestProductivity, r.data)
  })
  servicesOperTestRejectionEvidence.dataFbyProject(project).then(r => {
    commit(types.operTestRejectionEvidence, r.data)
  })
  servicesOperTestDefectUnfounded.dataFbyProject(project).then(r => {
    commit(types.operTestDefectUnfounded, r.data)
  })
  servicesOperTestDefectUAT.dataFbyProject(project).then(r => {
    commit(types.operTestDefectUAT, r.data)
  })
  servicesOperTestDefectAverangeRetestTime.dataFbyProject(project).then(r => {
    commit(types.operTestDefectAverangeRetestTime, r.data)
  })

  servicesPerfDevDefectDensity.dataFbyProject(project).then(r => {
    commit(types.perfDevDefectDensity, r.data)
  })
  servicesPerfDevDefectOfTSInTI.dataFbyProject(project).then(r => {
    commit(types.perfDevDefectOfTSInTI, r.data)
  })

  dispatch('testProjDefect/loadDefectStatus', project, { root: true })
  dispatch('testProjDefect/loadDefectGroupOrigin', project, { root: true })
  dispatch('testProjDefect/loadCtImpactedXDefects', project, { root: true })
  dispatch('testProjDefect/loadDefectsOpen', project, { root: true })

  // servicesDefect.defectStatus(project).then(r => {
  //   commit(types.defectStatus, r.data)
  // })

  // servicesDefect.defectGroupOrigin(project).then(r => {
  //   commit(types.defectGroupOrigin, r.data)
  // })

  // services.ctImpactedXDefects(project).then(r => {
  //   commit(types.ctImpactedXDefects, r.data)
  // })

  // servicesDefect.defectsOpenInTestManuf(project).then(r => {
  //   commit(types.defectsOpenInTestManuf, r.data)
  // })

  // servicesDefect.defectsOpenInDevManuf(project).then(r => {
  //   commit(types.defectsOpenInDevManuf, r.data)
  // })
}

export const setProjectFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

// export const setSelectedProject = ({ commit }, selectedProject) => {
//   commit(types.selected, selectedProject)

//   if (selectedProject.length > 0) {
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
//         commit(types.listproject, r.data)
//         dispatch('loadFbyproject')
//       },
//       e => {
//         console.log(e)
//       }
//     )
// }

// export const loadFbyproject = ({ commit, state }) => {
//   commit(types.loading, true)
//   services.loadFbyproject(state.listproject)
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
