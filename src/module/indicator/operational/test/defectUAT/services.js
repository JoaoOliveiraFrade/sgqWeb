import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indOperTest/defectUAT/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/defectUAT/byListTestManufSystemProject')
    return resource.save(parameter)
  }
}
