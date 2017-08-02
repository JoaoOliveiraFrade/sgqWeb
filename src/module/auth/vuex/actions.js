import * as types from './mutationsTypes'
import services from '../services'
// getUser('login', 'password')

export const tryLogon = ({ commit }, user) => {
  console.log(user)
  if (user.login === '' || user.cpf === '') {
    return Promise.reject('Login ou CPF não informados')
  } else {
    services.getUserByCpf(user)
      .then(d => {
        commit(types.token, user.cpf)
        commit(types.user, d.data)
      })
  }
}

export const logOff = ({ commit }) => {
  commit(types.token, '')
}
