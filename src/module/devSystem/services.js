import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getData () {
    let resource = Resource.resource(paths.apiDefault + '/DevSystem/data')
    return resource.get()
  },
  getByDevManufs (devManufs) {
    let resource = Resource.resource(paths.apiDefault + '/DevSystem/SystemsByDevManufs')
    return resource.save(devManufs)
  }
}
