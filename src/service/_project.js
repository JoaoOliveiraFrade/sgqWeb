
import vueResource from '@/http/vueResource'
import { paths } from '@/environment'

const resource = vueResource.resource(paths.api + '/projects_{/id}')

// const currentProfile = JSON.parse(window.localStorage.getItem('current-profile'))

export default {
  // Read
  getAll () {
    return resource.get()
  },
  getOne (id) {
    return resource.get({id: id})
  }
}