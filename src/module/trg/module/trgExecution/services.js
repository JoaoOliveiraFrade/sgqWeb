import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  lastDays (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgExecution/lastDays')
    return resource.save(filters)
  },

  groupMonth (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgExecution/groupMonth')
    return resource.save(filters)
  },

  productivityXDefects (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgExecution/productivityXDefects')
    return resource.save(filters)
  },

  productivityXDefectsGroupWeekly (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgExecution/productivityXDefectsGroupWeekly')
    return resource.save(filters)
  },

  groupSystem (filters) {
    let resource = Resource.resource(paths.api + '/trg/trgExecution/groupSystem')
    return resource.save(filters)
  }
}
