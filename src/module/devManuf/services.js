import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data () {
    let resource = Resource.resource(paths.api + '/devManuf/data')
    return resource.get()
  },

  dataFromAgent () {
    let resource = Resource.resource(paths.api + '/devManuf/dataFromAgent')
    return resource.get()
  }
}
