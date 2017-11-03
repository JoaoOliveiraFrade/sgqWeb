import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectReopened/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  fbyProjectAndListIteration (ProjectAndListIteration) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectReopened/fbyProjectAndListIteration')
    return resource.save(ProjectAndListIteration)
  },

  fbyListDevManufSystemProject (ListDevManufSystemProject) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectReopened/fbyListDevManufSystemProject')
    return resource.save(ListDevManufSystemProject)
  },

  fbyListDevManufSystemProjectIteration (ListDevManufSystemProjectIteration) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectReopened/fbyListDevManufSystemProjectIteration')
    return resource.save(ListDevManufSystemProjectIteration)
  }
}
