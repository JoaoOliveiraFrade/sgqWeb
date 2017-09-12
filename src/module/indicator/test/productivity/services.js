import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/productivity/byListTestManufSystemProject')
    return resource.save(parameter)
  },

  getproductivityByIds (ids) {
    let resource = Resource.resource(paths.api + '/indicatorTest/productivity/byIds/{ids}')
    return resource.get({ids: ids})
  },

  getproductivityByProject (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/indicatorTest/productivity/byProject{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  }
}
