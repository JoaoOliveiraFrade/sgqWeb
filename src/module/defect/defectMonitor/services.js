import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getDefectQueue () {
    let resource = Resource.resource(paths.api + '/defectMonitor/defectAqueue')
    return resource.get()
  }
}
