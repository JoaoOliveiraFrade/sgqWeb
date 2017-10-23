import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorPerf/defectDensity/fbyListDevManufSystemProject')
    return resource.save(parameter)
  }
}
