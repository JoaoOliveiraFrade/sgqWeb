import * as types from './mutationsTypes'
import services from '../services'
import getStatusTrans from '@/lib/getStatusTrans'

export const loadDataLastDays = ({ commit }, project) => {
  commit(types.loading, true)
  services.lastDays(project)
    .then(
      r => {
        commit(types.last05Days, getStatusTrans(r.data.last05Days))
        commit(types.last30Days, getStatusTrans(r.data.last30Days))
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDataGroupMonth = ({ commit }, project) => {
  commit(types.loading, true)
  services.groupMonth(project)
    .then(
      r => {
        commit(types.groupMonth, getStatusTrans(r.data))
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}
