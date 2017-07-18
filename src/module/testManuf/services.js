import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getAll () {
    let resource = Resource.resource(paths.apiDefault + '/TestManuf/All')
    return resource.get()
  }
}
