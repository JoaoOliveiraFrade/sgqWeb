import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indOperTest/productivity/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  load (parameter) {
    let resource = Resource.resource(paths.api + '/indOperTest/productivity/byListTestManufSystemProject')
    return resource.save(parameter)
  },

  getproductivityByIds (ids) {
    let resource = Resource.resource(paths.api + '/indOperTest/productivity/byIds/{ids}')
    return resource.get({ids: ids})
  }
}
