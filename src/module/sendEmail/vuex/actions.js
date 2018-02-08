import * as types from './mutationsTypes'
import services from '../services'

export const setEmailTo = ({ commit }, parameter) => {
  commit(types.emailTo, parameter)
}

export const setSubject = ({ commit }, parameter) => {
  commit(types.subject, parameter)
}

export const setFormat = ({ commit }, parameter) => {
  commit(types.format, parameter)
}

export const trySend = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    services.getUserByCpf(user)
      .then(d => {
        commit(types.token, user.cpf)
        commit(types.user, d.data)
        resolve()
      },
      e => {
        reject(e)
      })
  })
}
