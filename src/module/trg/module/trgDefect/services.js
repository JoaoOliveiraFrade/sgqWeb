import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  defectStatus (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgDefect/defectStatus')
    return resource.save(filters)
  },

  defectGroupOrigin (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgDefect/defectGroupOrigin')
    return resource.save(filters)
  },

  ctImpactedXDefects (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgDefect/ctImpactedXDefects')
    return resource.save(filters)
  },

  defectsOpen (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgDefect/defectsOpen')
    return resource.save(filters)
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
