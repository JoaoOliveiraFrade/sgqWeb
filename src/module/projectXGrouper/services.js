import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // Create
  createOne (item) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper{/id}')
    // item['student_id'] = currentProfile.student.id
    return resource.save({}, item)
  },

  // Read
  getAll () {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/All')
    return resource.get()
  },

  getByProjectId (id) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/ByProject/{id}')
    return resource.get()
  },

  getByProject (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/ByProject/{subproject}/{delivery}')
    return resource.get()
  },

  getByGrouper (id) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/ByGrouper/{id}')
    return resource.get({id: id})
  },

  getOne (id) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/{id}')
    return resource.get({id: id})
  },

  // Update
  updateOne (item) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/{id}')
    return resource.update({id: item.id}, item)
  },

  // Delete
  deleteOne (id) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/{id}')
    return resource.delete({id: id})
  }
}
