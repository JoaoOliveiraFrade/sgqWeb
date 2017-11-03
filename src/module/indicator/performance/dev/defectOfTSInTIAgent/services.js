import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectOfTSInTIAgent/fbyListDevManufSystemProject')
    return resource.save(parameter)
  }
}
