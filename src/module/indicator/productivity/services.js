import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getProdutivityByIds (ids) {
    let resource = Resource.resource(paths.api + '/indicatorTest/produtivity/byIds/{ids}')
    return resource.get({ids: ids})
  },

  getProdutivityByProject (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/indicatorTest/produtivity/byProject{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  },

  getProdutivityByListTestManufSystemProject (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorTest/produtivity/byListTestManufSystemProject')
    return resource.update(parameter)
  }
}
