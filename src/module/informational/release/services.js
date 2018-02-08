import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // Create
  create (item) {
    let resource = Resource.resource(paths.api + '/grouper/create')
    // item['student_id'] = currentProfile.student.id
    return resource.update(item)
  },

  // Read
  loadData () {
    let resource = Resource.resource(paths.api + '/informational/release/loadData')
    return resource.get()
  }

}
