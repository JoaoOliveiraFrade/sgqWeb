import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  fromAgent () {
    let resource = Resource.resource(paths.api + '/systemFromAgent/all')
    return resource.sagetve()
  },

  fromAgentGbyDevManuf () {
    let resource = Resource.resource(paths.api + '/systemFromAgent/gbyDevManuf')
    return resource.get()
  },

  fromAgentGbyTestManuf (devManufs) {
    let resource = Resource.resource(paths.api + '/systemFromAgent/gbyTestManuf')
    return resource.get()
  }
}
