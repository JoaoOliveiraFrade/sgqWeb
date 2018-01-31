import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  systems (release) {
    let resource = Resource.resource(paths.api + '/trg/systems')
    return resource.save(release)
  }
  // LoadData () {
  //   let resource = Resource.resource(paths.api + '/trg/data')
  //   return resource.get()
  // }
}
