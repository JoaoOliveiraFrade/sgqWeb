import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  fbyProject (project) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectReopened/fbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  fbyProjectAndListIteration (ProjectAndListIteration) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectReopened/fbyProjectAndListIteration')
    return resource.save(ProjectAndListIteration)
  },

  fbyListDevManufSystemProject (ListDevManufSystemProject) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectReopened/fbyListDevManufSystemProject')
    return resource.save(ListDevManufSystemProject)
  },

  fbyListDevManufSystemProjectIteration (ListDevManufSystemProjectIteration) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectReopened/fbyListDevManufSystemProjectIteration')
    return resource.save(ListDevManufSystemProjectIteration)
  }
}
