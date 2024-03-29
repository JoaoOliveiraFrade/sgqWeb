import vueResource from '@/http/vueResource'
import { paths } from '@/environment'

const resource = vueResource.resource(paths.api + '/statusGroupMonth{/subproject}{/delivery}')

export default {
  getByProject (project) {
    return resource.get({ subproject: project.subproject, delivery: project.delivery }, project)
  }
}
