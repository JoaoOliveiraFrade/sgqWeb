import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  lastDays (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/lastDays/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  groupMonth (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/groupMonth/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/ProductivityXDefects/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefectsGroupWeekly (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/ProductivityXDefectsGroupWeekly/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  // iterations
  // ====================================

  lastDaysByIteration (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/lastDaysByIteration/{subproject}/{delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  groupMonthByIteration (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/groupMonthByIteration/{subproject}/{delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
  /*
  getProductivityXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/ProductivityXDefectsIterations/{subproject}/{delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsGroupWeeklyIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/execution/ProductivityXDefectsGroupWeeklyIterations/{subproject}/{delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  } */
}
