import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load () {
    let resource = Resource.resource(paths.api + '/devManuf/all')
    return resource.get()
  },

  loadFromAgent () {
    let resource = Resource.resource(paths.api + '/devManuf/allFromAgent')
    return resource.get()
  }
}

