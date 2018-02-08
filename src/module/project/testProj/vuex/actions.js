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

// import servicesPerfDevDefectDensity from '@/module/indicator/performance/dev/defectDensity/services'
// import servicesPerfDevDefectOfTSInTI from '@/module/indicator/performance/dev/defectOfTSInTI/services'

// import servicesDefect from '@/module/defect/services'

export const loadData = ({ commit }) => {
  commit(types.loading, true)
  services.loadData()
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

export const setState = ({ commit }, paramenter) => {
  commit(types.state, paramenter)
}

export const setSelectedMonoselection = ({ commit, dispatch }, project) => {
  services.getProjectsByIds(project.id.toString()).then(r => {
    commit(types.selectedMonoselection, r.data[0])

    if (r.data[0].iterationsActive !== null) {
      let x1 = r.data[0].iterationsActive
      let x2 = x1.substring(1)
      let x3 = x2.substring(0, x1.length - 2)
      commit(types.iterationsActive, x3.split("','"))
    }

    commit(types.state, 'show')
  })

  services.loadIterations(project).then(r => {
    commit(types.iterations, r.data)
  })
  // services.loadIterationsActive(project).then(r => {
  //   if (r.data.length === 1) {
  //     if (r.data[0] === '') {
  //       r.data = []
  //     }
  //   }
  //   commit(types.iterationsActive, r.data)
  // })
  // services.loadIterationsSelected(project).then(r => {
  //   commit(types.iterationsSelected, r.data)
  // })

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

  // servicesPerfDevDefectDensity.dataFbyProject(project).then(r => {
  //   commit(types.perfDevDefectDensity, r.data)
  // })
  // servicesPerfDevDefectOfTSInTI.dataFbyProject(project).then(r => {
  //   commit(types.perfDevDefectOfTSInTI, r.data)
  // })

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

export const setIterationsActive = ({ commit, state }, iterationsActive) => {
  commit(types.iterationsActive, iterationsActive)
  // services.updateIterationsActive(state.selectedMonoselection, iterationsActive).then(r => {
  //   commit(types.iterationsActive, iterationsActive)
  // })
}

export const setIterationsSelected = ({ commit, state }, iterationsSelected) => {
  commit(types.iterationsSelected, iterationsSelected)
  // services.updateIterationsSelected(state.selectedMonoselection, iterationsSelected).then(r => {
  //   commit(types.iterationsSelected, iterationsSelected)
  // })
}

export const updateSelectedMonoselection = ({ commit, state }, iterationsSelected) => {
  services.update(state.selectedMonoselection).then(r => {
  })
}

export const tryUpdateSelectedMonoselection = ({ commit, state }) => {
  // return new Promise((resolve, reject) => {
  //   services.update(state.selectedMonoselection)
  //     .then(d => {
  //       resolve()
  //     },
  //     e => {
  //       reject(e)
  //     })
  // })
  console.log(state.selectedMonoselection)
  services.updateTestProj(state.selectedMonoselection).then(r => {
  })
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

export const loadTestStatus = ({ commit }) => {
  services.loadTestStatus()
    .then(
      r => {
        commit(types.testStatus, r.data)
      },
      e => {
        console.log(e)
      }
    )
}

export const loadReleasesLossReason = ({ commit }) => {
  services.loadReleasesLossReason()
    .then(
      r => {
        commit(types.releasesLossReason, r.data)
      },
      e => {
        console.log(e)
      }
    )
}
