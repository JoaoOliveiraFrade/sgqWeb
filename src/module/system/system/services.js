import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data () {
    let resource = Resource.resource(paths.api + '/system/data')
    return resource.get()
  },

  dataGbyDevManuf () {
    let resource = Resource.resource(paths.api + '/system/dataGbyDevManuf')
    return resource.get()
  },

  dataGbyTestManuf () {
    let resource = Resource.resource(paths.api + '/system/dataGbyTestManuf')
    return resource.get()
  }
}
