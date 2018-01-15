import Resource from '@/http/vueResource'
import { paths } from '@/environment'

// const currentProfile = JSON.parse(window.localStorage.getItem('current-profile'))

export default {
  // getData () {
  //   let resource = Resource.resource(paths.api + '/Projects{/id}')
  //   return resource.get({})
  // },

  // getOne (id) {
  //   let resource = Resource.resource(paths.api + '/Projects{/id}')
  //   return resource.get({id: id})
  // },

  getProjects () {
    let resource = Resource.resource(paths.api + '/project/testProj/data')
    return resource.get()
  },

  getProjectsByIds (ids) {
    let resource = Resource.resource(paths.api + '/project/testProj/byIds/{ids}')
    return resource.get({ids: ids})
  },

  getProjectBySubEnt (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/byproject{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  },

  getProject (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/byproject{/subproject}{/delivery}')
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

  getStatusLastDays (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/StatusLastDays{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getStatusGroupMonth (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/StatusGroupMonth{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getCTsImpactedXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/CtsImpactedXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefects (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/ProductivityXDefects{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getProductivityXDefectsGroupWeekly (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/ProductivityXDefectsGroupWeekly{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  // ITERATIONS

  getIterations (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/Iterations{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getIterationsActive (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/IterationsActive{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getIterationsSelected (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/IterationsSelected{/subproject}{/delivery}')
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

  getStatusLastDaysIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/StatusLastDaysIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getStatusGroupMonthIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/StatusGroupMonthIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getCTsImpactedXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/CtsImpactedXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/ProductivityXDefectsIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getProductivityXDefectsGroupWeeklyIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/project/testProj/ProductivityXDefectsGroupWeeklyIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
}
