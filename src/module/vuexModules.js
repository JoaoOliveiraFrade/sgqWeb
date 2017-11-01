import { vuex as auth } from './auth'

import { vuex as devManuf } from './devManuf'
import { vuex as testManuf } from './testManuf'
import { vuex as system } from './system'

import { vuex as project } from './project'

import { vuex as indicatorOperDevDefectDensity } from './indicator/operDev/defectDensity'

import { vuex as indicatorPerfDevDefectDensity } from './indicator/perfDev/defectDensity'
import { vuex as indicatorPerfDevDefectInsideSLA } from './indicator/perfDev/defectInsideSLA'
import { vuex as indicatorPerfDevDefectOfTSInTI } from './indicator/perfDev/defectOfTSInTI'
import { vuex as indicatorPerfDevDefectOfTSInTIAgent } from './indicator/perfDev/defectOfTSInTIAgent'

// import { vuex as grouperConsult } from './grouperConsult'
// import { vuex as indicatorDev } from './indicator/dev'
// import { vuex as defectQueue } from './defect/defectQueue'
// import { vuex as defectStatus } from './defect/defectStatus'
// import { vuex as defectTrafficLight } from './defect/defectTrafficLight'
// import { vuex as defectMonitor } from './defect/defectMonitor'
// import { vuex as indicatorDefectInsideSLA } from './indicator/perfDev/DefectInsideSLA'

// import { vuex as indicatorOperTestProductivity } from './indicator/operTest/productivity'
// import { vuex as indicatoroperTestRejectionEvidence } from './indicator/operTest/rejectionEvidence'
// import { vuex as indicatorOperTestDefectUnfounded } from './indicator/operTest/defectUnfounded'
// import { vuex as indicatorOperTestDefectUAT } from './indicator/operTest/defectUAT'
// import { vuex as indicatorOperTestDefectAverangeRetestTime } from './indicator/operTest/defectAverangeRetestTime'
// import { vuex as indicatorOperTest } from './indicator/operTest'

// import { vuex as pulledChain } from './pulledChain'

export default {
  auth,

  devManuf,
  testManuf,
  system,

  project,

  indicatorOperDevDefectDensity,

  indicatorPerfDevDefectDensity,
  indicatorPerfDevDefectInsideSLA,
  indicatorPerfDevDefectOfTSInTI,
  indicatorPerfDevDefectOfTSInTIAgent

  // grouperConsult,
  // indicatorDev,

  // indicatorDefectInsideSLA,

  // indicatorOperTestProductivity,
  // indicatoroperTestRejectionEvidence,
  // indicatorOperTestDefectUnfounded,
  // indicatorOperTestDefectUAT,
  // indicatorOperTestDefectAverangeRetestTime,
  // indicatorOperTest,

  // defectQueue,
  // defectStatus,
  // defectTrafficLight,
  // defectMonitor,
  // cep,
  // count,
  // task,
  // brewery,
  // pulledChain
}
