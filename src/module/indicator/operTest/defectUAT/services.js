import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  fbyProject (project) {
    let resource = Resource.resource(paths.api + '/indicatorOperTest/defectUAT/fbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/defectUAT/byListTestManufSystemProject')
    return resource.save(parameter)
  }
}
