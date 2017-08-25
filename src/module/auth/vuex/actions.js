import * as types from './mutationsTypes'
import services from '../services'

export const tryLogon = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    services.getUserByCpf(user)
      .then(d => {
        commit(types.token, user.cpf)
        commit(types.user, d.data)
        resolve()
      },
      e => {
        reject()
      })
  })
}

export const tryLoadProfiles = ({ commit }, userId) => {
  return new Promise((resolve, reject) => {
    services.getProfilesByUser(userId)
      .then(d => {
        commit(types.currentUserProfiles, d.data)
        resolve(d.data)
      },
      e => {
        reject(e)
      })
  })
}

export const logOff = ({ commit }) => {
  commit(types.token, '')
  commit(types.currentUserProfiles, [])
}
