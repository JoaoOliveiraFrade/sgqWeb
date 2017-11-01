import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load () {
    let resource = Resource.resource(paths.api + '/system/all')
    return resource.get()
  },

  loadFbyTestManufs (testManufs) {
    let resource = Resource.resource(paths.api + '/system/fromTestManufs')
    return resource.save(testManufs)
  },

  loadFbyDevManufs (devManufs) {
    let resource = Resource.resource(paths.api + '/system/fromDevManufs')
    return resource.save(devManufs)
  },

  loadFromAgentFbyDevManufs (devManufs) {
    let resource = Resource.resource(paths.api + '/system/fromAgentFbyDevManufs')
    return resource.save(devManufs)
  }

  // loadFromAgentGroupDevManufs () {
  //   let resource = Resource.resource(paths.api + '/system/OfAgentGroupDevManufs')
  //   return resource.get()
  // }
}
