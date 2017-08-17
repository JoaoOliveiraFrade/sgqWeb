import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getByListTestManufSystemProject (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rateEvidRejected/ByListTestManufSystemProject')
    return resource.update(parameter)
  }
}
