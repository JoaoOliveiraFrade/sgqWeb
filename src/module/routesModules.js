/*
import { routes as home } from './home'
import { routes as releases } from './releases'
import { routes as project } from './project'
import { routes as grouper } from './grouper'
import { routes as trg } from './trg'
import { routes as dashboard } from './dashboard'
import { routes as defectMonitor } from './defectMonitor'
import { routes as indicatorOfDevelopment } from './indicatorOfDevelopment'
import { routes as bptCadastroStatus } from './bptCadastroStatus'
import { routes as bptValidacaoPlano } from './bptValidacaoPlano'
import { routes as bptAcompanhamentoExecucao } from './bptAcompanhamentoExecucao'
import { routes as cadProjects } from './cadProjects'
import { routes as auth } from './auth'
export default [
  ...home,
  ...releases,
  ...project,
  ...grouper,
  ...trg,
  ...dashboard,
  ...defectMonitor,
  ...indicatorOfDevelopment,
  ...bptCadastroStatus,
  ...bptValidacaoPlano,
  ...bptAcompanhamentoExecucao,
  ...cadGroupers,
  ...cadProjects,
  ...auth
]
*/

import { routes as projectConsult } from './projectConsult'
import { routes as grouperConsult } from './grouperConsult'
import { routes as cadGrouper } from './cadGrouper'
import { routes as cadProject } from './cadProject'
import { routes as indicatorOfDevelopment } from './indicator/development'
import { routes as indicatorOfDevelopment2 } from './indicator/development.2'
import { routes as indicatorOfTest } from './indicator/test'
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
  ...indicatorOfDevelopment,
  ...indicatorOfDevelopment2,
  ...indicatorOfTest,
  ...cep,
  ...count,
  ...home,
  ...task,
  ...auth,
  ...brewery,
  ...pulledChain
]
