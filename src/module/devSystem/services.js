import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getAll () {
    let resource = Resource.resource(paths.apiDefault + '/DevSystem/All')
    return resource.get()
  },
  getSystemsByDevManufs (devManufs) {
    let resource = Resource.resource(paths.apiDefault + '/DevSystem/SystemsByDevManufs')
    return resource.save(devManufs)
  }
}
