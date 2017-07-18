import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // Create
  create (item) {
    let resource = Resource.resource(paths.apiDefault + '/grouper/create')
    // item['student_id'] = currentProfile.student.id
    return resource.update(item)
  },

  // Read
  getAll () {
    let resource = Resource.resource(paths.apiDefault + '/groupers')
    return resource.get()
  },

  get (id) {
    let resource = Resource.resource(paths.apiDefault + '/grouper/{id}')
    return resource.get({id: id})
  },

  // Update
  update (item) {
    let resource = Resource.resource(paths.apiDefault + '/grouper/update/{id}')
    return resource.update({id: item.id}, item)
  },

  // Delete
  delete (id) {
    let resource = Resource.resource(paths.apiDefault + '/grouper/{id}')
    return resource.delete({id: id})
  }
}
