import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // getAll () {
  //   let resource = Resource.resource(paths.api + '/projects')
  //   return resource.get()
  // },

  // getOne (id) {
  //   let resource = Resource.resource(paths.api + '/projects{/id}')
  //   return resource.get({id: id})
  // },

  load () {
    let resource = Resource.resource(paths.api + '/project/all')
    return resource.get()
  },

  loadOfTestManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/ofTestManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  loadOfQueueFbyDevManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/ofQueueFbyDevManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  loadFbySubprojectDelivery (projects) {
    let resource = Resource.resource(paths.api + '/project/loadFbySubprojectDelivery')
    return resource.save(projects)
  },

  getProjects () {
    let resource = Resource.resource(paths.api + '/project/all')
    return resource.get()
  },

  getProjectsByIds (ids) {
    let resource = Resource.resource(paths.api + '/project/byIds/{ids}')
    return resource.get({ids: ids})
  },

  getProjectBySubEnt (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/project/bySubprojectDelivery{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  },

  getProject (project) {
    let resource = Resource.resource(paths.api + '/project/bySubprojectDelivery{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensityGroupMonthYear (project) {
    let resource = Resource.resource(paths.api + '/defectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensity (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getAverangeTime (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsAverangeTime{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getAverangeTimeBySeverity (project, severity) {
    let resource = Resource.resource(paths.api + '/project/DefectsAverangeTime{/subproject}{/delivery}{/severity}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery, severity: severity })
  },

  getReopened (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsReopened{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDetectableInDev (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsDetectableInDev{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getStatusLastDays (project) {
    let resource = Resource.resource(paths.api + '/project/StatusLastDays{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getStatusGroupMonth (project) {
    let resource = Resource.resource(paths.api + '/project/StatusGroupMonth{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsStatus (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsStatus{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsGroupOrigin (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsGroupOrigin{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getCTsImpactedXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/CtsImpactedXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsOpenInDevManuf (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsOpenInDevManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsOpenInTestManuf (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsOpenInTestManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/ProductivityXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefectsGroupWeekly (project) {
    let resource = Resource.resource(paths.api + '/project/ProductivityXDefectsGroupWeekly{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  // ITERATIONS

  getIterations (project) {
    let resource = Resource.resource(paths.api + '/project/Iterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getIterationsActive (project) {
    let resource = Resource.resource(paths.api + '/project/IterationsActive{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getIterationsSelected (project) {
    let resource = Resource.resource(paths.api + '/project/IterationsSelected{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  updateIterationsActive (item) {
    let resource = Resource.resource(paths.api + '/project/UpdateIterationsActive{/id}')
    return resource.update({ id: item.projectId }, item.iterations)
  },

  updateIterationsSelected (item) {
    let resource = Resource.resource(paths.api + '/project/UpdateIterationsSelected{/id}')
    return resource.update({ id: item.projectId }, item.iterations)
  },

  ClearIterations (projectId) {
    let resource = Resource.resource(paths.api + '/project/ClearIterations{/id}')
    return resource.get({id: projectId})
  },

  // --------

  getDensityByIterations (project) {
    let resource = Resource.resource(paths.api + '/project/DefectsDensityByProjectIterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getAverangeTimeBySeverityIterations (project, severity) {
    let resource = Resource.resource(paths.api + '/project/DefectsAverangeTimeIterations{/subproject}{/delivery}{/severity}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery, severity: severity })
  },

  getReopenedIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/DefectsReopenedIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDetectableInDevIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/DefectsDetectableInDevIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getStatusLastDaysIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/StatusLastDaysIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getStatusGroupMonthIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/StatusGroupMonthIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsStatusIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/DefectsStatusIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsGroupOriginIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/DefectsGroupOriginIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getCTsImpactedXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/CtsImpactedXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsOpenInDevManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/DefectsOpenInDevManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsOpenInTestManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/DefectsOpenInTestManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/ProductivityXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsGroupWeeklyIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/ProductivityXDefectsGroupWeeklyIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
}
