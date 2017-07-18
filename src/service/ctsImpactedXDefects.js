import vueResource from '@/http/vueResource'
import { paths } from '@/environment'

const resource = vueResource.resource(paths.apiDefault + '/ctsImpactedXDefects{/subproject}{/delivery}')

export default {
  getByProject (project) {
    return resource.get({ subproject: project.subproject, delivery: project.delivery }, project)
  }
}
