import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectOfTSInTI/fbyListDevManufSystemProject')
    return resource.save(parameter)
  },

  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectAverangeTime/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  fbyProjectAndListIteration (ProjectAndListIteration) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectAverangeTime/fbyProjectAndListIteration')
    return resource.save(ProjectAndListIteration)
  },

  fbyListDevManufSystemProject (ListDevManufSystemProject) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectAverangeTime/fbyListDevManufSystemProject')
    return resource.save(ListDevManufSystemProject)
  },

  fbyListDevManufSystemProjectIteration (ListDevManufSystemProjectIteration) {
    let resource = Resource.resource(paths.api + '/indOperDev/defectAverangeTime/fbyListDevManufSystemProjectIteration')
    return resource.save(ListDevManufSystemProjectIteration)
  }
}
