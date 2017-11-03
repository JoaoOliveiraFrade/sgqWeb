import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indOperTest/rejectionEvidence/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rejectionEvidence/byListTestManufSystemProject')
    return resource.save(parameter)
  },

  loadGroupTimeline (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rejectionEvidence/byListTestManufSystemProject/groupTimeline')
    return resource.save(parameter)
  }
}
