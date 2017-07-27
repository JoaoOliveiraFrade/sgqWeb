import * as types from './mutationsTypes'
import { getUser } from '../services'

export const tryLogon = ({ commit }, parameter) => {
  console.log(parameter)
  if (parameter.login === '' || (parameter.password === '' && parameter.cpf === '')) {
    return Promise.reject('ssdsdfsd')
  }

  // services.getUserByCpf(payload.login, payload.password)
  getUser('login', 'password')
    .then(data => {
      if (data !== null) {
        commit(types.token, parameter.cpf)
        commit(types.user, data)
      }
    })
}
