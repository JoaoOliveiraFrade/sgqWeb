import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data (project) {
    let resource = Resource.resource(paths.api + '/project/testProj/testPlan/data/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  },

  steps (ct) {
    let resource = Resource.resource(paths.api + '/project/testProj/testPlan/step/{subproject}/{delivery}/{test}/{ct}')
    return resource.get(ct)
  }
}
