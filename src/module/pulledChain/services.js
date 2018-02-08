import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load () {
    let resource = Resource.resource(paths.api + '/PulledChain/data')
    return resource.get()
  },
  loadDataChartCFD () {
    let resource = Resource.resource(paths.api + '/PulledChain/chartCFD')
    return resource.get()
  },
  update (item) {
    let resource = Resource.resource(paths.api + '/PulledChain/update')
    return resource.update(item)
  }
}
