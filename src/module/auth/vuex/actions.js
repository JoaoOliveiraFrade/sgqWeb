import * as types from './mutationsTypes'
import router from '@/router/index.js'
import Toastr from 'toastr'

import services from '../services'

export const tryLogon = ({ commit, state, dispatch }, user) => {
  services.loadUserByCpf(user)
    .then(d => {
      Toastr.success('Autenicação com sucesso!', '', { timeOut: 1000 })

      commit(types.token, user.cpf)
      commit(types.user, d.data)

      dispatch('tryLoadProfiles', d.data.id)

      if (state.to !== '') {
        router.push('/' + state.to)
      } else {
        router.push({ name: 'home' })
      }
    },
    e => {
      Toastr.error('Falha na Autenticação!<br>Cheque as credencias utilizadas...', '', { timeOut: 2000 })
    })

  // return new Promise((resolve, reject) => {
  //   services.loadUserByCpf(user)
  //     .then(d => {
  //       commit(types.token, user.cpf)
  //       commit(types.user, d.data)
  //       resolve()
  //     },
  //     e => {
  //       reject(e)
  //     })
  // })
}

export const tryLoadProfiles = ({ commit }, userId) => {
  services.loadProfilesByUserId(userId)
    .then(d => {
      // console.log(d.data.map(i => i.name))
      commit(types.profiles, d.data)
    },
    e => {
      console.log(e)
    })

  // return new Promise((resolve, reject) => {
  //   services.getProfilesByUser(userId)
  //     .then(d => {
  //       commit(types.profiles, d.data)
  //       resolve(d.data)
  //     },
  //     e => {
  //       reject(e)
  //     })
  // })
}

export const logoff = ({ commit }) => {
  commit(types.token, undefined)
  commit(types.profiles, [])
}

export const setTo = ({ commit }, parameter) => {
  commit(types.token, parameter)
}
