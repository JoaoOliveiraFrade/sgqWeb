import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getAll () {
    let resource = Resource.resource(paths.apiDefault + '/System/All')
    return resource.get()
  },
  getSystemsByTestManufs (testManufs) {
    let resource = Resource.resource(paths.apiDefault + '/System/SystemsByTestManufs')
    return resource.save(testManufs)
  }
}
