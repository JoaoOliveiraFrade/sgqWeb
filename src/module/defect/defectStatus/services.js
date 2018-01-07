import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getData () {
    let resource = Resource.resource(paths.api + '/defectStatus/data')
    return resource.get()
  }
}
