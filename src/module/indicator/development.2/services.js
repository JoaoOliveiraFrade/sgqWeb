import Resource from '@/http/vueResource'
import { paths } from '@/environment'

// const currentProfile = JSON.parse(window.localStorage.getItem('current-profile'))

export default {
  getDensityByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.apiDefault + '/defectsDensity/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getAgingMedioByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.apiDefault + '/defectsMiddleAges/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getWrongClassificationDefectRateByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.apiDefault + '/defectsWrongClassif/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getDetectableInDevByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.apiDefault + '/defectsDetectableInDev/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getReopenedByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.apiDefault + '/defectsReopened/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  },
  getnoPredictionDefectsByDate (dateBegin, dateEnd) {
    let resource = Resource.resource(paths.apiDefault + '/defectsNoPrediction/{dateBegin}/{dateEnd}')
    return resource.get({ dateBegin: dateBegin, dateEnd: dateEnd })
  }
}
