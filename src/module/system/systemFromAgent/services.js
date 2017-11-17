import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data () {
    let resource = Resource.resource(paths.api + '/systemFromAgent/data')
    return resource.get()
  },

  dataGbyDevManuf () {
    let resource = Resource.resource(paths.api + '/systemFromAgent/dataGbyDevManuf')
    return resource.get()
  },

  dataGbyTestManuf (devManufs) {
    let resource = Resource.resource(paths.api + '/systemFromAgent/dataGbyTestManuf')
    return resource.get()
  }
}
