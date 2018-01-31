import { routes as testProj } from './project/testProj'
import { routes as bitiProj } from './project/bitiProj'

import { routes as trg } from './trg'

import { routes as release } from './release'

import { routes as indOperDevDefectDensity } from './indicator/operational/dev/defectDensity'
import { routes as indOperDevDefectAverangeTime } from './indicator/operational/dev/defectAverangeTime'

import { routes as indPerfDevDefectDensity } from './indicator/performance/dev/defectDensity'
import { routes as indPerfDevDefectInsideSLA } from './indicator/performance/dev/defectInsideSLA'
import { routes as indPerfDevDefectOfTSInTI } from './indicator/performance/dev/defectOfTSInTI'
import { routes as indPerfDevDefectOfTSInTIAgent } from './indicator/performance/dev/defectOfTSInTIAgent'

import { routes as projectConsult } from './projectConsult'
import { routes as grouperConsult } from './grouperConsult'
import { routes as cadGrouper } from './cadGrouper'
import { routes as cadProject } from './cadProject'
// import { routes as indicatorDev } from './indicator/dev'
import { routes as indOperTest } from './indicator/operational/test'
import { routes as defectMonitor } from './defect/defectMonitor'
import { routes as home } from './home'
import { routes as auth } from './auth'
import { routes as pulledChain } from './pulledChain'

export default [
  ...testProj,
  ...bitiProj,

  ...trg,

  ...release,

  ...indOperDevDefectDensity,
  ...indOperDevDefectAverangeTime,

  ...indPerfDevDefectDensity,
  ...indPerfDevDefectInsideSLA,
  ...indPerfDevDefectOfTSInTI,
  ...indPerfDevDefectOfTSInTIAgent,

  ...projectConsult,
  ...grouperConsult,
  ...cadGrouper,
  ...cadProject,
  // ...indicatorDev,
  ...indOperTest,
  ...defectMonitor,
  ...home,
  ...auth,
  ...pulledChain
]
