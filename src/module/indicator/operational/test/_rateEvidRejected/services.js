import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rejectionEvidence/byListTestManufSystemProject')
    return resource.save(parameter)
  },
  loadGroupTimeline (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rejectionEvidence/byListTestManufSystemProject/groupTimeline')
    return resource.save(parameter)
  }
}
