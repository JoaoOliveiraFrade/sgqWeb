import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getProdutivityIndByIds (ids) {
    let resource = Resource.resource(paths.api + '/indicatorOfTest/ProdutivityInd/ByIds/{ids}')
    return resource.get({ids: ids})
  },
  getProdutivityIndByProject (subproject, delivery) {
    let resource = Resource.resource(paths.api + '/indicatorOfTest/ProdutivityInd/byProject{/subproject}{/delivery}')
    return resource.get({ subproject: subproject, delivery: delivery })
  },

  getProdutivityIndByListTestManufSystemProject (produtivityIndFilterParameters) {
    let resource = Resource.resource(paths.api + '/indicatorOfTest/ProdutivityInd/ByListTestManufSystemProject')
    return resource.update(produtivityIndFilterParameters)
  },

  getRateRejectionEvidenceIndByListTestManufSystemProject (produtivityIndFilterParameters) {
    let resource = Resource.resource(paths.api + '/indicatorOfTest/RateRejectionEvidenceInd/ByListTestManufSystemProject')
    return resource.update(produtivityIndFilterParameters)
  }
}
