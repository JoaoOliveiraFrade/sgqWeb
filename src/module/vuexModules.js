// import { vuex as dashboard } from './dashboard'
// import { vuex as defectMonitor } from './defectMonitor'
import { vuex as grouperConsult } from './grouperConsult'
import { vuex as indicatorDevelopment } from './indicator/development'
// import { vuex as indicatorDevelopment2 } from './indicator/development.2'
import { vuex as indicatorProductivity } from './indicator/test/productivity'
import { vuex as indicatorRateEvidRejected } from './indicator/test/rateEvidRejected'
import { vuex as indicatorRateDefectUnfounded } from './indicator/test/rateDefectUnfounded'
import { vuex as indicatorRateDefectUat } from './indicator/test/rateDefectUat'
import { vuex as indicatorTestAverangeRetestHours } from './indicator/test/averangeRetestHours'
import { vuex as defectQueue } from './defect/defectQueue'
import { vuex as defectStatus } from './defect/defectStatus'
import { vuex as defectTrafficLight } from './defect/defectTrafficLight'
import { vuex as defectMonitor } from './defect/defectMonitor'
import { vuex as indicatorTest } from './indicator/test'
import { vuex as indicatorAccomplishment } from './indicator/accomplishment'
import { vuex as testManuf } from './testManuf'
import { vuex as devManuf } from './devManuf'
import { vuex as system } from './system'
import { vuex as project } from './project'
import { vuex as auth } from './auth'
import { vuex as cep } from './cep'
import { vuex as count } from './count'
import { vuex as task } from './task'
import { vuex as brewery } from './brewery'
import { vuex as pulledChain } from './pulledChain'

/*
export default {
  auth,
  dashboard,
  defectMonitor
}
*/

export default {
  grouperConsult,
  indicatorDevelopment,
  // indicatorDevelopment2,
  indicatorProductivity,
  indicatorRateEvidRejected,
  indicatorRateDefectUnfounded,
  indicatorRateDefectUat,
  indicatorTestAverangeRetestHours,
  indicatorTest,
  indicatorAccomplishment,
  defectQueue,
  defectStatus,
  defectTrafficLight,
  defectMonitor,
  testManuf,
  devManuf,
  system,
  project,
  auth,
  cep,
  count,
  task,
  brewery,
  pulledChain
}
