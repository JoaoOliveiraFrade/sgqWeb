import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  fromCTAndDefec () {
    let resource = Resource.resource(paths.api + '/system/fromCTAndDefec')
    return resource.get()
  },

  fromCTAndDefectGbyDevManuf () {
    let resource = Resource.resource(paths.api + '/system/fromCTAndDefectGbyDevManuf')
    return resource.get()
  },

  fromCTAndDefectGbyTestManuf () {
    let resource = Resource.resource(paths.api + '/system/fromCTAndDefectGbyTestManuf')
    return resource.get()
  },

  fromAgent () {
    let resource = Resource.resource(paths.api + '/system/fromAgent')
    return resource.sagetve()
  },

  fromAgentGbyDevManuf () {
    let resource = Resource.resource(paths.api + '/system/fromAgentGbyDevManuf')
    return resource.get()
  },

  fromAgentGbyTestManuf (devManufs) {
    let resource = Resource.resource(paths.api + '/system/fromAgentGbyTestManuf')
    return resource.get()
  }
}
