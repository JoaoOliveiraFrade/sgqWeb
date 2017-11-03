import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indOperTest/defectUnfounded/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/defectUnfounded/fbyListTestManufSystemProject')
    return resource.save(parameter)
  }
}
