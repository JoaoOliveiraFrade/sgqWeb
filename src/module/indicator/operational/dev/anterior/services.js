import Resource from '@/http/vueResource'
import { paths } from '@/environment'

// const currentProfile = JSON.parse(window.localStorage.getItem('current-profile'))

export default {
  // getDensityByDate (dateBegin, dateEnd) {
  //   let resource = Resource.resource(paths.api + '/defectsDensity/{dateBegin}/{dateEnd}')
  //   return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  // },

  getAgingMedioByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.api + '/defectsMiddleAges/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getWrongClassificationDefectRateByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.api + '/defectsWrongClassif/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getdefectOfTSInTIByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.api + '/defectOfTSInTI/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getReopenedByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.api + '/defectsReopened/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getnoPredictionDefectsByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.api + '/defectsNoPrediction/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  }
}
