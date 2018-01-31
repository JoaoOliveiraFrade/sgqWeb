import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  defectStatus (subprojectDelivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/testProjDefect/defectStatus')
    return resource.save(subprojectDelivery)
  },

  defectGroupOrigin (subprojectDelivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/testProjDefect/defectGroupOrigin')
    return resource.save(subprojectDelivery)
  },

  ctImpactedXDefects (subprojectDelivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/testProjDefect/ctImpactedXDefects')
    return resource.save(subprojectDelivery)
  },

  defectsOpen (subprojectDelivery) {
    let resource = Resource.resource(paths.api + '/project/testProj/testProjDefect/defectsOpen')
    return resource.save(subprojectDelivery)
  }

  // defectDetail (project, defect) {
  //   let resource = Resource.resource(paths.api + '/defect/defectDetail{/subproject}{/delivery}{/defect}')
  //   return resource.get({ subproject: project.subproject, delivery: project.delivery, defect: defect.id })
  // },

  // defectTime (subproject, delivery, defect) {
  //   let resource = Resource.resource(paths.api + '/defect/defectTime{/subproject}{/delivery}{/defect}')
  //   return resource.get({ subproject: subproject, delivery: delivery, defect: defect })
  // },

  // // ===========================================

  // defectsOpenInDevManuf (project) {
  //   let resource = Resource.resource(paths.api + '/defect/defectsOpenInDevManuf{/subproject}{/delivery}')
  //   return resource.get({ subproject: project.subproject, delivery: project.delivery })
  // },

  // defectsOpenInTestManuf (project) {
  //   let resource = Resource.resource(paths.api + '/defect/defectsOpenInTestManuf{/subproject}{/delivery}')
  //   return resource.get({ subproject: project.subproject, delivery: project.delivery })
  // },

  // defectGroupOrigin (project) {
  //   let resource = Resource.resource(paths.api + '/defect/defectGroupOrigin{/subproject}{/delivery}')
  //   return resource.get({ subproject: project.subproject, delivery: project.delivery })
  // }
}
