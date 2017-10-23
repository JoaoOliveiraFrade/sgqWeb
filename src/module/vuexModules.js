import { vuex as grouperConsult } from './grouperConsult'
import { vuex as indicatorDev } from './indicator/dev'
import { vuex as indicatorTest } from './indicator/test'
import { vuex as indicatorProductivity } from './indicator/test/productivity'
import { vuex as indicatorRateEvidRejected } from './indicator/test/rateEvidRejected'
import { vuex as indicatorRateDefectUnfounded } from './indicator/test/rateDefectUnfounded'
import { vuex as indicatorRateDefectUat } from './indicator/test/rateDefectUat'
import { vuex as indicatorTestAverangeRetestHours } from './indicator/test/averangeRetestHours'
import { vuex as defectQueue } from './defect/defectQueue'
import { vuex as defectStatus } from './defect/defectStatus'
import { vuex as defectTrafficLight } from './defect/defectTrafficLight'
import { vuex as defectMonitor } from './defect/defectMonitor'
import { vuex as indicatorAccomplishmentQueue } from './indicator/accomplishmentQueue'
import { vuex as indicatorRateDefectsWithinSLA } from './indicator/accomplishmentQueue/rateDefectsWithinSLA'
import { vuex as indicatorPerfDefectDensity } from './indicator/perf/defectDensity'
import { vuex as indicatorPerfDefectOfTSInTI } from './indicator/perf/defectOfTSInTI'
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

export default {
  grouperConsult,
  indicatorDev,
  indicatorTest,
  indicatorProductivity,
  indicatorRateEvidRejected,
  indicatorRateDefectUnfounded,
  indicatorRateDefectUat,
  indicatorTestAverangeRetestHours,
  indicatorAccomplishmentQueue,
  indicatorRateDefectsWithinSLA,
  indicatorPerfDefectDensity,
  indicatorPerfDefectOfTSInTI,
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
