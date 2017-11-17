import { vuex as auth } from './auth'

import { vuex as devManuf } from './devManuf'
import { vuex as testManuf } from './testManuf'
import { vuex as system } from './system/system'
import { vuex as systemFromAgent } from './system/systemFromAgent'

import { vuex as project } from './project/project'
import { vuex as projectBiti } from './project/biti'

import { vuex as indOperDevDefectDensity } from './indicator/operational/dev/defectDensity'
import { vuex as indOperDevDefectAverangeTime } from './indicator/operational/dev/defectAverangeTime'

import { vuex as indPerfDevDefectDensity } from './indicator/performance/dev/defectDensity'
import { vuex as indPerfDevDefectInsideSLA } from './indicator/performance/dev/defectInsideSLA'
import { vuex as indPerfDevDefectOfTSInTI } from './indicator/performance/dev/defectOfTSInTI'
import { vuex as indPerfDevDefectOfTSInTIAgent } from './indicator/performance/dev/defectOfTSInTIAgent'

// import { vuex as grouperConsult } from './grouperConsult'
// import { vuex as indicatorDev } from './indicator/dev'
// import { vuex as defectQueue } from './defect/defectQueue'
// import { vuex as defectStatus } from './defect/defectStatus'
// import { vuex as defectTrafficLight } from './defect/defectTrafficLight'
// import { vuex as defectMonitor } from './defect/defectMonitor'
// import { vuex as indicatorDefectInsideSLA } from './indicator/performance/dev/DefectInsideSLA'

// import { vuex as indOperTestProductivity } from './indicator/operational/test/productivity'
// import { vuex as indOperTestRejectionEvidence } from './indicator/operational/test/rejectionEvidence'
// import { vuex as indOperTestDefectUnfounded } from './indicator/operational/test/defectUnfounded'
// import { vuex as indOperTestDefectUAT } from './indicator/operational/test/defectUAT'
// import { vuex as indOperTestDefectAverangeRetestTime } from './indicator/operational/test/defectAverangeRetestTime'
// import { vuex as indOperTest } from './indicator/operational/test'

// import { vuex as pulledChain } from './pulledChain'

export default {
  auth,

  devManuf,
  testManuf,
  system,
  systemFromAgent,

  project,
  projectBiti,

  indOperDevDefectDensity,
  indOperDevDefectAverangeTime,

  indPerfDevDefectDensity,
  indPerfDevDefectInsideSLA,
  indPerfDevDefectOfTSInTI,
  indPerfDevDefectOfTSInTIAgent

  // grouperConsult,
  // indicatorDev,

  // indicatorDefectInsideSLA,

  // indOperTestProductivity,
  // indOperTestRejectionEvidence,
  // indOperTestDefectUnfounded,
  // indOperTestDefectUAT,
  // indOperTestDefectAverangeRetestTime,
  // indOperTest,

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
