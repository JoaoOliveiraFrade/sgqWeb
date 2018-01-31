import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {

  load () {
    // let resource = Resource.resource(paths.api + '/defect/testProj/data')
    // return resource.get()
  },

  // getByDefect (project, defect) {
  defectDetail (defect) {
    let resource = Resource.resource(paths.api + '/defect/defectDetail')
    return resource.save(defect)
  },

  defectTime (defect) {
    let resource = Resource.resource(paths.api + '/defect/defectTime')
    return resource.save(defect)
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

  defectStatus (project) {
    let resource = Resource.resource(paths.api + '/defect/defectStatus{/subproject}{/delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  defectGroupOrigin (project) {
    let resource = Resource.resource(paths.api + '/defect/defectGroupOrigin{/subproject}{/delivery}')
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

  defectStatusIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/defect/defectStatusIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  },

  getdefectGroupOriginIterations (project, iterations) {
    let resource = Resource.resource(paths.api + '/defect/defectGroupOriginIterations{/subproject}{/delivery}')
    return resource.update({ subproject: project.subproject, delivery: project.delivery }, iterations)
  }
}
