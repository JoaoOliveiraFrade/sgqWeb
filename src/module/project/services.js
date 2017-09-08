import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // getAll () {
  //   let resource = Resource.resource(paths.api + '/projects')
  //   return resource.get()
  // },

  // getOne (id) {
  //   let resource = Resource.resource(paths.api + '/Projects{/id}')
  //   return resource.get({id: id})
  // },

  getAll () {
    let resource = Resource.resource(paths.api + '/project/all')
    return resource.get()
  },

  getProjects () {
    let resource = Resource.resource(paths.api + '/Project/All')
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

  getProjectsByTestManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/Project/ByTestManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  getDensityGroupMonthYear (project) {
    let resource = Resource.resource(paths.api + '/defectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensity (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getAverangeTime (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsAverangeTime{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getAverangeTimeBySeverity (project, severity) {
    let resource = Resource.resource(paths.api + '/Project/DefectsAverangeTime{/subproject}{/delivery}{/severity}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery, severity: severity })
  },

  getReopened (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsReopened{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDetectableInDev (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsDetectableInDev{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getStatusLastDays (project) {
    let resource = Resource.resource(paths.api + '/Project/StatusLastDays{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getStatusGroupMonth (project) {
    let resource = Resource.resource(paths.api + '/Project/StatusGroupMonth{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsStatus (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsStatus{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsGroupOrigin (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsGroupOrigin{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getCTsImpactedXDefects (project) {
    let resource = Resource.resource(paths.api + '/Project/CtsImpactedXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsOpenInDevManuf (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsOpenInDevManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsOpenInTestManuf (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsOpenInTestManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefects (project) {
    let resource = Resource.resource(paths.api + '/Project/ProductivityXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefectsGroupWeekly (project) {
    let resource = Resource.resource(paths.api + '/Project/ProductivityXDefectsGroupWeekly{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  // ITERATIONS

  getIterations (project) {
    let resource = Resource.resource(paths.api + '/Project/Iterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getIterationsActive (project) {
    let resource = Resource.resource(paths.api + '/Project/IterationsActive{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getIterationsSelected (project) {
    let resource = Resource.resource(paths.api + '/Project/IterationsSelected{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  updateIterationsActive (item) {
    let resource = Resource.resource(paths.api + '/Project/UpdateIterationsActive{/id}')
    return resource.update({ id: item.projectId }, item.iterations)
  },

  updateIterationsSelected (item) {
    let resource = Resource.resource(paths.api + '/Project/UpdateIterationsSelected{/id}')
    return resource.update({ id: item.projectId }, item.iterations)
  },

  ClearIterations (projectId) {
    let resource = Resource.resource(paths.api + '/Project/ClearIterations{/id}')
    return resource.get({id: projectId})
  },

  // --------

  getDensityByIterations (project) {
    let resource = Resource.resource(paths.api + '/Project/DefectsDensityByProjectIterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getAverangeTimeBySeverityIterations (project, severity) {
    let resource = Resource.resource(paths.api + '/Project/DefectsAverangeTimeIterations{/subproject}{/delivery}{/severity}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery, severity: severity })
  },

  getReopenedIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/DefectsReopenedIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDetectableInDevIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/DefectsDetectableInDevIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getStatusLastDaysIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/StatusLastDaysIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getStatusGroupMonthIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/StatusGroupMonthIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsStatusIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/DefectsStatusIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsGroupOriginIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/DefectsGroupOriginIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getCTsImpactedXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/CtsImpactedXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsOpenInDevManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/DefectsOpenInDevManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsOpenInTestManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/DefectsOpenInTestManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/ProductivityXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsGroupWeeklyIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/Project/ProductivityXDefectsGroupWeeklyIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
}
