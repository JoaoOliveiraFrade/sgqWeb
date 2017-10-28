import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  fbyProject (project) {
    let resource = Resource.resource(paths.api + '/indicatorOperTest/productivity/fbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorOperTest/productivity/byListTestManufSystemProject')
    return resource.save(parameter)
  },

  getproductivityByIds (ids) {
    let resource = Resource.resource(paths.api + '/indicatorOperTest/productivity/byIds/{ids}')
    return resource.get({ids: ids})
  }
}
