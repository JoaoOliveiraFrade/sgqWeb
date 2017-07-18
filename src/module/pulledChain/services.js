import Resource from '@/http/vueResource'
import { paths } from '@/environment'
// const currentProfile = JSON.parse(window.localStorage.getItem('current-profile'))

export default {
  getAll () {
    let resource = Resource.resource(paths.apiDefault + '/PulledChain/All')
    return resource.get()
  },
  update (item) {
    let resource = Resource.resource(paths.apiDefault + '/PulledChain/update{/id}')
    return resource.update({id: item.id}, item)
  }
}
