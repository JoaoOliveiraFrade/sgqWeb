// import { vuex as dashboard } from './dashboard'
// import { vuex as defectMonitor } from './defectMonitor'
import { vuexStore as grouperConsult } from './grouperConsult'
import { vuexStore as indicatorOfDevelopment } from './indicator/development'
import { vuexStore as indicatorOfTest } from './indicator/test'
import { vuexStore as testManuf } from './testManuf'
import { vuexStore as system } from './system'
import { vuexStore as project } from './project'
import { vuexStore as auth } from './auth'
import { vuexStore as cep } from './cep'
import { vuexStore as count } from './count'
import { vuexStore as task } from './task'
import { vuexStore as brewery } from './brewery'
import { vuexStore as pulledChain } from './pulledChain'

/*
export default {
  auth,
  dashboard,
  defectMonitor
}
*/
export default {
  grouperConsult,
  indicatorOfDevelopment,
  indicatorOfTest,
  testManuf,
  system,
  project,
  auth,
  cep,
  count,
  task,
  brewery,
  pulledChain
}
