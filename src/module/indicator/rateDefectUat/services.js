import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getByListTestManufSystemProject (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/rateDefectUat/byListTestManufSystemProject')
    return resource.save(parameter)
  }
}
