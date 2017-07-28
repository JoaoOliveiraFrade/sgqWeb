import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  // Create
  create (groupId, projectId, subproject, delivery) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/create/{groupId}/{projectId}/{subproject}/{delivery}')
    // item['student_id'] = currentProfile.student.id
    return resource.get({groupId: groupId, projectId: projectId, subproject: subproject, delivery: delivery})
  },

  // Read
  getAll () {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/All')
    return resource.get()
  },

  get (id) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/{/id}')
    return resource.get({id: id})
  },

  // Update
  update (item) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper{/id}')
    return resource.update({id: item.id}, item)
  },

  // Delete
  delete (groupId, projectId) {
    let resource = Resource.resource(paths.api + '/ProjectXGrouper/Delete/{groupId}/{projectId}')
    return resource.get({groupId: groupId, projectId: projectId})
  }
}
