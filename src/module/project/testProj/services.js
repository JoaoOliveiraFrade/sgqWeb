import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // getData () {
  //   let resource = Resource.resource(paths.api + '/projects')
  //   return resource.get()
  // },

  // getOne (id) {
  //   let resource = Resource.resource(paths.api + '/projects{/id}')
  //   return resource.get({id: id})
  // },

  load () {
    let resource = Resource.resource(paths.api + '/project/testProj/data')
    return resource.get()
  },

  loadFbyDevManufsAndSystems (devManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/testProj/fbyDevManufsAndSystems')
    return resource.save(devManufsAndSystems)
  },

  loadFromTestManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/testProj/fromTestManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  loadFromAgentFbyDevManufsAndSystems (testManufsAndSystems) {
    let resource = Resource.resource(paths.api + '/project/testProj/FromAgentFbyDevManufsAndSystems')
    return resource.save(testManufsAndSystems)
  },

  loadFbySubprojectDelivery (projects) {
    let resource = Resource.resource(paths.api + '/project/testProj/loadFbySubprojectDelivery')
    return resource.save(projects)
  },

  getProjects () {
    let resource = Resource.resource(paths.api + '/project/testProj/data')
    return resource.get()
  },

  getProjectsByIds (ids) {
    let resource = Resource.resource(paths.api + '/project/testProj/byIds/{ids}')
    return resource.get({ids: ids})
  },

  getProjectBySubEnt (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/bySubprojectDelivery{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  },

  getProject (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/bySubprojectDelivery{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensityGroupMonthYear (project) {
    let resource = Resource.resource(paths.api + '/defectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDensity (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsDensity{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getReopened (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsReopened{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getdefectOfTSInTI (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsdefectOfTSInTI{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsStatus (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsStatus{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsGroupOrigin (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsGroupOrigin{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getCTsImpactedXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/CtsImpactedXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsOpenInDevManuf (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsOpenInDevManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsOpenInTestManuf (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsOpenInTestManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  // ITERATIONS

  iterations (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/iterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  iterationsActive (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/iterationsActive{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  iterationsSelected (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/iterationsSelected{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  updateIterationsActive (item) {
    let resource = Resource.resource(paths.api + '/project/testProj/UpdateIterationsActive{/id}')
    return resource.update({ id: item.projectId }, item.iterations)
  },

  updateIterationsSelected (item) {
    let resource = Resource.resource(paths.api + '/project/testProj/UpdateIterationsSelected{/id}')
    return resource.update({ id: item.projectId }, item.iterations)
  },

  ClearIterations (projectId) {
    let resource = Resource.resource(paths.api + '/project/testProj/ClearIterations{/id}')
    return resource.get({id: projectId})
  },

  // --------

  getDensityByIterations (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsDensityByProjectIterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getReopenedIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsReopenedIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getdefectOfTSInTIIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsdefectOfTSInTIIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsStatusIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsStatusIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsGroupOriginIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsGroupOriginIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getCTsImpactedXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/CtsImpactedXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsOpenInDevManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsOpenInDevManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsOpenInTestManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/DefectsOpenInTestManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
}