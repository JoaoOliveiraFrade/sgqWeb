import { routes as project } from './project'
import { routes as projectConsult } from './projectConsult'
import { routes as grouperConsult } from './grouperConsult'
import { routes as cadGrouper } from './cadGrouper'
import { routes as cadProject } from './cadProject'
// import { routes as indicatorDev } from './indicator/dev'
import { routes as indicatorOperTest } from './indicator/operTest'
import { routes as indicatorAccomplishmentQueue } from './indicator/accomplishmentQueue'
import { routes as indicatorPerfDefectDensity } from './indicator/perfDev/defectDensity'
import { routes as indicatorPerfDefectOfTSInTI } from './indicator/perfDev/defectOfTSInTI'
import { routes as indicatorDevDefectAverangeTime } from './indicator/operDev/defectAverangeTime'
import { routes as defectMonitor } from './defect/defectMonitor'
import { routes as cep } from './cep'
import { routes as count } from './count'
import { routes as home } from './home'
import { routes as task } from './task'
import { routes as auth } from './auth'
import { routes as brewery } from './brewery'
import { routes as pulledChain } from './pulledChain'

export default [
  ...project,
  ...projectConsult,
  ...grouperConsult,
  ...cadGrouper,
  ...cadProject,
  // ...indicatorDev,
  ...indicatorOperTest,
  ...indicatorAccomplishmentQueue,
  ...indicatorPerfDefectDensity,
  ...indicatorPerfDefectOfTSInTI,
  ...indicatorDevDefectAverangeTime,
  ...defectMonitor,
  ...cep,
  ...count,
  ...home,
  ...task,
  ...auth,
  ...brewery,
  ...pulledChain
]
