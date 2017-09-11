import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load () {
    let resource = Resource.resource(paths.api + '/system/all')
    return resource.get()
  },
  loadOfTestManufs (testManufs) {
    let resource = Resource.resource(paths.api + '/system/ofTestManufs')
    return resource.save(testManufs)
  }
}
