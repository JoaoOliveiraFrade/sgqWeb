import { routes as projectConsult } from './projectConsult'
import { routes as grouperConsult } from './grouperConsult'
import { routes as cadGrouper } from './cadGrouper'
import { routes as cadProject } from './cadProject'
import { routes as indicatorDev } from './indicator/dev'
import { routes as indicatorTest } from './indicator/test'
import { routes as indicatorAccomplishmentQueue } from './indicator/accomplishmentQueue'
import { routes as indicatorPerfDefectDensity } from './indicator/perf/defectDensity'
import { routes as indicatorPerfDefectOfTSInTI } from './indicator/perf/defectOfTSInTI'
import { routes as defectMonitor } from './defect/defectMonitor'
import { routes as cep } from './cep'
import { routes as count } from './count'
import { routes as home } from './home'
import { routes as task } from './task'
import { routes as auth } from './auth'
import { routes as brewery } from './brewery'
import { routes as pulledChain } from './pulledChain'

export default [
  ...projectConsult,
  ...grouperConsult,
  ...cadGrouper,
  ...cadProject,
  ...indicatorDev,
  ...indicatorTest,
  ...indicatorAccomplishmentQueue,
  ...indicatorPerfDefectDensity,
  ...indicatorPerfDefectOfTSInTI,
  ...defectMonitor,
  ...cep,
  ...count,
  ...home,
  ...task,
  ...auth,
  ...brewery,
  ...pulledChain
]
