import vueResource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getByDefect (project, defect) {
    const resource = vueResource.resource(paths.api + '/defectDetail{/subproject}{/delivery}{/defect}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery, defect: defect.defect })
  }
}
