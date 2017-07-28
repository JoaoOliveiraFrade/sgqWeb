import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getAll () {
    let resource = Resource.resource(paths.api + '/System/All')
    return resource.get()
  },
  getSystemsByTestManufs (testManufs) {
    let resource = Resource.resource(paths.api + '/System/SystemsByTestManufs')
    return resource.save(testManufs)
  }
}
