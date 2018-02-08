import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  loadSystems (release) {
    let resource = Resource.resource(paths.api + '/trg/loadSystems')
    return resource.save(release)
  }
  // LoadData () {
  //   let resource = Resource.resource(paths.api + '/trg/data')
  //   return resource.get()
  // }
}
