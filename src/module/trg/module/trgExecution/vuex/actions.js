import * as types from './mutationsTypes'
import services from '../services'
import getStatusTrans from '@/lib/getStatusTrans'

export const loadDataLastDays = ({ commit }, filters) => {
  commit(types.loading, true)
  services.lastDays(filters)
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

export const loadDataGroupMonth = ({ commit }, filters) => {
  commit(types.loading, true)
  services.groupMonth(filters)
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

export const loadDataProductivityXDefects = ({ commit }, filters) => {
  commit(types.loading, true)
  services.productivityXDefects(filters)
    .then(
      r => {
        commit(types.productivityXDefects, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDataProductivityXDefectsGroupWeekly = ({ commit }, filters) => {
  commit(types.loading, true)
  services.productivityXDefectsGroupWeekly(filters)
    .then(
      r => {
        commit(types.productivityXDefectsGroupWeekly, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDataGroupSystem = ({ commit }, filters) => {
  commit(types.loading, true)
  services.groupSystem(filters)
    .then(
      r => {
        commit(types.groupSystem, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}
