import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getByListTestManufSystemProject (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rateEvidRejected/byListTestManufSystemProject')
    return resource.save(parameter)
  },
  getByListTestManufSystemProjectGroupTimeline (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rateEvidRejected/byListTestManufSystemProject/groupTimeline')
    return resource.save(parameter)
  }
}
