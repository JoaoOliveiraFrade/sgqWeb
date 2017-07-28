import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getAll () {
    let resource = Resource.resource(paths.api + '/PulledChain/All')
    return resource.get()
  },
  update (item) {
    let resource = Resource.resource(paths.api + '/PulledChain/update{/id}')
    return resource.update({id: item.id}, item)
  }
}
