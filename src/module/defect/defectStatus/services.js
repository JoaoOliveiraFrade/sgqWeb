import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getAll () {
    let resource = Resource.resource(paths.api + '/defectSla/all')
    return resource.get()
  }
}

