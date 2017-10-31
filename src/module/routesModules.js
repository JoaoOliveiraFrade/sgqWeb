import { routes as project } from './project'

import { routes as indicatorPerfDevDefectDensity } from './indicator/perfDev/defectDensity'
import { routes as indicatorPerfDevDefectOfTSInTI } from './indicator/perfDev/defectOfTSInTI'
import { routes as indicatorPerfDevDefectInsideSLA } from './indicator/perfDev/defectInsideSLA'

import { routes as projectConsult } from './projectConsult'
import { routes as grouperConsult } from './grouperConsult'
import { routes as cadGrouper } from './cadGrouper'
import { routes as cadProject } from './cadProject'
// import { routes as indicatorDev } from './indicator/dev'
import { routes as indicatorOperTest } from './indicator/operTest'
import { routes as indicatorDevDefectAverangeTime } from './indicator/operDev/defectAverangeTime'
import { routes as defectMonitor } from './defect/defectMonitor'
import { routes as home } from './home'
import { routes as auth } from './auth'
import { routes as pulledChain } from './pulledChain'

export default [
  ...project,

  ...indicatorPerfDevDefectDensity,
  ...indicatorPerfDevDefectOfTSInTI,
  ...indicatorPerfDevDefectInsideSLA,

  ...projectConsult,
  ...grouperConsult,
  ...cadGrouper,
  ...cadProject,
  // ...indicatorDev,
  ...indicatorOperTest,
  ...indicatorDevDefectAverangeTime,
  ...defectMonitor,
  ...home,
  ...auth,
  ...pulledChain
]
