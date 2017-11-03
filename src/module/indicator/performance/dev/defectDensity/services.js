import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectDensity/fbyListDevManufSystemProject')
    return resource.save(parameter)
  },

  defectDensitydataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectDensity/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  }
}
