import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorPerfDev/DefectInsideSLA/fbyListDevManufSystemProject')
    return resource.save(parameter)
  }
}
