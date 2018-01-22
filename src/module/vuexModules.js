import { vuex as auth } from './auth'

import { vuex as devManuf } from './devManuf'
import { vuex as testManuf } from './testManuf'
import { vuex as system } from './system/system'
import { vuex as systemFromAgent } from './system/systemFromAgent'

import { vuex as release } from './release'

import { vuex as trg } from './project/trg'

import { vuex as testProj } from './project/testProj'
import { vuex as testPlan } from './project/testProj/module/testPlan'
import { vuex as execution } from './project/testProj/module/execution'

import { vuex as bitiProj } from './project/bitiProj'

import { vuex as indOperDevDefectDensity } from './indicator/operational/dev/defectDensity'
import { vuex as indOperDevDefectAverangeTime } from './indicator/operational/dev/defectAverangeTime'

import { vuex as indOperTestProductivity } from './indicator/operational/test/productivity'
// import { vuex as indOperTestRejectionEvidence } from './indicator/operational/test/rejectionEvidence'
// import { vuex as indOperTestDefectUnfounded } from './indicator/operational/test/defectUnfounded'
// import { vuex as indOperTestDefectUAT } from './indicator/operational/test/defectUAT'
// import { vuex as indOperTestDefectAverangeRetestTime } from './indicator/operational/test/defectAverangeRetestTime'
// import { vuex as indOperTest } from './indicator/operational/test'

// import { vuex as indPerfDevDefectDensity } from './indicator/performance/dev/defectDensity'
// import { vuex as indPerfDevDefectInsideSLA } from './indicator/performance/dev/defectInsideSLA'
// import { vuex as indPerfDevDefectOfTSInTI } from './indicator/performance/dev/defectOfTSInTI'
// import { vuex as indPerfDevDefectOfTSInTIAgent } from './indicator/performance/dev/defectOfTSInTIAgent'

// import { vuex as grouperConsult } from './grouperConsult'
// import { vuex as indicatorDev } from './indicator/dev'
import { vuex as defectQueue } from './defect/defectQueue'
import { vuex as defectStatus } from './defect/defectStatus'
import { vuex as defectTrafficLight } from './defect/defectTrafficLight'
import { vuex as defectMonitor } from './defect/defectMonitor'
// import { vuex as indicatorDefectInsideSLA } from './indicator/performance/dev/DefectInsideSLA'

import { vuex as pulledChain } from './pulledChain'

export default {
  auth,

  devManuf,
  testManuf,
  system,
  systemFromAgent,

  release,

  trg,

  testProj,
  testPlan,
  execution,

  bitiProj,

  indOperDevDefectDensity,
  indOperDevDefectAverangeTime,

  indOperTestProductivity,
  // indOperTestRejectionEvidence,
  // indOperTestDefectUnfounded,
  // indOperTestDefectUAT,
  // indOperTestDefectAverangeRetestTime,
  // indOperTest,

  // indPerfDevDefectDensity,
  // indPerfDevDefectInsideSLA,
  // indPerfDevDefectOfTSInTI,
  // indPerfDevDefectOfTSInTIAgent,

  // grouperConsult,
  // indicatorDev,

  // indicatorDefectInsideSLA,

  defectQueue,
  defectStatus,
  defectTrafficLight,
  defectMonitor,
  // cep,
  // count,
  // task,
  // brewery,
  pulledChain
}
