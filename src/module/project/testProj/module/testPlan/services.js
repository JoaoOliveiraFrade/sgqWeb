import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/testPlan/data/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  }
}
