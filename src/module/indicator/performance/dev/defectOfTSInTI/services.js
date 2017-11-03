import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data (parameter) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectOfTSInTI/fbyListDevManufSystemProject')
    return resource.save(parameter)
  },
  datadataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectOfTSInTI/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  }
}
