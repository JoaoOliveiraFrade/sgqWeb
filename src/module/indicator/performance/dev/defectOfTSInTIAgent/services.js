import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  data (parameter) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectOfTSInTIAgent/data')
    return resource.save(parameter)
  },
  dataFbyProject (project) {
    let resource = Resource.resource(paths.api + '/indPerfDev/defectOfTSInTIAgent/dataFbyProject/{subproject}/{delivery}')
    return resource.get({ subproject: project.subproject, delivery: project.delivery })
  }
}
