import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  load (parameter) {
    let resource = Resource.resource(paths.api + '/indicatorPerfDev/defectDensity/fbyListDevManufSystemProject')
    return resource.save(parameter)
  },

  defectDensityFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indicatorPerfDev/defectDensity/fbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  }
}
