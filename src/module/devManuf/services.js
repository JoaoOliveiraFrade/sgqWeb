import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load () {
    let resource = Resource.resource(paths.api + '/devManuf/all')
    return resource.get()
  },

  loadOfQueue () {
    let resource = Resource.resource(paths.api + '/devManuf/allOfQueue')
    return resource.get()
  }
}

