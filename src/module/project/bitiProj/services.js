import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data () {
    let resource = Resource.resource(paths.api + '/project/bitiProj/data')
    return resource.get()
  }
}
