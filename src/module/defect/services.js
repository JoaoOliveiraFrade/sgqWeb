import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {

  load () {
    // let resource = Resource.resource(paths.api + '/defect/testProj/data')
    // return resource.get()
  },

  // getByDefect (project, defect) {
  defectDetail (project, defect) {
    console.log(project)
    console.log(defect)
    let resource = Resource.resource(paths.api + '/defect/defectDetail{/subproject}{/delivery}{/defect}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery, defect: defect.id })
  },

  // ===========================================

  defectsOpenInDevManuf (project) {
    let resource = Resource.resource(paths.api + '/defect/defectsOpenInDevManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  defectsOpenInTestManuf (project) {
    let resource = Resource.resource(paths.api + '/defect/defectsOpenInTestManuf{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  defectsStatus (project) {
    let resource = Resource.resource(paths.api + '/defect/defectsStatus{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  getDefectsGroupOrigin (project) {
    let resource = Resource.resource(paths.api + '/defect/DefectsGroupOrigin{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  // ITERATIONS

  defectsOpenInDevManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/defect/defectsOpenInDevManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  defectsOpenInTestManufIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/defect/defectsOpenInTestManufIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  defectsStatusIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/defect/defectsStatusIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getDefectsGroupOriginIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/defect/DefectsGroupOriginIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
}
