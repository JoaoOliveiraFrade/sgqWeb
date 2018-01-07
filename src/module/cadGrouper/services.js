import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // Create
  create (item) {
    let resource = Resource.resource(paths.api + '/Grouper/create')
    // item['student_id'] = currentProfile.student.id
    return resource.update(item)
  },

  // Read
  getData () {
    let resource = Resource.resource(paths.api + '/Groupers')
    return resource.get()
  },

  get (id) {
    let resource = Resource.resource(paths.api + '/Grouper/{id}')
    return resource.get({id: id})
  },

  // Update
  update (item) {
    let resource = Resource.resource(paths.api + '/Grouper/update/{id}')
    return resource.update({id: item.id}, item)
  },

  // Delete
  delete (id) {
    let resource = Resource.resource(paths.api + '/Grouper/{id}')
    return resource.delete({id: id})
  }
}
