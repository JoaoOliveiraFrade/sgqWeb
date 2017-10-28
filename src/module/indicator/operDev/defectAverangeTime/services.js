import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorPerfDev/defectOfTSInTI/fbyListDevManufSystemProject')
    return resource.save(parameter)
  },

  fbyProject (project) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectAverangeTime/fbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  fbyProjectAndListIteration (ProjectAndListIteration) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectAverangeTime/fbyProjectAndListIteration')
    return resource.save(ProjectAndListIteration)
  },

  fbyListDevManufSystemProject (ListDevManufSystemProject) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectAverangeTime/fbyListDevManufSystemProject')
    return resource.save(ListDevManufSystemProject)
  },

  fbyListDevManufSystemProjectIteration (ListDevManufSystemProjectIteration) {
    let resource = Resource.resource(paths.api + '/indicatorOperDev/defectAverangeTime/fbyListDevManufSystemProjectIteration')
    return resource.save(ListDevManufSystemProjectIteration)
  }
}
